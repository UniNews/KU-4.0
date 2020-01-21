import * as types from './actionTypes';
import service from '../../services/news';

const fetch_news = () => {
    return { type: types.FETCH_NEWS };
}

const newsOk = (payload) => {
    return { type: types.NEWS_OK, payload };
}

const newsFail = () => {
    return { type: types.NEWS_FAIL };
}

export function getNewsRecommendation(id) {
    return (dispatch) => {
        dispatch(fetch_news());
        service.getNewsRecommendation(id)
            .then((res) => {
                const news = res;
                dispatch(newsOk(news));
            }).catch(err => dispatch(newsFail()));
    };
}