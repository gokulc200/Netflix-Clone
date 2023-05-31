import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import SignInView from './components/SignInView'
import Browse from './components/Browse';
import CustomerMovieDetails from './CustomerMovieDetails';
import ManagerMovieDetails from './ManagerMovieDetails';

import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignInView />} />
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path="/customer/movie-details" element={<CustomerMovieDetails />} />
        <Route exact path="/manager/movie-details" element={<ManagerMovieDetails />} />
      </Routes>
    </>
  );
}

export default App;