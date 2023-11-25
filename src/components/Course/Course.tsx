import * as React from "react";
import {CourseWrapper} from "../ui/Course/CourseWrapper.styled";
import {CourseTitle} from "../ui/Course/CourseTitle.styled";
import {ICourse} from "../../models/Course.model";
import {TagsRow} from "../ui/Course/TagsRow.styled";
import {Tag} from "../ui/Course/Tag.styled";
import { useNavigate } from 'react-router-dom';
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {CourseDescription} from "../ui/Course/CourseDescription.styled";

type Props = {
    data: ICourse,
    store: IRootStore
}

export const Course = withStore(observer(({data, store}: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/courses/${data.id}`);
    };

    return (
        <CourseWrapper onClick={handleClick}>
            <CourseTitle>
                {data.name}
            </CourseTitle>
            <CourseDescription>
                {data.description}
            </CourseDescription>
            <TagsRow>
                {
                    data.tags.map(t => <Tag>{store.coursesStore.tags.find(tag => t.id === tag.id)?.name}</Tag>)
                }
            </TagsRow>
        </CourseWrapper>
    )
}))