import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreator from '../store/action-creator/'


export const useActions = () => {
  const dispatch = useDispatch()
  console.log(ActionCreator)
  return bindActionCreators(ActionCreator, dispatch)
}