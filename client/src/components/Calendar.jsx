import Dates from './Dates.jsx';

const YearOfCalColor = styled.span`
  color: #AEAEAE;
`;

const CalendarColor = styled.div`
  background: white;
  margin-right: 5px;
`;

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
  }

  clickPrevMonth() {
  }

  toggleCalendar() {
    this.setState({isCalendarClicked: !this.state.isCalendarClicked})
  }

  render() {
    const clickedCalendar = this.state.isCalendarClicked;

    if (clickedCalendar) {
      return (
        <CalendarColor>
          <span onClick={this.toggleCalendar}>
            <span onClick={this.clickPrevMonth()}> Prev </span> 
              {this.showMonth()} <YearOfCalColor>{this.getFirstDay().getFullYear()}</YearOfCalColor>
              <span onClick={this.clickNextMonth()}> Next </span>
            <div></div>
            <div>{this.weekDays()}</div>
            <Dates firstday={this.getFirstDay()}/>
          </span>
        </CalendarColor>
      )
    }
    else {
      return (
        <span onClick={this.toggleCalendar}>
          <YearOfCalColor>Cal Icon</YearOfCalColor>
        </span>
      )
    }
  }
}

export default Calendar;
