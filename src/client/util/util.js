import axios from 'axios';
const month = [
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];


/**
 * For all GET api's, Call this function.
 * @param api_url String contains api to be called
 * @returns {Promise<any> | * | Promise | Promise.<T>}
 */
export const getCallApi = (api_url) => {


    return axios.get(api_url)
        .then(data => {
            return Promise.resolve(data.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });

}


/**
 * For all POST api's, Call this function.
 * @param api_url String contains api to be called
 * @param body Object contains the data to be sent in the POST request.
 * @returns {Promise<any> | * | Promise | Promise.<T>}
 */
export const postCallApi = (api_url, body) => {

    return axios.post(api_url, body)
        .then(data => {
            return Promise.resolve(data.data);
        })
        .catch(error =>{
            return Promise.reject(error);
        });
}

export const formatDate = (date) => {
    // eslint-disable-next-line
    const toDate = new Date(parseInt(date));
    return `${month[toDate.getMonth() - 1]} ${toDate.getDate()}, ${toDate.getFullYear()}`
};

/**
 * Function to change time to google format.
 * @param time
 * @returns {string}
 */
export const googleTimeFormat = (time) => {
    const date = new Date(time);
    const dateTime = date.getUTCFullYear() + '-' + date.getUTCMonth() + '-' + date.getUTCDate() + 'T' + date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds() + '+5:30';
    return dateTime.toString();
};