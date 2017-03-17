import React from 'react'


class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form className="input-group col-sm-12">
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


export default SearchBar
