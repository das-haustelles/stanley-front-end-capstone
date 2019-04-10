import {Dropdown} from 'semantic-ui-react'
import styled from 'styled-components';

const GreyLocationColor = styled.div`
  color: #AEAEAE;
`;


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
      <span><GreyLocationColor>Location</GreyLocationColor>
        <Dropdown
          placeholder='Select City'
          fluid
          search
          selection
          options={this.state.options}
        />
      </span>
    )
  }
}

export default SearchInput;