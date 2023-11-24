export interface IRootStore {
    time: number
    something: string
    response: any

    increase: () => void
    decrease: () => void
    setSomething: (smth: string) => void
    request: () => void
}