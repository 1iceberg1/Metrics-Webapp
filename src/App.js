import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import City from './components/City';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<City />} />
        <Route path="missions" element={<h1>Not found</h1>} />
        <Route path="myprofile" element={<h1>Not found</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
