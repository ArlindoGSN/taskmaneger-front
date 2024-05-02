import axios from 'axios';
import { useEffect, useState } from 'react';
import TaskDetailsEdit from '../components/TaskDeatailsEdit';
import Task from '../interface/Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleEditClick = (task: Task) => {
        setSelectedTask(task);
    };

    const handleClose = () => {
        setSelectedTask(null);
    };

    return (
        <div className="flex h-screen flex-col items-center">
            <h1 className="text-3xl font-bold ">Task List</h1>
            <ul className="flex w-1/2 flex-col gap-2">
                {tasks.map((task: Task) => (
                    <li
                        className="flex cursor-pointer flex-row justify-between rounded-md border p-2 text-xl hover:bg-secondary hover:text-white"
                        key={task.id}
                    >
                        <h1 className="font-bold">{task.title}</h1>
                        <h2>{task.due_date}</h2>
                        <button
                            onClick={() => handleEditClick(task)}
                            className="rounded bg-blue-500 px-2 font-bold text-white hover:bg-blue-700"
                        >
                            Detalhes
                        </button>
                    </li>
                ))}
            </ul>
            {selectedTask && (
                <TaskDetailsEdit task={selectedTask} onClose={handleClose} />
            )}
        </div>
    );
};

export default TaskList;
