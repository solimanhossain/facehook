import { actions } from "../actions";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

function postReducer(state, action) {
    switch (action.type) {
        case actions.post.DATA_FETCHING:
            return { ...state, loading: true };

        case actions.post.DATA_FETCHED:
            return { ...state, loading: false, posts: action.data };

        case actions.post.DATA_FETCH_ERROR:
            return { ...state, loading: false, error: action.error };

        case actions.post.DATA_UPDATED:
            return {
                ...state,
                loading: false,
                posts: state.posts.concat(action.data),
            };

        case actions.post.DATA_DELETED:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };

        default:
            return state;
    }
}

export { initialState, postReducer };
