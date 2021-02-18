export function fetchWeather(city){
    return function(dispatch){
        fetch(`http://api.weatherstack.com/current?access_key=86ec157079cb44bbe5a938b6eba50ac1&query=${city}`)
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            //dispatch the action
            dispatch({type:"FETCH_WEATHER", 
            payload: JSONres});
        }).catch(err => {
            console.log(err);
        })
    }
}