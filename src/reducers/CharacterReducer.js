export default (state = [], action) => {
    switch (action.type) {
        case 'FECTH_CHARACTER_INFO': {
            return [...state, action.payload]
        }
        default: {
            return state
        }
    }
}