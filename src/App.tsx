import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/intro" element={<div>Intro</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
