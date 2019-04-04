import Dates from './Dates.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    //state holds the first day of the month
    this.state = {
      firstDay: '',
    }
  }
  weekDays() {
    return (
      <div>
        <span> S </span>
        <span> M </span>
        <span> T </span>
        <span> W </span>
        <span> T </span>
        <span> F </span>
        <span> S </span>
      </div>
    )
  }
  //PROBLEM IS HERE!!!!!!!!!!!!!!!!!!
  changeStateToFirst() {
    var day = new Date();
    day.setDate(1);
    this.state.firstDay = day;
    console.log("this.state.firstDay = ", this.state.firstDay)
  }

  //NOTE: might not need these lines of code. Will delete if not needed
  // firstDayOfMonth() {
  //   var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   var weekday = new Date();
  //   return weekdays[weekday.getDay()];
  // }
  
  render() {
    return (
      <div>{this.changeStateToFirst()}
        <div>{this.weekDays()}</div>
        <Dates firstday={this.state.firstDay}/>
      </div>
    )
  }
}

export default Calendar;
