import dayjs from 'dayjs';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './routes/Home';
import Month from './routes/Month';
function App() {
    const [date, setDate] = useState(dayjs());
    const handleGetData = (date: dayjs.Dayjs) => {
        setDate(date);
    };
    return (
        <main className="h-screen">
            <BrowserRouter>
                <Header handleGetData={handleGetData} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/month" element={<Month monthDate={date} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    );
}

export default App;
