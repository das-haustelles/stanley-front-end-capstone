class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'search by city or hostel name',
    }
  }
  onchange(e) {
    console.log("e.target.value = ", e.target.value)
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <form>
        <label>
        location 
          <input onChange={(e) => this.onchange(e)} type='text' value={this.state.text}>

          </input>
        </label>
      </form>
    )
  }
}

export default SearchInput;