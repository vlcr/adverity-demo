import React from 'react';

import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import styles from './App.module.scss';


const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
