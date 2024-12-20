import { actions } from "../actions";

const initialState = {
    user: null,
    posts: [],
    error: null,
    loading: false,
};

function profileReducer(state, action) {
    switch (action.type) {
        case actions.profile.DATA_FETCHING:
            return {
                ...state,
                loading: true,
            };

        case actions.profile.DATA_FETCHED:
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts,
            };

        case actions.profile.DATA_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case actions.profile.IMAGE_UPDATED:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    avatar: action.avatar,
                },
            };

        case actions.profile.DATA_UPDATED:
            return {
                ...state,
                loading: false,
                user: state.posts.filter((post) => post.id !== action.postId),
            };

        case actions.profile.DATA_POSTED:
            return {
                ...state,
                loading: false,
                user: action.data,
            };

        default:
            return state;
    }
}

export { initialState, profileReducer };
