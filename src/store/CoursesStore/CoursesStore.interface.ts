import {ICourse} from "../../models/Course.model";
import {ITag} from "../../models/Tag.model";
import {ILessonPreview} from "../../models/Lesson.model";
import {DeleteLessonRequestDto, GetLessonRequestDto} from "../../api/dto/Lesson.dto";

export interface ICoursesStore {
    courses: ICourse[];
    isLoading: boolean;
    tags: ITag[]

    lessonsPreviews: {
        [courseId: number]: ILessonPreview[]
    }

    getCourses(): void;
    getTags(): void;

    getCourseLessons({id}: GetLessonRequestDto): void;
    deleteLesson(dto: DeleteLessonRequestDto, courseId: number): void;
}