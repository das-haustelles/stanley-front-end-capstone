import SearchInput from './components/SearchInput.jsx'
import Calendar from './components/Calendar.jsx'


class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <SearchInput/>
        <Calendar/>
      </div>
    )
  }
}

export default App;
