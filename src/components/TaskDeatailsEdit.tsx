import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Task from '../interface/Task';

const TaskDetailsEdit = ({
    task,
    onClose,
}: {
    task: Task;
    onClose: () => void;
}) => {
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    useEffect(() => {
        setEditedTask({ ...task });
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        const updatedTask = {
            ...editedTask,
            due_date: dayjs(editedTask.due_date).format('YYYY-MM-DD'),
        };

        try {
            const response = await axios.put(
                `http://localhost:3000/tasks/${task.id}`,
                updatedTask
            );
            console.log(response);
            setEditing(false);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleCompleteClick = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/tasks/${task.id}/complete`
            );
            console.log(response);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error completing task:', error);
        }
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${task.id}`);
            onClose();
            window.location.reload();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleCloseClick = () => {
        setEditing(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-96 rounded-lg bg-white p-4 shadow-lg">
                <h1 className="mb-4 text-lg font-semibold">Tarefas</h1>
                {task ? (
                    editing ? (
                        <form className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold">
                                    Título:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={editedTask.title}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Título"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold">
                                    Descrição:
                                </label>
                                <textarea
                                    name="description"
                                    value={editedTask.description}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Descrição"
                                    rows={4}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold">
                                    Data de Vencimento:
                                </label>
                                <input
                                    type="date"
                                    name="due_date"
                                    value={editedTask.due_date}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSaveClick}
                                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                                >
                                    Salvar
                                </button>
                                <button
                                    onClick={() => setEditing(false)}
                                    className="ml-2 rounded-md bg-gray-300 px-4 py-2 text-gray-700"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div>
                            <p>
                                <span className="font-semibold">Título:</span>{' '}
                                {task.title}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Descrição:
                                </span>{' '}
                                {task.description}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Data Até Completar:
                                </span>{' '}
                                {task.due_date}
                            </p>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleEditClick}
                                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={handleCompleteClick}
                                    className="ml-2 rounded-md bg-green-500 px-4 py-2 text-white"
                                >
                                    Completar
                                </button>
                                <button
                                    onClick={handleDeleteClick}
                                    className="ml-2 rounded-md bg-red-500 px-4 py-2 text-white"
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    )
                ) : (
                    <p>Carregando...</p>
                )}
                <button
                    onClick={handleCloseClick}
                    className="mt-4 rounded-md bg-gray-300 px-4 py-2 text-gray-700"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default TaskDetailsEdit;
