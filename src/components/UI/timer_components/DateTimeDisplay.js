const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="text-center flex flex-col">
      <p className="font-medium">{ value < 10 ? "0"+value: value}</p>
      <p className="uppercase text-[9px]">{type}</p>
    </div>
  )
}

export default DateTimeDisplay