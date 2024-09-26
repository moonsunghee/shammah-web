import { Routes, Route } from 'react-router-dom';
import './styles/common.scss';
import './styles/_color.scss';
import Index from './pages/Index'
import Sub1 from './pages/Sub1';
import Sub2 from './pages/Sub2';
function App() {
  return (
    <Routes>
      <Route path="/"     element={<Index />} />
      <Route path="/Sub1" element={<Sub1 />} />
      <Route path="/Sub2" element={<Sub2 />} />
    </Routes>
  );
}

export default App;
