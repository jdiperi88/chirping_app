import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

export default function tweet (state = {}, actions){
    switch(actions.type){
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...actions.tweets
            }
        case TOGGLE_TWEET:
        return {
            ...state,
            [actions.id]: {
                ...state[actions.id],
                likes: actions.hasLiked === true
                    ? state[actions.id].likes.filter((uid) => uid !== actions.authedUser)
                    : state[actions.id].likes.concat([actions.authedUser])
            }
        }
        default :
            return state
    }
}