import { Routes, Route } from 'react-router-dom';
import './styles/common.scss';
import './styles/_color.scss';
import SiteHeader from './components/SiteHeader';
import SiteMap from './components/SiteMap';
import SiteFooter from './components/SiteFooter';
import Sub3Portfolio  from './pages/Sub3Portfolio'
import Sub1   from './pages/Sub1';
import Sub2   from './pages/Sub2';
function App() {
  return (
    <>
      <SiteHeader/>
      <Routes>
        <Route path="/Sub1" element={<Sub1 />} />
        <Route path="/Sub2" element={<Sub2 />} />
        <Route path="/"     element={<Sub3Portfolio />} />
      </Routes>
      <SiteMap/>
      <SiteFooter/>
    </>
  );
}

export default App;
