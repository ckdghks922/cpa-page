import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Compt from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Compt.Header />
      <Routes>
        <Route path="/" element={<Compt.Home />} />
        <Route path="/intro" element={<Compt.Intro />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
