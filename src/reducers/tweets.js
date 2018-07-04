import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

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
        case ADD_TWEET:
            const { tweet } = actions
            let replyingTo = {}
            if(tweet.replyingTo !== null){
                replyingTo ={
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state,
                [actions.tweet.id]:actions.tweet,
                ...replyingTo
            }
        default :
            return state
    }
}