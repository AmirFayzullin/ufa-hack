import * as React from "react";
import {Section} from "../../components/ui/Section/Section";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {useEffect} from "react";
import {Course} from "../../components/Course/Course";

type Props = {
    store: IRootStore
}

export const Courses = withStore(observer(({store}: Props) => {

    const { coursesStore } = store;

    useEffect(() => {
        if (coursesStore.courses) {
            coursesStore.getCourses();
            coursesStore.getTags();
        }
    }, []);


    return (
        <Section>
            {
                coursesStore.courses && !coursesStore.isLoading &&
                coursesStore.courses.map(c => <Course data={c}/>)
            }
        </Section>
    )
}));