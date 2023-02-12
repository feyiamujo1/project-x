import DateTimeDisplay from "./DateTimeDisplay"
const ShowCounter = ({days, hours, minutes, seconds}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-white">
        <p className="font-semibold text-sm text-notification-red">Available In</p>
        <div className="flex flex-row gap-2 items-start justify-center text-white">
            <DateTimeDisplay value={days} type={'Days'} />
            <p className="text-lg font-semibold">:</p>
            <DateTimeDisplay value={hours} type={'Hours'} />
            <p className="text-lg font-semibold">:</p>
            <DateTimeDisplay value={minutes} type={'Minutes'} />
            <p className="text-lg font-semibold">:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} />
        </div>
    </div>
  )
}

export default ShowCounter