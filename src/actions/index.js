import gotAPI from '../api/got';

export const fetchCharacters = () => async (dispatch) => {
    const response = await gotAPI.get('/Characters');
    
    dispatch({
        type: 'FECTH_CHARACTERS',
        payload: response.data
    })
}