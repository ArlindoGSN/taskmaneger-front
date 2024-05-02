import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import DayCard from '../components/DayCard';
import Task from '../interface/Task';

const Month = ({ monthDate }: { monthDate: dayjs.Dayjs }) => {
    const daysInMonth = monthDate.daysInMonth();

    const [tasks, setTasks] = useState<Task[]>([]);

    async function getTasks() {
        try {
            const response = await axios.get('http://localhost:3000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    useEffect(() => {
        getTasks();
    }, [monthDate]);

    const filterTasksByDay = (day: number) => {
        return tasks.filter(
            (task) =>
                dayjs(task.due_date).date() === day &&
                dayjs(task.due_date).month() === monthDate.month()
        );
    };

    return (
        <div className="m-10 grid h-screen grid-cols-7 grid-rows-7 gap-2">
            {[...Array(daysInMonth).keys()].map((day) => (
                <DayCard
                    key={day}
                    day={day + 1}
                    tasks={filterTasksByDay(day + 1)}
                />
            ))}
        </div>
    );
};

export default Month;
