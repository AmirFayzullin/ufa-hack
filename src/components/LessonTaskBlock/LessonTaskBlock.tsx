import {ILessonTaskContentBlock} from "../../models/Lesson.model";
import {Answer, AnswerWrapper, Wrapper} from "./LessonTaskBlock.styled";
import {useState} from "react";

type Props = {
    content: ILessonTaskContentBlock
}

export const LessonTaskBlock = ({content}: Props) => {
    const [selected, setSelected] = useState("");

    return (
        <Wrapper>
            <p>{content.question}</p>
            <form>
                {
                    content.answers.map(a =>
                        <AnswerWrapper key={a.text} onClick={() => setSelected(a.text)}>
                            <input type='radio' checked={selected === a.text}/>
                            <Answer isCorrect={a.isAnswer} selected={selected === a.text}>{a.text}</Answer>
                        </AnswerWrapper>

                    )
                }
            </form>
        </Wrapper>
    )
};