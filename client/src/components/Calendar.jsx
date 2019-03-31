import Date from './Date.jsx';

class Calendar extends React.Component {
  constructor() {
    super();
  }
  //--------------------------------------------------------
  // BRAINSTORM
  //--------------------------------------------------------
  // firstly, lets connect the Calendar to the App - DID IT FAM
  // Now lets add a Dates component, and create 6x7 dates
    // should we make it a 7x7?
    // how will we put in M T W T F S S in the first row?

    // one option is to make the boxes
    // then assign the first show invidivually (M T W etc.)
    
    // the second option is to hardcode M T W T
    // the dates component will only be 6x7

    // I think I like the second option better.

  //--------------------------------------------------------
  //DATES COMPONENT
  //--------------------------------------------------------
  // Each component can be a button?
  // lets check how Hostelworld does it


  //--------------------------------------------------------
  // IMPLEMENTATION
  //--------------------------------------------------------
  // Each box will be a div
  // first row will be hard coded span tags? lets try it

  weekDays() {
    return (
      <div>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>{this.weekDays()}</div>
        <Date/>
      </div>
    )
  }
}

export default Calendar;