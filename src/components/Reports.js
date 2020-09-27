import React from 'react';
import './Reports.css';
import { TableBody } from './TableBody';
import { TableHeaders } from './TableHeaders';

export const Reports = () => {
  return (
    <div className="body__reports reports">
      <div>
        <h2 className="reports__title">Reports Search response:</h2>
        <div className="reports__wrapper">
          <table className="reports__table table">
            <thead>
              <tr>
                <TableHeaders />
              </tr>
            </thead>
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  )
};
