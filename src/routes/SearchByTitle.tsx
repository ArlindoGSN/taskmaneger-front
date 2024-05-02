import axios from 'axios';
import { useEffect, useState } from 'react';
import TaskDetailsEdit from '../components/TaskDeatailsEdit';

const SearchByTitle = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [searchError, setSearchError] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/tasks?title=${searchTerm}`
            );
            setSearchResults(response.data);
            setSearchError('');
        } catch (error) {
            console.error('Error searching tasks:', error);
            setSearchResults([]);
            setSearchError(
                'An error occurred while searching tasks. Please try again later.'
            );
        }
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleCloseDetails = () => {
        setSelectedTask(null);
    };

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            handleSearch();
        }
    }, [searchTerm]);

    const filteredResults = searchResults.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen flex-col items-center">
            <h1 className="text-3xl font-bold ">Search by Title</h1>
            <input
                className="w-1/2 rounded-md border border-gray-300 p-2"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Enter task title"
            />

            {searchError && <p className="mt-2 text-red-500">{searchError}</p>}

            {selectedTask ? (
                <TaskDetailsEdit
                    task={selectedTask}
                    onClose={handleCloseDetails}
                />
            ) : (
                <>
                    {searchTerm !== '' ? (
                        filteredResults.length > 0 ? (
                            <ul className="flex w-1/2 flex-col gap-2">
                                {filteredResults.map((task) => (
                                    <li
                                        className="cursor-pointer rounded-md border p-2 text-xl hover:bg-secondary hover:text-white"
                                        key={task.id}
                                        onClick={() => handleTaskClick(task)}
                                    >
                                        {task.title}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-2">No results found</p>
                        )
                    ) : null}
                </>
            )}
        </div>
    );
};

export default SearchByTitle;
