interface ITodo {
    _id: string
    name: string
    status: boolean
    createdAt?: string
    updateAt?: string
}

interface TodoProps {
    todo: Itodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: Itodo
}