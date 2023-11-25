import {ILessonTaskContentBlock} from "../../models/Lesson.model";
import {ChangeEvent, ChangeEventHandler} from "react";

type Props = {
    content: ILessonTaskContentBlock,
    onChange: (content: ILessonTaskContentBlock) => void
}

export const LessonTaskEditBlock = ({content, onChange}: Props) => {

    const handleQuestionChange = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...content,
            question: evt.target.value
        });
    };

    const handleAnswerChange = (evt: ChangeEvent<HTMLInputElement>, index: number) => {
        onChange({
            ...content,
            answers: content.answers.map((a, i) =>
                i === index ? {...a, text: evt.target.value} : a
            )
        })
    };

    const handleIsAnswerChange = (evt: ChangeEvent<HTMLInputElement>, index: number) => {
        onChange({
            ...content,
            answers: content.answers.map((a, i) =>
                i === index ?
                    {...a, isAnswer: evt.target.checked}
                :
                    {...a, isAnswer: false}
            )
        })
    };

    const handleAddAnswer = () => {
        onChange({
            ...content,
            answers: [
                ...content.answers,
                {
                    text: '',
                    isAnswer: false
                }
            ]
        })
    }

    return (
        <div>
            <input value={content.question} onChange={handleQuestionChange as ChangeEventHandler}/>
            {
                content.answers.map((a, index) =>
                    <div>
                        <input value={a.text} onChange={(evt) => handleAnswerChange(evt, index)}/>
                        <input type='radio' checked={a.isAnswer} onChange={(evt) => handleIsAnswerChange(evt, index)}/>
                    </div>
                )
            }

            <button onClick={handleAddAnswer}>Add</button>
        </div>
    )
};