import axios from 'axios';

export function loadSuccess(data) {
    return {
        type: 'loadSuccess',
        data
    };
}

export function loadCustomerData(userId) {
    return function (dispatch) {
        let config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.get('http://localhost:8080/getOffers?userId='+userId, config)
            .then(res => {
                dispatch(loadSuccess(res.data));
            });
    }
}

export function handleChange(userId){
    return {
        type: 'handleChange',
        userId
    }
}


