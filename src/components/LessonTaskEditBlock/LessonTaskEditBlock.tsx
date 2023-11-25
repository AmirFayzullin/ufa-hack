import {ILessonTaskContentBlock} from "../../models/Lesson.model";
import {ChangeEvent, ChangeEventHandler} from "react";
import {AuthInput} from "../ui/AuthInput/AuthInput.styled";
import {SubmitButton} from "../ui/SubmitButton/SubmitButton.styled";
import {AnswerWrapper, Wrapper} from "./LessonTaskEditBlock.styled";

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
        <Wrapper>
            <AuthInput placeholder='Question' value={content.question} onChange={handleQuestionChange as ChangeEventHandler}/>
                {
                    content.answers.map((a, index) =>
                        <AnswerWrapper>
                            <AuthInput placeholder='Answer' value={a.text} onChange={(evt) => handleAnswerChange(evt, index)}/>
                            <input type='radio' checked={a.isAnswer} onChange={(evt) => handleIsAnswerChange(evt, index)}/>
                        </AnswerWrapper>
                    )
                }
            <SubmitButton onClick={handleAddAnswer}>Add answer</SubmitButton>
        </Wrapper>
    )
};