import React from 'react'
import { connect } from 'react-redux'


class WeatherList extends React.Component {

  renderWeather(cityData) {
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td></td>
        <td></td>
        <td></td>
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
