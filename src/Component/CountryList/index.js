import {Li, Button} from './styleComponent'

const CountryList = props => {
  const {details, clickVisitBtn} = props
  const {id, name, isVisited} = details

  const onclickVisitBtn = () => {
    clickVisitBtn(id)
  }
  const btnBg = isVisited ? 'transparent' : '#3b82f6'
  const btnClr = isVisited ? ' #94a3b8' : '#ffffff'
  return (
    <Li>
      <p>{name}</p>
      <Button
        type="button"
        onClick={onclickVisitBtn}
        btnBg={btnBg}
        btnClr={btnClr}
      >
        {isVisited ? <p>Visited</p> : <p>Visit</p>}
      </Button>
    </Li>
  )
}
export default CountryList
