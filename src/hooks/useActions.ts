
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRepo } from '../action-creators';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(searchRepo,dispatch);


}
