import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {useParams} from "react-router";
import {useEffect} from "react";
import * as React from "react";
import {Section} from "../../components/ui/Section/Section";
import {EditLesson} from "../../components/EditLesson/EditLesson";
import {Block} from "../../models/Lesson.model";

type Props = {
    store: IRootStore
}

export const Lesson = withStore(observer(({store}: Props) => {

    const params = useParams();

    const lessonId = Number(params.lessonId);
    const courseId = Number(params.courseId);

    const lesson = store.lessonStore.lessons[lessonId];

    useEffect(() => {
        if (!lesson) {
            store.lessonStore.getLesson({
                id: lessonId
            })
        }
    }, []);

    const handleSave = (blocks: Block[]) => {
        store.lessonStore.saveLesson({
            lesson_id: lessonId,
            content: JSON.stringify(blocks),
            course_id: courseId,
            name: lesson.name
        });
    };

    if (store.authStore.isAdmin) return <EditLesson onSave={handleSave}/>;

    return (
        <Section>
            {
                lesson && lesson.content
            }
        </Section>
    )
}));