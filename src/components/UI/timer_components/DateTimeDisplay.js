const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="text-center">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

export default DateTimeDisplay