import SearchInput from './components/SearchInput.jsx'
import Calendar from './components/Calendar.jsx'
import Groups from './components/Groups.jsx'

const DarkGreyColor = styled.div`
  padding: 4em;
  background-color: #2B2A2A;
`;
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <DarkGreyColor>
        <SearchInput/>
        <Calendar/>
        <Groups/>
      </DarkGreyColor>
    )
  }
}

export default App;
window.Searchbar = App;
