export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveeUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}