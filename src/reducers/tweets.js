import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweet (state = {}, actions){
    switch(actions.type){
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...actions.tweets
            }
        default :
            return state
    }
}