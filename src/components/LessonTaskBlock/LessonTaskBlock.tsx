import {ILessonTaskContentBlock} from "../../models/Lesson.model";
import {Wrapper} from "./LessonTaskBlock.styled";

type Props = {
    content: ILessonTaskContentBlock
}

export const LessonTaskBlock = ({content}: Props) => {
    return (
        <Wrapper>
            <p>{content.question}</p>
            <div>
                {
                    content.answers.map(a =>
                        <div key={a.text}>
                            <input type='radio'/>
                            <span>{a.text}</span>
                        </div>

                    )
                }
            </div>
        </Wrapper>
    )
};