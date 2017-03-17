import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({
      term: ''
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group col-sm-12">
          <input
            className="col-sm-12"
            type="text"
            name="term"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn"><button className="btn btn-primary">Search</button></span>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch )
}


export default connect(null, mapDispatchToProps)(SearchBar)
