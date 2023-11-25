import {ChangeEvent} from "react";
import * as React from "react";
import {ILessonTextContentBlock} from "../../models/Lesson.model";
import {Textarea} from "./LessonTextEditBlock.styled";
import MarkdownEditor from '@uiw/react-markdown-editor';

type Props = {
    content: ILessonTextContentBlock,
    onChange: (text: string) => void
}

export const LessonTextEditBlock = ({content, onChange}: Props) => {

    // const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    //     onChange(evt.target.value);
    // };

    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <MarkdownEditor
            style={{
                background: 'transparent',
                color: 'white',
                height: '150px'
            }}

            value={content.text}
            onChange={handleChange}
        />
    )
};