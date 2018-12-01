import {
    FETCH_HOME_BATCH_ERROR,
    FETCH_HOME_BATCH_SUCCESS,
    FETCH_HOME_BATCH_LOADER,
} from '../constants/index';

const intialState = {
    users: [],
    loading: false,
};

export const homeReducer = (state = intialState, action) => {

    switch(action.type) {
        case FETCH_HOME_BATCH_LOADER: {
            return {
                ...state,
                users: [],
                loading: true
            }
        }

        case FETCH_HOME_BATCH_SUCCESS: {
            return {
                ...state,
                users: action.data,
                loading: false,
            }
        }

        case FETCH_HOME_BATCH_ERROR: {
            return {
                ...state,
                loading: false
            };
        }

        default:
            return {
                ...state
            };
    }

};