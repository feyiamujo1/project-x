const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="text-center">
      <p className="font-medium text-2xl">{ value < 10 ? "0"+value: value}</p>
      <span className="uppercase text-[9px]">{type}</span>
    </div>
  )
}

export default DateTimeDisplay