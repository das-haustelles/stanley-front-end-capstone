import SearchInput from './components/SearchInput.jsx'
import Calendar from './components/Calendar.jsx'
import Groups from './components/Groups.jsx'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background-color: #2B2A2A;
`;
//rbg(43, 42, 42)
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Wrapper>
        <SearchInput/>
        <Calendar/>
        <Groups/>
        </Wrapper>
      </div>
    )
  }
}

export default App;
