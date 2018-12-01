import {
    asyncHomeError,
    asyncHomeSuccess,
    asyncHomeLoader,
} from '../action/home.action';
import { getCallApi } from "../../util/util";
import {
    FETCH_HOME_BATCH_1
} from "../../constants/api";


export const asyncHomeFetch = () => {
    return (dispatch) => {
        dispatch(asyncHomeLoader());
        return getCallApi(FETCH_HOME_BATCH_1)
            .then((data) => {
                dispatch(asyncHomeSuccess(data));
                return Promise.resolve(data);
            })
            .catch((error) => {
                dispatch(asyncHomeError(error));
                return Promise.reject(error);
            });
    }
};