import DateTimeDisplay from "./DateTimeDisplay"
const ShowCounter = ({days, hours, minutes, seconds}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-white">
        <p className="font-semibold text-sm text-notification-red">Available In</p>
        <div className="flex flex-row gap-1 items-center justify-center text-white">
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </div>
    </div>
  )
}

export default ShowCounter