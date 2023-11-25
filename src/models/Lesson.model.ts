export interface ILessonPreview {
    lesson_id: number;
    lesson_name: string;
    mark: number;
}

export interface ILesson {
    id: number;
    course_id: string;
    name: string;
    content: string;
}

interface IAnswer {
    text: string;
    isAnswer: boolean;
}

export interface ILessonTaskContentBlock {
    question: string;
    answers: IAnswer[]
}

export interface ILessonTextContentBlock {
    text: string;
}

export type Block =
    {
        type: "text",
        content: ILessonTextContentBlock
    }
    |
    {
        type: "task",
        content: ILessonTaskContentBlock
    }

export interface ILessonContent {
    blocks: Block[]
}