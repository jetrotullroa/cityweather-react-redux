import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends React.Component {

  renderWeather(cityData) {

    const cityId = cityData.city.id
    const cityName = cityData.city.name
    const cityTemps = cityData.list.map(weather => weather.main.temp)
    const cityPressures = cityData.list.map(weather => weather.main.pressure)
    const cityHumidities = cityData.list.map(weather => weather.main.humidity)


    return (
      <tr key={cityId}>
        <td>{cityName}</td>
        <td><Chart color="red" data={cityTemps} /></td>
        <td><Chart color="green" data={cityPressures} /></td>
        <td><Chart color="blue" data={cityHumidities} /></td>
      </tr>
    )
  }



  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
