import React from 'react'

export const TableRow = (props) => {
  const { airport,
    gate,
    date,
    turns,
    category, 
    time, 
    task, 
    pass, 
    video, 
  } = props;

  return (
    <tr className={pass ? 'table__item' : 'table__item--active'}>
      <td className="table__data"><span className="table__row">{airport}</span></td>
      <td className="table__data"><span className="table__row">{gate}</span></td>
      <td className="table__data"><span className="table__row">{date}</span></td>
      <td className="table__data"><span className="table__row">{turns}</span></td>
      <td className="table__data"><span className="table__row">{category}</span></td>
      <td className="table__data"><span className="table__row">{time}</span></td>
      <td className="table__data"><span className="table__row">{task}</span></td>
      <td className="table__data"><input type="checkbox"  checked={pass} disabled className="table__row" /></td>
      <td className="table__data"><a href={video} className="table__row">Link</a></td>
    </tr>
  )
};
