import {ChangeEvent} from "react";
import * as React from "react";
import {ILessonTextContentBlock} from "../../models/Lesson.model";

type Props = {
    content: ILessonTextContentBlock,
    onChange: (text: string) => void
}

export const LessonTextEditBlock = ({content, onChange}: Props) => {

    const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(evt.target.value);
    };

    return (
        <textarea value={content.text} onChange={handleChange}/>
    )
};