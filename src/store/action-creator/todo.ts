import { TodoAction } from "../../types/todo"
import { Dispatch } from "redux"
import axios from "axios"
import { TodoActionType } from "../../types/todo"

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionType.FETCH_TODOS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(() => {
        dispatch({type: TodoActionType.FETCH_TODOS_SUCCESS,
                  payload: response.data})
      }, 500)
    } catch (e) {
      dispatch({type: TodoActionType.FETCH_TODOS_ERROS,
                payload: "произошла ошибка при загрузке пользователей"})
    }
  }
}



export function setTodoPage(page: number): TodoAction {
  return {type: TodoActionType.SET_TODO_PAGE, payload: page}
}