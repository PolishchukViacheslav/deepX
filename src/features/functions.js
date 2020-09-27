import store from "../app/store";
import { setAirportSort, setCategorySort, setDateSort, setGateSort, setTaskSort, setTurnsSort } from "./reportsSlice";

/**
 * 
 * @param {Array} array to sort
 * @param {String} sortType asc or desc 
 * @param {String} compare key
 */
export const textSort = (array, sortType, compare) => {
  const nextSortType = (sortType === 'desc') ? 'asc' : 'desc';
  const collator = new Intl.Collator({ sensitivity: 'base' });

  switch (compare) {
    case 'airport': 
      store.dispatch(setAirportSort(nextSortType));
      break;
    case 'gate':
      store.dispatch(setGateSort(nextSortType));
      break;
    case 'category': 
      store.dispatch(setCategorySort(nextSortType));
      break;
    case 'task': 
      store.dispatch(setTaskSort(nextSortType));
      break;
    default: break;
  }
  
  return [...array].sort(
    (itemA, itemB) => {

      if (sortType !== 'asc') {
        
        return collator.compare(itemA[compare], itemB[compare]);
      };

      if (sortType === 'asc') {

        return collator.compare(itemB[compare], itemA[compare]);
      }
      
      return 0;
    });
}

export const numberSort = (array, sortType, compare) => { 
  const nextSortType = (sortType === 'desc') ? 'asc' : 'desc';

  store.dispatch(setTurnsSort(nextSortType));

  return [...array].sort(
    (itemA, itemB) => {

      if (sortType !== 'asc') {
        
        return itemB[compare] - itemA[compare];
      };

      if (sortType === 'asc') {

        return itemA[compare] - itemB[compare];
      }
      
      return 0;
    });
}

/**
 * 
 * @param {Array} array 
 * @param {String} sortType asc or desc
 * @param {String} compare key 
 */
export const dateSort = (array, sortType, compare) => {

  const nextSortType = (sortType === 'desc') ? 'asc' : 'desc';

  store.dispatch(setDateSort(nextSortType));

  return [...array].sort(
    (itemA, itemB) => {
      const dateA = new Date(itemA[compare]);
      const dateB = new Date(itemB[compare]);

      console.log('date', dateA - dateB);
      if (sortType !== 'asc') {

        return dateB - dateA;
      }

      if (sortType === 'asc') {

        return dateA - dateB;
      }

      return 0;
  });
};

export const timeSort = (array, sortType, compare) {
  
}  