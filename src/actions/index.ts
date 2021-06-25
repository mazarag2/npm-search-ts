
import { ActionType } from '../action-types/index'

export interface RepositoriesState {
    loading : boolean;
    error : string | null;
    data : Array<string>
}


interface SearchRepoSuccessAction {
    type : ActionType.SEARCH_REPO_SUCCESS;
    payload : string[];
}

interface SearchRepoErrorAction {
    type: ActionType.SEARCH_REPO_ERROR;
    payload : string;
}

interface SearchRepoAction {
    type: ActionType.SEARCH_REPO;
}

export type Action =   
| SearchRepoAction
| SearchRepoErrorAction
| SearchRepoSuccessAction



