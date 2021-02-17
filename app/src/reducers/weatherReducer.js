 const weatherInfo = (state = {
   weatherInfo: {}
}, action) => {
    //check the action
    if(action.type = "FETCH_WEATHER"){
        state = {...state, weatherInfo: action.payload}
    }
    return state;
};

export default weatherInfo;