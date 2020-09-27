import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getReports = createAsyncThunk('reports/getReports', async (endpoint) => {
  const fetchPromise = await fetch(endpoint);
  const results = await fetchPromise.json();
  return results;
  } 
);

export const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    initValue: [],
    valueForSort: [],
    airportSort: null,
    gateSort: null,
    dateSort: null,
    turnsSort: null,
    categorySort: null,
    timeSort: null,
    taskSort: null,
    passSort: null,
    isLoading: false,
  },
  reducers: {
    setReports: (state, action) => {
      return {
        ...state,
        initValue: action.payload,
      }
    },
    setValueForSort: (state,action) => {
      return {
        ...state,
        valueForSort: action.payload,
      }
    },
    setAirportSort: (state,action) => {
      return {
        ...state,
        airportSort: action.payload,
        gateSort: null,
        dateSort: null,
        turnsSort: null,
        categorySort: null,
        timeSort: null,
        taskSort: null,
        passSort: null,
      }
    },
    setGateSort: (state,action) => {
      return {
        ...state,
        gateSort: action.payload,
        airportSort: null,
        dateSort: null,
        turnsSort: null,
        categorySort: null,
        timeSort: null,
        taskSort: null,
        passSort: null,
      }
    },
    setDateSort: (state,action) => {
      return {
        ...state,
        dateSort: action.payload,
        airportSort: null,
        gateSort: null,
        turnsSort: null,
        categorySort: null,
        timeSort: null,
        taskSort: null,
        passSort: null,
      }
    },
    setTurnsSort: (state, action) => {
      return {
        ...state,
        turnsSort: action.payload,
        airportSort: null,
        gateSort: null,
        dateSort: null,
        categorySort: null,
        timeSort: null,
        taskSort: null,
        passSort: null,
      }
    },
    setCategorySort: (state, action) => {
      return {
        ...state,
        categorySort: action.payload,
        airportSort: null,
        gateSort: null,
        dateSort: null,
        turnsSort: null,
        timeSort: null,
        taskSort: null,
        passSort: null,
      }
    },
    setTimeSort: (state, action) => {
      return {
        ...state,
        timeSort: action.payload,
        airportSort: null,
        gateSort: null,
        dateSort: null,
        turnsSort: null,
        categorySort: null,
        taskSort: null,
        passSort: null,
      }
    },
    setTaskSort: (state, action) => {
      return {
        ...state,
        taskSort: action.payload,
        airportSort: null,
        gateSort: null,
        dateSort: null,
        turnsSort: null,
        categorySort: null,
        timeSort: null,
        passSort: null,
      }
    },
    setPassSort: (state, action) => {
      return {
        ...state,
        passSort: action.payload,
        airportSort: null,
        gateSort: null,
        dateSort: null,
        turnsSort: null,
        categorySort: null,
        timeSort: null,
        taskSort: null,
      }
    },
    setIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      }
    },
  },
  extraReducers: {
    [getReports.fulfilled]: (state, action) => {
      return {
        ...state,
        initValue: action.payload,
        valueForSort: action.payload,
        isLoading: false,
      }
    },
    [getReports.pending]: (state) => {
      state.isLoading = true;
    },
    [getReports.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});

export const { setReports, setIsLoading, setPassSort, setTaskSort, setTimeSort, setCategorySort, setValueForSort, setAirportSort, setGateSort, setDateSort, setTurnsSort } = reportsSlice.actions;

export const selectInitValue = state => state.reports.initValue;
export const selectValueForSort = state => state.reports.valueForSort;
export const selectAirportSort = state => state.reports.airportSort;
export const selectGateSort = state => state.reports.gateSort;
export const selectDateSort = state => state.reports.dateSort;
export const selectTurnsSort = state => state.reports.turnsSort;
export const selectCategorySort = state => state.reports.categorySort;
export const selectTimeSort = state => state.reports.timeSort;
export const selectTaskSort = state => state.reports.taskSort;
export const selectPassSort = state => state.reports.passSort;

export default reportsSlice.reducer;
