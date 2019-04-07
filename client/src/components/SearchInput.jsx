import {Dropdown} from 'semantic-ui-react'

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'search by city or hostel name',
      options: [],
    }
  }
  
  componentDidMount() {
    this.searchInputAPI()
  }

  

  textInputChange(e) {
    console.log("this.state.text = ", this.state.text)
    this.setState({text: e.target.value})
  }

  searchInputAPI() {

    fetch('http://localhost:1128/Input')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({options: data});
      })
  }

  render() {
    return (
      <div>
        <Dropdown
          placeholder='Select City'
          fluid
          search
          selection
          options={this.state.options}
    />
      </div>
      // <form>
      //   <label>
      //   location
      //     <input onChange={(e) => this.textInputChange(e)} type='text' value={this.state.text}>
      //     </input>
      //   </label>
      // </form>
    )
  }
}

export default SearchInput;