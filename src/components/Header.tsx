import dayjs from 'dayjs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import calander from '../assets/calender.svg';

const Header = ({
    handleGetData,
}: {
    handleGetData: (date: dayjs.Dayjs) => void;
}) => {
    const [date, setDate] = useState(dayjs());

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = dayjs(e.target.value);
        setDate(newDate);
        handleGetData(date);
    };

    return (
        <header className="bg-secondary flex h-16 w-full flex-wrap items-center justify-around pb-2 shadow-xl ">
            <div>
                <Link to="/">
                    {' '}
                    <img className="h-12 w-12" src={calander} alt="Workflow" />
                </Link>
            </div>
            <div>
                <h1 className="text-5xl font-bold text-white underline ">
                    Task Manager
                </h1>
            </div>
            <div className="flex justify-evenly gap-4">
                <nav>
                    <ul className="flex gap-4 text-white ">
                        <li className="align-baseline">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="align-baseline">
                            <Link to="/month">Month</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div className="align-baseline text-black">
                        <input
                            className="rounded-lg"
                            type="month"
                            name=""
                            id=""
                            value={date.format('YYYY-MM')}
                            onChange={(e) => handleDateChange(e)}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
