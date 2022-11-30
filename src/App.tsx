import { Fragment } from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/budget' element={<Budget />} />
      </Routes>
    </Fragment>
  );
}

export default App;
