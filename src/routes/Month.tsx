import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import DayCard from '../components/DayCard';

const Month = ({ monthDate }: { monthDate: dayjs.Dayjs }) => {
    const [date, setDate] = useState(monthDate);

    useEffect(() => {
        setDate(monthDate);
    }, [monthDate]);

    const mesDias = date.daysInMonth();

    return (
        <div className="m-10 grid h-screen grid-cols-7 grid-rows-7 gap-2">
            {Array.from({ length: mesDias }).map((_, i) => (
                <DayCard key={i + 1} day={i + 1} />
            ))}
        </div>
    );
};

export default Month;
