interface RepositoriesState {
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

type Action =   
| SearchRepoAction
| SearchRepoErrorAction
| SearchRepoSuccessAction


enum ActionType {
    SEARCH_REPO = 'search_repo',
    SEARCH_REPO_SUCCESS = 'search_repo_success',
    SEARCH_REPO_ERROR = 'search_repo_error'
}


const reducer = (
    state:RepositoriesState,
    action:Action

    ) : RepositoriesState => {
    switch(action.type) {
        case ActionType.SEARCH_REPO:
            return {loading : true,error:null,data:[]}
        case ActionType.SEARCH_REPO_SUCCESS:
            return {loading : false,error:null,data: action.payload}
        case ActionType.SEARCH_REPO_ERROR:
            return {loading : false,error : action.payload,data : []} 
        default:
            return state; 
    }

};
export default reducer;