import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from './hooks/useReduxTS';
import { getPath } from './store/navigation/navigation-actions';

import Home from './pages/Home';
import Budget from './pages/Budget';
import Header from './components/layout/header/Header';
import PageLayout from './components/layout/page-layout/PageLayout';

function App() {
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Header />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={dispatch(getPath('Budget'))} element={<Budget />} />
        </Routes>
      </PageLayout>
    </Fragment>
  );
}

export default App;
