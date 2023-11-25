import {default as React, useState} from "react";
import {Block, ILessonContent, ILessonTaskContentBlock} from "../../models/Lesson.model";
import {LessonTextEditBlock} from "../LessonTextEditBlock/LessonTextEditBlock";
import {Section} from "../ui/Section/Section";
import {LessonTaskEditBlock} from "../LessonTaskEditBlock/LessonTaskEditBlock";

type Props = {
    onSave: (blocks: Block[]) => void
}

export const EditLesson = ({onSave}: Props) => {
    const [blocks, setBlocks] = useState<Block[]>([]);

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
                blocks.map((b, index) => b.type === 'text' ?
                    <LessonTextEditBlock content={b.content}
                                         onChange={(value: string) => handleTextBlockChange(value, index)}
                    />
                    :
                    <LessonTaskEditBlock content={b.content} onChange={(content: ILessonTaskContentBlock) => handleTaskBlockChange(content, index)}/>
                )
            }

            <button onClick={addText}>Add text</button>
            <button onClick={addTask}>Add task</button>
            <button onClick={() => onSave(blocks)}>Save</button>
        </Section>
    )
};