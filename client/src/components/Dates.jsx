import styled from 'styled-components';

const Wrapper = styled.section`
  background: white;
`;

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
    }
  }

  firstDayOfMonth() {
    var firstOfMonth = this.props.firstday;
    firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay())
    return firstOfMonth;
  }

  //dateMaker makes the Dates in the calendar
  dateMaker() {

    let dates = [];
    var firstDay = this.firstDayOfMonth();

    for (var i = 0; i < 6; i++) {
      dates.push(<div></div>)

      for (var j = 0; j < 7; j++) {
        var calendarDate = firstDay;
        dates.push(<span key={calendarDate}> {calendarDate.getDate()} </span>)
        calendarDate.setDate(calendarDate.getDate() + 1);
      }
    }
    return dates;
  }

  render() {
    return (
      <div>
        <Wrapper>
        <div>{this.dateMaker()}</div>
        </Wrapper>
      </div>
    )
  }
}
export default Dates;