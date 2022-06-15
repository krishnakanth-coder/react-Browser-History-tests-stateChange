import './index.css'

const HistoryItems = props => {
  const {eachlistItem, deleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = eachlistItem
  const onDelete = () => deleteHistory(id)

  return (
    <div>
      <li className="list-items-card">
        <p className="time">{timeAccessed}</p>
        <div className="history-card">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="history-title">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <div className="button-card">
          <button
            type="button"
            className="button"
            testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default HistoryItems
