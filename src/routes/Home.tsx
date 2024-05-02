import { Link } from 'react-router-dom';
import calander from '../assets/calender.svg';
const Home = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <img className="h-40 w-40" src={calander} alt="" />
            <h1 className="font-mono text-6xl font-bold text-white underline">
                Task Manager
            </h1>
            <p className="text-2xl">Welcome to the Task Manager</p>
            <nav className="flex gap-4">
                <Link
                    className="flex justify-center rounded-lg px-4 py-2 text-center font-bold underline hover:bg-secondary hover:text-white"
                    to="/month"
                >
                    Month
                </Link>
                <Link
                    to="/tasklist"
                    className="flex justify-center rounded-lg px-4 py-2 text-center font-bold underline hover:bg-secondary hover:text-white"
                >
                    Task List
                </Link>
                <Link
                    to="/searchtask"
                    className="flex justify-center rounded-lg px-4 py-2 text-center font-bold underline hover:bg-secondary hover:text-white"
                >
                    Search Task
                </Link>
            </nav>
        </div>
    );
};

export default Home;
