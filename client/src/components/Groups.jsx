import styled from 'styled-components'

const GreyGuestColor = styled.div`
  color: #AEAEAE;
`;

function Groups() {

  function options () {
    const optionsArr = [];
    for (var i = 1; i <= 80; i++) {
      optionsArr.push(<option key={i} value={i}>{i}</option>);
    }
    return optionsArr
  }

  return (
    <span>
      <form>
        <label>
        <GreyGuestColor>Guests</GreyGuestColor>
          <select>
            {options()}
          </select>
        </label>
      </form>
    </span>
  )
}

export default Groups;