import {API_URI} from './constants/constants'
import {fetchQuestion} from './actions/actionCreator'

export const getQuestionFromApi = () => {
    return dispatch => {
        fetch(API_URI, {
            method : 'GET'
        }).then((response) => response.json())
        .then( (responseJson) => {
            dispatch(fetchQuestion(responseJson))
        })
        .catch((error) => {
            console.error(error)
        })
    }
}
