import initialState from './initialState'

const auth = {
    'route:change': (state, { page }) => {
        return Object.assign(
            {}, 
            {...state},
            {page}
        )
    }
}

export default (state = initialState.route, action) => {
    return action.type in auth
        ? auth[action.type](state, action)
        : state
}
