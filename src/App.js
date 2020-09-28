import React, { useEffect } from 'react';
import './App.css';
import data from './features/deepX.json'
import { getReports, setReports, setValueForSort } from './features/reportsSlice';
import { useDispatch } from 'react-redux';
import { URL } from './features/api_config';
import { Dashboards } from './components/Dashboards';
import { Reports } from './components/Reports';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    // dispatch(getReports(URL));
    dispatch(setReports(data));
    dispatch(setValueForSort(data));
  })

  return (
    <div className="App">
      <h1 className="App__header">DeepX Analytics</h1>
      <div className="App__body body">
        <Dashboards />
        <Reports />
      </div>
    </div>
  );
}

export default App;
