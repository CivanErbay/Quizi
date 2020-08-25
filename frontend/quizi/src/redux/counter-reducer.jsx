

export function username(state = 0, action) {
    switch (action.type) {
        case 'NAMECHANGE':
            return {
                ...state,
                name: action.data.name
            }
        default:
            return state
    }
}