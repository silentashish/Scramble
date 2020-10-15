import {FETCH_QUESTION, VERIFY_ANSWER} from '../constants/constants'

export const fetchQuestion = (payload) => {
    return({
        type : FETCH_QUESTION,
        payload
    })
}

export const verifyAnswer = (payload) => {
    return({
        type : VERIFY_ANSWER,
        payload
    })
}