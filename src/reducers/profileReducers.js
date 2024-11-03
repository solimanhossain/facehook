import { actions } from "../actions";

const initialState = {
    user: null,
    post: [],
    error: null,
    loading: false,
};

const profileReducer = (state, action) => {
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
                post: action.data.post,
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
                user: action.data,
            };
        default:
            return state;
    }
};

export { initialState, profileReducer };
