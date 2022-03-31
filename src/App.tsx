import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_URL } from './configs';
import * as Compt from './components';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Compt.Header />
      <Wrapper>
        <Routes>
          <Route index element={<Compt.Home />} />
          <Route path={ROUTE_URL.INTRO} element={<Compt.Intro />} />
          <Route path={ROUTE_URL.MEMBER} element={<div>Member</div>} />
          <Route path={ROUTE_URL.WAY} element={<div>Way</div>} />
          <Route path={ROUTE_URL.BOARD} element={<Compt.Board />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div`
  height: calc(100% - 100px);
`;
