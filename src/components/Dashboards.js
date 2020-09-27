import React from 'react';
import './Dashboards.css';
import { Reports } from './Reports';

export const Dashboards = () => {
  return (
    <div className="body__dashboards dashboards">
      <div className="dashboards__item">Dashboard</div>
      <div className="dashboards__item">Reports</div>
      <div className="dashboards__item">Cams</div>
      <div className="dashboards__item">Alerts</div>
      <div className="dashboards__item">Settings</div>
    </div>
  )
};
