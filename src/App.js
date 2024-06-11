import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Layout>
  );
}

export default App;
