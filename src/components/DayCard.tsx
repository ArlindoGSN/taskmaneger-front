import Task from '../interface/Task';

const DayCard = ({ day, tasks }: { day: number; tasks: Task[] }) => {
    return (
        <div className="m-3 flex flex-col items-center justify-center rounded-lg bg-slate-100 shadow-lg">
            <div className="flex justify-start align-top">
                <p className="text-2xl font-bold">{day}</p>
            </div>
            <hr className="w-full border-slate-300" />
            <div className="mt-2">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="mb-2 rounded-lg border border-gray-200 p-2"
                    >
                        <p className="text-sm font-medium">{task.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayCard;
