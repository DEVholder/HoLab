import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
