class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'search by city or hostel name',
    }
  }
  onchange(e) {
    this.setState({text: e.target.value})
  }

  //onclick, we need to change the class
    //make this a toggle to change the class back on click
  
  //class change will show the searched elements

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