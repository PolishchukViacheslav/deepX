import React from 'react'
import { useSelector } from 'react-redux';
import { selectValueForSort } from '../features/reportsSlice';
import { TableRow } from './TableRow';

export const TableBody = () => {
  const data = useSelector(selectValueForSort);
  

  return (
    <tbody>
      {data?.map(rec => <TableRow key={rec.id} {...rec} />)}
    </tbody>
  )
};
