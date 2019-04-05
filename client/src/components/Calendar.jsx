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
  
  render() {
    return (
      <div>
        <div>{this.weekDays()}</div>
        <Dates firstday={this.changeDayToFirst()}/>
      </div>
    )
  }
}

export default Calendar;
