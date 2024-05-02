import dayjs from 'dayjs';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './routes/Home';
import Month from './routes/Month';
import SearchByTitle from './routes/SearchByTitle';
import TaskList from './routes/TaskList';
function App() {
    const [date, setDate] = useState(dayjs());
    const handleGetData = (date: dayjs.Dayjs) => {
        setDate(date);
    };
    return (
        <main>
            <BrowserRouter>
                <Header parseDate={handleGetData} />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/month"
                            element={<Month monthDate={date} />}
                        />
                        <Route path="/tasklist" element={<TaskList />} />
                        <Route path="/searchtask" element={<SearchByTitle />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </main>
    );
}

export default App;
