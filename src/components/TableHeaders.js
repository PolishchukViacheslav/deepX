import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dateSort, numberSort, passSort, textSort, timeSort } from '../features/functions';
import { arrowDown } from '../features/icons';
import { selectValueForSort, selectAirportSort, setValueForSort, selectGateSort, selectCategorySort, selectTaskSort, selectTurnsSort, selectDateSort, selectTimeSort, selectPassSort } from '../features/reportsSlice';
import { SortIcon } from './SortIcon';
// import { useSelector } from 'react-redux';

export const TableHeaders = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectValueForSort);

  const airportSortType = useSelector(selectAirportSort) || 'desc';
  const isAirportRotate = airportSortType === 'asc' ? true : false;
  const gateSortType = useSelector(selectGateSort);
  const isGateRotate = gateSortType === 'asc' ? true : false;
  const categorySortType = useSelector(selectCategorySort);
  const isCategoryRotate = categorySortType === 'asc' ? true : false;
  const taskSortType = useSelector(selectTaskSort);
  const isTaskRotate = taskSortType === 'asc' ? true : false;
  const turnsSortType = useSelector(selectTurnsSort);
  const isTurnsRotate = turnsSortType === 'asc' ? true : false;
  const dateSortType = useSelector(selectDateSort);
  const isDateRotate = dateSortType === 'asc' ? true : false;
  const timeSortType = useSelector(selectTimeSort);
  const isTimeRotate = timeSortType === 'asc' ? true : false;
  const passSortType = useSelector(selectPassSort);
  const isPassRotate = passSortType === 'asc' ? true : false;
  


  const handleAirportSort = () => {

    const sortedData = textSort(data, airportSortType, 'airport');
    dispatch(setValueForSort(sortedData));
  };

  const handleGateSort = () => {

    const sortedData = textSort(data, gateSortType, 'gate');
    dispatch(setValueForSort(sortedData));
  };

  const handleCategorySort = () => {

    const sortedData = textSort(data, categorySortType, 'category');
    dispatch(setValueForSort(sortedData));
  };

  const handleTaskSort = () => {

    const sortedData = textSort(data, taskSortType, 'task');
    dispatch(setValueForSort(sortedData));
  };

  const handleTurnsSort = () => {

    const sortedData = numberSort(data, turnsSortType, 'turns');
    dispatch(setValueForSort(sortedData));
  };

  const handleDateSort = () => {

    const sortedData = dateSort(data, dateSortType, 'date');
    dispatch(setValueForSort(sortedData));
  };

  const handleTimeSort = () => {

    const sortedData = timeSort(data, timeSortType, 'time');
    dispatch(setValueForSort(sortedData));
  };

  const handlePassSort = () => {

    const sortedData = passSort(data, passSortType, 'pass');
    dispatch(setValueForSort(sortedData));
  };

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
      <th className="table__header" onClick={handleDateSort}>
        <span>Date</span>
        <span className="table__icon">
          <SortIcon isRotate={isDateRotate} />
        </span></th>
      <th className="table__header" onClick={handleTurnsSort}>
        <span>Turns</span>
        <span className="table__icon">
          <SortIcon isRotate={isTurnsRotate} />
        </span></th>
      <th className="table__header" onClick={handleCategorySort}>
        <span>Category</span>
        <span className="table__icon">
        <SortIcon  isRotate={isCategoryRotate} />
        </span></th>
      <th className="table__header" onClick={handleTimeSort}>
        <span>Time</span>
        <span className="table__icon">
          <SortIcon isRotate={isTimeRotate} />
        </span></th>
      <th className="table__header" onClick={handleTaskSort}>
        <span>Task</span>
        <span className="table__icon">
          <SortIcon isRotate={isTaskRotate} />
        </span></th>
      <th className="table__header" onClick={handlePassSort}>
        <span>Pass</span>
        <span className="table__icon">
          <SortIcon isRotate={isPassRotate}/>
        </span></th>
      <th className="table__header"><span>Video</span><span className="table__icon">{arrowDown}</span></th>
    </>
  )
};
