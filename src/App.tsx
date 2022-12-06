import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Budget from './pages/Budget';
import Header from './components/layout/header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
