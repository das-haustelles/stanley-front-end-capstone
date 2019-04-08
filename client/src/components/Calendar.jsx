import Dates from './Dates.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDay: '',
      isCalendarClicked: false,
    }
    this.toggleCalendar = this.toggleCalendar.bind(this)
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
  getFirstDay() {
    var day = new Date();
    day.setDate(1);
    return day;
  }
  
  showMonth() {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months[this.getFirstDay().getMonth()];
  }

  clickNextMonth() {
    //we need to first track where getFirstDay assigns values
    //we might also need to use state

    //getFirstDay gets passed down to Dates
    //within dateMaker...
      //firstDayOfMonth is called
      //then this.props.firstday is used

    //so on click
      //we need to render the dates again, so state must be changed somewhere
        //first idea i had was to put Dates function into state
        //but I don't think it can hold jsx elements
      //should it be re-rendered in Calendar or Dates?


      //we need to either change getFirstDay to show the next month,
        //make a new function that gets referenced on   
  
  }

  clickPrevMonth() {
  }

  toggleCalendar() {
    this.setState({isCalendarClicked: !this.state.isCalendarClicked})
  }

  render() {
    const clickedCalendar = this.state.isCalendarClicked;

    if (clickedCalendar) {
      console.log('calendar clicked')
      return (
        <div onClick={this.toggleCalendar}>
          <span onClick={this.clickPrevMonth()}> Prev </span> {this.showMonth()} {this.getFirstDay().getFullYear()}<span onClick={this.clickNextMonth()}> Next </span>
          <div></div>
          <div>{this.weekDays()}</div>
          <Dates firstday={this.getFirstDay()}/>
        </div>
      )
    }
    else {
      return (
        <div onClick={this.toggleCalendar}>Cal Icon</div>
      )
    }
  }
}

export default Calendar;
