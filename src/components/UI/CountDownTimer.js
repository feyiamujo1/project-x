import AvailableNotice from './timer_components/AvailableNotice';
import ShowCounter from './timer_components/ShowCounter';
import React from 'react'
import { useCountdown } from '../../hooks/useCountdown';

const CountDownTimer = ({ targetDate, targetText }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    if (days + hours + minutes + seconds <= 0) {
        return <AvailableNotice />;
    } else {
        return (
        <ShowCounter
            targetText={targetText}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
        );
    }
}

export default CountDownTimer