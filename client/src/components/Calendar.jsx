import Dates from './Dates.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <span onClick={this.clickPrevMonth()}> Prev </span> {this.showMonth()} {this.getFirstDay().getFullYear()}<span onClick={this.clickNextMonth()}> Next </span>
        <div></div>
        <div>{this.weekDays()}</div>
        <Dates firstday={this.getFirstDay()}/>
      </div>
    )
  }
}

export default Calendar;
