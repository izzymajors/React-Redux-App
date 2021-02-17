export function fetchWeather(city){
    return function(dispatch){
        fetch("http://api.weatherstack.com/current?access_key=86ec157079cb44bbe5a938b6eba50ac1&query={city}")
    }
}