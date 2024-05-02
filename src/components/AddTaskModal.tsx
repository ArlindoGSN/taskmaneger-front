import dayjs from 'dayjs';
import React from 'react';

const AddTaskModal = React.memo(
    ({
        openModal,
        addTask,
        closeModal,
    }: {
        openModal: boolean;
        addTask: (
            title: string,
            description: string,
            date: dayjs.Dayjs
        ) => void;
        closeModal: () => void;
    }) => {
        const [title, setTitle] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [dueDate, setDueDate] = React.useState<dayjs.Dayjs>(dayjs());

        const handleAddTask = () => {
            addTask(title, description, dueDate);
            closeModal();
        };

        return openModal ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                    <h1 className="mb-4 text-lg font-semibold">
                        Cadastrar Tarefa
                    </h1>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            className="rounded-md border p-2"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className="resize-none rounded-md border p-2"
                            placeholder="Descrição"
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            className="rounded-md border p-2"
                            value={dueDate.format('YYYY-MM-DD')}
                            onChange={(e) =>
                                setDueDate(dayjs(e.target.value, 'YYYY-MM-DD'))
                            }
                        />
                        <button
                            className="rounded-md border bg-gray-200 p-2 hover:bg-gray-300"
                            onClick={handleAddTask}
                        >
                            Cadastrar Tarefa
                        </button>
                    </form>
                </div>
            </div>
        ) : null;
    }
);

export default AddTaskModal;
