import SearchInput from './components/SearchInput.jsx'
import Calendar from './components/Calendar.jsx'
import Groups from './components/Groups.jsx'


class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <SearchInput/>
        <Calendar/>
        <Groups/>
      </div>
    )
  }
}

export default App;
