

class Dates extends React.Component {
  constructor(props) {
    super(props);
  }
  dateMaker() {
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
      <div>
        <div>{this.dateMaker()}</div>
      </div>
    )
  }
}
export default Dates;