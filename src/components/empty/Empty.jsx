import "./empty.scss";

function Empty({parameter}) {
  return (
    <div className="empty">There is no doctor with that {parameter}</div>
  )
}

export default Empty;