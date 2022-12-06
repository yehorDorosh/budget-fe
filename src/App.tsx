import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Budget from './pages/Budget';
import Header from './components/layout/header/Header';
import PageLayout from './components/layout/page-layout/PageLayout';

function App() {
  return (
    <Fragment>
      <Header />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </PageLayout>
    </Fragment>
  );
}

export default App;
