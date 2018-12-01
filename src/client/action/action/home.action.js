import {
    FETCH_HOME_BATCH_ERROR,
    FETCH_HOME_BATCH_LOADER,
    FETCH_HOME_BATCH_SUCCESS
} from '../../constants/index';

export const asyncHomeLoader = () => {
    return {
        type: FETCH_HOME_BATCH_LOADER
    }
};

export const asyncHomeSuccess = (data) => {
    return {
        type: FETCH_HOME_BATCH_SUCCESS,
        data
    };
};

export const asyncHomeError = (error) => {
    return {
        type: FETCH_HOME_BATCH_ERROR,
        error
    };
};