import {FETCH_QUESTION} from '../constants/constants'

const Scrambler = (state=[], action) => {
    switch(action.type) {    
        case FETCH_QUESTION:
            const question = {
                actual_word : action.payload.actual_word,
                scrambled_word : action.payload.scrambled_word,
                index : action.payload.index,
                split_scrambled_word : action.payload.split_scrambled_word
            }
            return(question)

        default : 
            return(state);

    }
}

export default Scrambler;