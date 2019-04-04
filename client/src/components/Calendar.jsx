import Dates from './Dates.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    //state holds the first day of the month
    this.state = {
      firstDay: '',
    }
  }
  //--------------------------------------------------------
  // IMPLEMENTATION
  //--------------------------------------------------------
  // we need to set a new Date with a getMonth method

  componentDidMount() {
    var day = new Date();
    day.setDate(1);
    console.log('currentDay = ', day);
    //Calendar's state needs to be the first day of the month
    //still need to figure out what happens on click for next month
    //onClick will change state to increment month and possibly year
    this.setState({firstDay: day});
  }

  weekDays() {
    return (
      <div>
        <span> M </span>
        <span> T </span>
        <span> W </span>
        <span> T </span>
        <span> F </span>
        <span> S </span>
        <span> S </span>
      </div>
    )
  }
  
  firstDayOfMonth() {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var weekday = new Date();
    return weekdays[weekday.getDay()];
  }
  
  render() {
    return (
      <div>
        <div>{this.weekDays()}</div>
        <Dates firstday={this.state.firstDay}/>
      </div>
    )
  }
}

export default Calendar;
