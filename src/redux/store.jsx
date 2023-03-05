import {compose,createStore,applyMiddleware,combineReducers} from 'redux';
import createSagaMiddleware from "@redux-saga/core";
import {getSportDetailsData, getSportsData} from './reducer/getSportsReducer'
import getSportsSaga from './saga/getSportsSaga';
import getMoviesSaga from './saga/getMoviesSaga';
import getMoviesData, { movieData } from './reducer/getMoviesReducer';
import getCelibratyData from './reducer/getCelibrityReducer';
import getCelibritySaga from './saga/getCelibritySaga';
import getGenerSaga from './saga/getGenerSaga';
import getGenersData from './reducer/getGenerReducer';
import getSeriesData from './reducer/getSeriesReducer';
import getSeriesSaga from './saga/getSeriesSaga';



const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    GetSportsData:getSportsData,
    GetMoviesData:getMoviesData,
    GetmovieData:movieData,
    GetCelibratyData:getCelibratyData,
    GetGenersData:getGenersData,
    GetSportDetailsData:getSportDetailsData,
    GetSeriesData:getSeriesData,
})

const store =createStore(
   rootReducers,
   composeEnhancer(applyMiddleware(sagaMiddleware))
)
export default store
sagaMiddleware.run(getSportsSaga);
sagaMiddleware.run(getMoviesSaga);
sagaMiddleware.run(getCelibritySaga);
sagaMiddleware.run(getGenerSaga)
sagaMiddleware.run(getSeriesSaga)