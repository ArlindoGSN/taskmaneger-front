const DayCard = ({ day }: { day: number }) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg bg-slate-100 shadow-lg m-3">
            <p className="text-2xl font-bold">{day}</p>
            <hr />
            <p className="text-2xl font-bold">Day</p>
        </div>
    );
};
export default DayCard;
