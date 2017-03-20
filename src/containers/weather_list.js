import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends React.Component {

  renderWeather(cityData) {

    const cityId = cityData.city.id
    const cityName = cityData.city.name
    const cityTemps = cityData.list.map(weather => weather.main.temp)
    const cityPressures = cityData.list.map(weather => weather.main.pressure)
    const cityHumidities = cityData.list.map(weather => weather.main.humidity)
    const cityLatitude = cityData.city.coord.lat
    const cityLongitude = cityData.city.coord.lon

    console.log(cityLongitude, cityLatitude)
    return (
      <tr key={cityId}>
        <td className="col-md-3"><GoogleMap lat={cityLatitude} lon={cityLongitude} /></td>
        <td className="col-md-3"><Chart color="red" data={cityTemps} unit="K" /></td>
        <td className="col-md-3"><Chart color="green" data={cityPressures} unit="hPa" /></td>
        <td className="col-md-3"><Chart color="blue" data={cityHumidities} unit="%" /></td>
      </tr>
    )
  }



  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-3">City</th>
            <th className="col-md-3">Temperature</th>
            <th className="col-md-3">Pressure</th>
            <th className="col-md-3">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({weather}) => {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
