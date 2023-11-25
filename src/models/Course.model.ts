type Tag = {
    id: number,
    course_id: number,
    tag_id: number
}

export interface ICourse {
    id: number,
    name: string,
    description: string | null,
    avg_mark: number,
    user_feedback: number,
    isFinished: boolean,
    tags: Tag[]
}