import {default as React, useEffect, useState} from "react";
import {Block, ILessonContent, ILessonTaskContentBlock} from "../../models/Lesson.model";
import {LessonTextEditBlock} from "../LessonTextEditBlock/LessonTextEditBlock";
import {Section} from "../ui/Section/Section";
import {LessonTaskEditBlock} from "../LessonTaskEditBlock/LessonTaskEditBlock";
import {SubmitButton} from "../ui/SubmitButton/SubmitButton.styled";
import {ControlsWrapper} from "./EditLesson.styled";

type Props = {
    onSave: (blocks: Block[]) => void,
    content: Block[]
}

export const EditLesson = ({onSave, content}: Props) => {
    const [blocks, setBlocks] = useState<Block[]>([]);

    useEffect(() => {
        setBlocks(content || []);
    }, []);

    const addText = () => {
        console.log('add');
        setBlocks([
            ...blocks,
            {
                type: "text",
                content: {
                    text: ''
                }
            }
        ])
    }

    const addTask = () => {
        setBlocks([
            ...blocks,
            {
                type: "task",
                content: {
                    question: '',
                    answers: []
                }
            }
        ])
    }

    const handleTextBlockChange = (text: string, index: number) => {
        setBlocks(blocks =>
            blocks.map((b, idx) => idx === index && b.type === 'text' ? {...b, content: {text}} : b)
        )
    };

    const handleTaskBlockChange = (content: ILessonTaskContentBlock, index: number) => {
        setBlocks(blocks => blocks.map((b, i) => i === index && b.type === 'task' ? {...b, content} : b));
    }

    return (
        <Section>
            {
                blocks?.map((b, index) => b.type === 'text' ?
                    <LessonTextEditBlock content={b.content}
                                         onChange={(value: string) => handleTextBlockChange(value, index)}
                    />
                    :
                    <LessonTaskEditBlock content={b.content} onChange={(content: ILessonTaskContentBlock) => handleTaskBlockChange(content, index)}/>
                )
            }

            <ControlsWrapper>
                <SubmitButton onClick={addText}>Add text</SubmitButton>
                <SubmitButton onClick={addTask}>Add task</SubmitButton>
                <SubmitButton onClick={() => onSave(blocks)}>Save</SubmitButton>
            </ControlsWrapper>
        </Section>
    )
};