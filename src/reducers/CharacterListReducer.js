export default (state = [], action) => {
    switch (action.type) {
        case 'FECTH_CHARACTERS': {
            return action.payload
        }
        default: {
            return state
        }
    }
}