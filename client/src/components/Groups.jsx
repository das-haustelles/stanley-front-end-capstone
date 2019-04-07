

function Groups() {

  function options () {
    const optionsArr = [];
    for (var i = 1; i <= 80; i++) {
      optionsArr.push(<option key={i} value={i}>{i}</option>);
    }
    return optionsArr
  }
  
  return (
    <form>
      <label>
      Guests
        <select>
          {options()}
        </select>
      </label>
    </form>
  )
}

export default Groups;