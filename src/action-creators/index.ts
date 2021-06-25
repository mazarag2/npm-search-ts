import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux'

const NPM_SEARCH_API_ENDPOINT = 'https://registry.npmjs.org/-/v1/search'

export const searchRepo = (term :string) => {
    
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPO
        })

        const { data } = await axios.get(NPM_SEARCH_API_ENDPOINT,{
            params : {
                text : term
            }
        }) 

        const names = data.objects.map((result: any) => {
            return result.package.name
        })

        dispatch({
            type : ActionType.SEARCH_REPO_SUCCESS,
            payload : names
        })
        try {
            
        }catch(err) {
            dispatch({
                type : ActionType.SEARCH_REPO_ERROR,
                payload : err.message
            })
            
        }
        
    }

}