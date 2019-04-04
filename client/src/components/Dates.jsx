

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
    console.log("this.props.firstday = ", this.props.firstday)
    var firstOfMonth = this.props.firstday;
    firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay())
    this.state.day = firstOfMonth;
    console.log("this.state.day = ", this.state.day)
  }

  //dateMaker makes the Dates in the calendar
  dateMaker() {
    console.log('props in Dates has ', this.props)
    let dates = [];
    for (var i = 0; i < 6; i++) {
      dates.push(<div></div>)
      for (var j = 0; j < 7; j++) {
        //key will give coordinates to each date
        dates.push(<span key={i.toString() + j.toString()}> Date </span>)
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