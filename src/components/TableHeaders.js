import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { airportSort } from '../features/functions';
import { arrowDown } from '../features/icons';
import { selectValueForSort, selectAirportSort, setValueForSort, selectGateSort } from '../features/reportsSlice';
import { SortIcon } from './SortIcon';
// import { useSelector } from 'react-redux';

export const TableHeaders = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectValueForSort);
  const airportSortType = useSelector(selectAirportSort) || 'desc';
  const isAirportRotate = airportSortType === 'asc' ? true : false;
  const gateSortType = useSelector(selectGateSort);
  const isGateRotate = gateSortType === 'asc' ? true : false;

  const handleAirportSort = (event) => {
    event.preventDefault();

    const sortedData = airportSort(data, airportSortType, 'airport');
    dispatch(setValueForSort(sortedData));
  };

  const handleGateSort = (event) => {
    event.preventDefault();

    const sortedData = airportSort(data, gateSortType, 'gate');
    dispatch(setValueForSort(sortedData));
  }

  return (
    <>
      <th className="table__header" onClick={handleAirportSort}>
        <span>Airport</span>
        <span className="table__icon">
          <SortIcon  isRotate={isAirportRotate} />
        </span></th>
      <th className="table__header" onClick={handleGateSort}>
        <span>Gate</span>
        <span className="table__icon">
          <SortIcon  isRotate={isGateRotate} />
        </span>
      </th>
      <th className="table__header"><span>Date</span><span className="table__icon">{arrowDown}</span></th>
      <th className="table__header"><span>Turns</span><span className="table__icon">{arrowDown}</span></th>
      <th className="table__header"><span>Category</span><span className="table__icon">{arrowDown}</span></th>
      <th className="table__header"><span>Time</span><span className="table__icon">{arrowDown}</span></th>
      <th className="table__header"><span>Task</span><span className="table__icon">{arrowDown}</span></th>
      <th className="table__header"><span>Pass</span><span className="table__icon">{arrowDown}</span></th>
      <th className="table__header"><span>Video</span><span className="table__icon">{arrowDown}</span></th>
    </>
  )
};
