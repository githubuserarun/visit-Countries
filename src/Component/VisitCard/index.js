import './index.css'

const VisitCard = props => {
  const {details, onRemoveCountry} = props
  const {id, name, imageUrl} = details

  const onRemove = () => {
    onRemoveCountry(id)
  }

  return (
    <l1>
      <img width="200px" src={imageUrl} alt="thumbnail." />
      <div className="cardContent">
        <p>{name}</p>
        <button type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </l1>
  )
}
export default VisitCard
