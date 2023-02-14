import DateTimeDisplay from "./DateTimeDisplay"
const ShowCounter = ({days, hours, minutes, seconds, targetText}) => {
  return (
    <div className="flex flex-col gap-1 text-white w-full">
        <p className="font-semibold text-sm">{targetText ? targetText : "Available In"}</p>
        <div className={targetText ? "flex flex-row md:gap-1 xl:gap-1.5 items-start text-white" :
                            "flex flex-row md:gap-1 xl:gap-1.5 items-start justify-center md:justify-start text-white"}>
            <DateTimeDisplay value={days} type={'Days'} />
            <p className=" font-semibold">:</p>
            <DateTimeDisplay value={hours} type={'Hours'} />
            <p className=" font-semibold">:</p>
            <DateTimeDisplay value={minutes} type={'Minutes'} />
            <p className=" font-semibold">:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} />
        </div>
    </div>
  )
}

export default ShowCounter