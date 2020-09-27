import store from "../app/store";
import { setAirportSort, setCategorySort, setGateSort, setTaskSort } from "./reportsSlice";

/**
 * 
 * @param {Array} array to sort
 * @param {String} sortType asc or desc 
 */
export const airportSort = (array, sortType, compare) => {
  const nextSortType = (sortType === 'desc') ? 'asc' : 'desc';
  const collator = new Intl.Collator({ sensitivity: 'base' });

  switch (compare) {
    case 'airport': 
      store.dispatch(setAirportSort(nextSortType));
      break;
    case 'gate':
      console.log('compare', compare, nextSortType);
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

      if (sortType === 'desc') {
        
        return collator.compare(itemA[compare], itemB[compare]);
      };

      if (sortType === 'asc') {

        return collator.compare(itemB[compare], itemA[compare]);
      }
      
      return 0;
    });



}