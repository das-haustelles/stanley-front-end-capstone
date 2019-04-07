import Select from 'react-select'
// import 'react-select/dist/react-select.css';
import $ from 'jquery'

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'search by city or hostel name',
      options: [],
    }
    this.setOptions = this.setOptions.bind(this);
  }

  componentDidMount() {
    this.searchInputAPI();
  }
  textInputChange(e) {
    console.log("this.state.text = ", this.state.text)
    this.setState({text: e.target.value})
  }

  setOptions(data) {
    this.setState({options: data})
  }

  searchInputAPI() {

    fetch('http://localhost:1128/Input')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setOptions(data)
      })
  }

  render() {
    return (
      <form>
        <label>
        location
          <input onChange={(e) => this.textInputChange(e)} type='text' value={this.state.text}>
          </input>
        </label>
      </form>
    )
  }
}

export default SearchInput;