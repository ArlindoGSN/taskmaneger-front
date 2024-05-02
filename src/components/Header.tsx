import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import calander from '../assets/calender.svg';
import AddTaskModal from './AddTaskModal';

const Header = ({ parseDate }: { parseDate: (date: dayjs.Dayjs) => void }) => {
    const [openModal, setOpenModal] = useState(false);
    const [date, setDate] = useState(dayjs());

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    const handleGetData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = dayjs(e.target.value);
        setDate(selectedDate);
        parseDate(selectedDate);
    };

    const postTask = async (
        title: string,
        description: string,
        dueDate: dayjs.Dayjs
    ) => {
        const task = {
            title,
            description,
            due_date: dueDate.format('YYYY-MM-DD'),
        };
        const response = await axios.post('http://localhost:3000/tasks', task);
        console.log(response);
    };

    return (
        <header className="flex h-16 w-full flex-wrap items-center justify-around bg-secondary pb-2 shadow-xl">
            <div>
                <Link to="/">
                    <img className="h-12 w-12" src={calander} alt="Workflow" />
                </Link>
            </div>
            <div className="flex items-center justify-evenly gap-48 align-middle">
                <div>
                    <h1 className="text-5xl font-bold text-white underline">
                        Task Manager
                    </h1>
                </div>
                <div className="flex justify-evenly gap-4">
                    <nav>
                        <ul className="flex gap-4 text-white">
                            <li className="align-baseline">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="align-baseline">
                                <Link to="/month">Month</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <input
                            className="rounded-lg"
                            type="month"
                            value={date.format('YYYY-MM')}
                            onChange={handleGetData}
                        />
                    </div>
                    <div>
                        <button
                            className="text-primary rounded-md border-2 border-white bg-white"
                            onClick={handleOpenModal}
                        >
                            CADASTRAR TAREFA
                        </button>
                    </div>
                </div>
            </div>
            <AddTaskModal
                openModal={openModal}
                addTask={(title, description, dueDate) =>
                    postTask(title, description, dueDate)
                }
                closeModal={handleOpenModal}
            />
        </header>
    );
};

export default Header;
