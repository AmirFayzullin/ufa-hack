import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {useParams} from "react-router";
import {useEffect} from "react";
import * as React from "react";
import {Section} from "../../components/ui/Section/Section";
import {EditLesson} from "../../components/EditLesson/EditLesson";
import {Block} from "../../models/Lesson.model";
import {LessonTextBlock} from "../../components/ui/LessonTextBlock/LessonTextBlock";
import {LessonTaskBlock} from "../../components/LessonTaskBlock/LessonTaskBlock";
import {LessonContentWrapper} from "../../components/ui/Lesson/LessonContentWrapper.styled";
import MarkdownEditor from '@uiw/react-markdown-editor';

type Props = {
    store: IRootStore
}

export const Lesson = withStore(observer(({store}: Props) => {

    const params = useParams();

    const lessonId = Number(params.lessonId);

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
        });
    };

    if (!lesson) return null;

    const content: Block[] = JSON.parse(lesson.content);

    if (store.authStore.isAdmin) return <EditLesson content={content} onSave={handleSave}/>;

    return (
        <Section>
            <LessonContentWrapper>
                {
                    content &&
                    content.map(b => b.type === 'text' ?
                        <MarkdownEditor.Markdown source={b.content.text}/>
                        :
                        <LessonTaskBlock content={b.content} key={b.content.question}/>
                    )
                }
            </LessonContentWrapper>
        </Section>
    )
}));