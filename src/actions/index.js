import axios from 'axios'


const WEATHER_API_KEY = '3ce510c72422b3ca0b6273e052aca96d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
  const requestUrl = `${ROOT_URL}&q=${city},us`
  const request = axios.get(requestUrl)
  console.log('request : ', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
