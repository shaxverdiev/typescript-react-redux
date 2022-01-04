import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
export {useSelector} from 'react-redux';
// тот же самый useSelector, но уже работающий с типами

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector