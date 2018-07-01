import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweet (state = {}, actions){
    switch(action.type){
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default :
            return state
    }
}