import React from 'react';
import { arrowDown, arrowRight } from '../features/icons';
import './Dashboards.css';

export const Dashboards = () => {
  return (
    <div className="body__dashboards dashboards">
      <div className="dashboards__item">Dashboard</div>
      <div className="dashboards__item">
        <div>Reports<span>{arrowDown}</span></div>
        <div><span>{arrowRight}</span>Performance</div>
        <div className="dashboards__item--active"><span>{arrowRight}</span>Monitoring</div>
        <div><span>{arrowRight}</span>Executive</div>
      </div>
      <div className="dashboards__item">Cams</div>
      <div className="dashboards__item">Alerts</div>
      <div className="dashboards__item">Settings</div>
    </div>
  )
};
