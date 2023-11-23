import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import City from './components/City';
import Detail from './components/Detail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<City />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
