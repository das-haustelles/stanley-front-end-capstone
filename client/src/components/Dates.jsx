

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
    }
  }

  //---CURRENT IDEA----
  //we're gonna setState to firstDay - getDay. 
  //we'll set the key to the date...?
    //can't do that because there might be two 1st, or two 29th's
  firstDayOfMonth() {
    var firstOfMonth = this.props.firstday;
    firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay())
    this.state.day = firstOfMonth;
  }

  //dateMaker makes the Dates in the calendar
  dateMaker() {
    let dates = [];
    for (var i = 0; i < 6; i++) {
      dates.push(<div></div>)
      for (var j = 0; j < 7; j++) {
        var calendarDate = this.state.day;
        console.log("calendarDate = ", calendarDate);
        //key will give coordinates to each date
        dates.push(<span key={calendarDate}> {calendarDate.getDate()} </span>)
        calendarDate.setDate(calendarDate.getDate() + 1);
      }
    }
    return dates;
  }

  render() {
    return (
      <div>{this.firstDayOfMonth()}
        <div>{this.dateMaker()}</div>
      </div>
    )
  }
}
export default Dates;