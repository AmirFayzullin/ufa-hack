import {useParams} from "react-router";
import {useEffect} from "react";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {Section} from "../../components/ui/Section/Section";
import * as React from "react";
import {LessonPreviewWrapper} from "../../components/ui/LessonPreview.styled/LessonPreviewWrapper.styled";

type Props = {
    store: IRootStore
}

export const Course = withStore(observer(({store}: Props) => {
    const params = useParams();

    const courseId = Number(params.courseId);

    const previews = store.coursesStore.lessonsPreviews[courseId];

    useEffect(() => {
        if (!previews) {
            store.coursesStore.getCourseLessons({
                id: courseId
            });
        }
    }, []);

    return (
        <Section>
            {
                previews &&
                    previews.map(p => <LessonPreviewWrapper>{p.lesson_name}</LessonPreviewWrapper>)
            }
        </Section>
    )
}));