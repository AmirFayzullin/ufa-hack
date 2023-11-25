import {useParams} from "react-router";
import {createRef, useEffect} from "react";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {Section} from "../../components/ui/Section/Section";
import * as React from "react";
import {LessonPreviewWrapper} from "../../components/ui/Lesson/LessonPreviewWrapper.styled";
import {useNavigate} from "react-router-dom";

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

    return (
        <Section>
            {
                previews &&
                    previews.map(p =>
                        <LessonPreviewWrapper onClick={() => handleLessonClick(p.lesson_id)}>
                            {p.lesson_name}
                        </LessonPreviewWrapper>)
            }
            {
                store.authStore.isAdmin &&
                    <>
                        <input ref={lessonInput}/>
                        <button onClick={handleCreateLesson}>Create</button>
                    </>
            }
        </Section>
    )
}));