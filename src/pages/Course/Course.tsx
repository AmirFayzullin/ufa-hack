import {useParams} from "react-router";
import {createRef, useEffect} from "react";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {Section} from "../../components/ui/Section/Section";
import * as React from "react";
import {LessonPreviewWrapper} from "../../components/ui/Lesson/LessonPreviewWrapper.styled";
import {useNavigate} from "react-router-dom";
import {AuthInput} from "../../components/ui/AuthInput/AuthInput.styled";
import {SubmitButton} from "../../components/ui/SubmitButton/SubmitButton.styled";
import {AddBar} from "./Course.styled";
import {DeleteButton} from "../../components/ui/DeleteButton/DeleteButton.styled";

type Props = {
    store: IRootStore
}

export const Course = withStore(observer(({store}: Props) => {
    const params = useParams();
    const navigate = useNavigate();

    const lessonInput = createRef<HTMLInputElement>();

    const courseId = Number(params.courseId);

    const previews = store.coursesStore.lessonsPreviews[courseId];

    useEffect(() => {
        if (!previews) {
            store.coursesStore.getCourseLessons({
                id: courseId
            });
        }
    }, []);

    const handleLessonClick = (id: number) => {
        navigate(`/courses/${courseId}/lessons/${id}`);
    };

    const handleCreateLesson = () => {

        const name = lessonInput.current?.value || "";

        if (!name) return;

        store.lessonStore.createLesson({
            course_id: courseId,
            name
        })
    };

    const handleDelete = (id: number) => {
        store.coursesStore.deleteLesson({id}, courseId)
    }

    return (
        <Section>
            {
                store.authStore.isAdmin &&
                <AddBar>
                    <AuthInput ref={lessonInput}/>
                    <SubmitButton onClick={handleCreateLesson}>Create</SubmitButton>
                </AddBar>
            }
            {
                previews &&
                previews.map(p =>
                    p
                        ?
                        <LessonPreviewWrapper onClick={() => handleLessonClick(p.lesson_id)}>
                            {p.lesson_name}

                            {
                                store.authStore.isAdmin &&
                                <DeleteButton
                                    onClick={(evt) => {
                                        evt.stopPropagation();
                                        handleDelete(p.lesson_id)
                                    }}
                                />
                            }
                        </LessonPreviewWrapper>
                        :
                        null
                )
            }
        </Section>
    )
}));