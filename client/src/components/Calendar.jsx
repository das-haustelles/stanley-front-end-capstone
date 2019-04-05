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
  changeDayToFirst() {
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

    return months[this.changeDayToFirst().getMonth()];
  }

  render() {
    return (
      <div>
        <button> Prev </button> {this.showMonth()} {this.changeDayToFirst().getFullYear()}<button> Next </button>
        <div></div>
        <div>{this.weekDays()}</div>
        <Dates firstday={this.changeDayToFirst()}/>
      </div>
    )
  }
}

export default Calendar;
