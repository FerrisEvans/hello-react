type Todo = {
    text: string
    complete: boolean
}

type ToggleComplete = (selectedTodo: Todo) => void
type DeleteItem = (item: Todo) => void
type AddTodo = (newTodo: string) => void
type ClearDone = () => void
type SelectAll = () => void