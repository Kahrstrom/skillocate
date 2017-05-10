import axios from 'axios';
import {ROOT_URL} from './index';

// export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCHING_PROFILE = 'FETCHING_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';


function fetchingProfile(id) {
  return {
    type: FETCHING_PROFILE,
    id
  }
}

function fetchProfileSuccess(activeProfile) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    activeProfile
  };
}

function fetchProfileFailure(error) {
  return {
    type: FETCH_PROFILE_FAILURE,
    error
  };
}


export function fetchProfile(id) {
  return function (dispatch) {
    dispatch(fetchingProfile(id));
    return axios.get(`${ROOT_URL}/user/${id}`)
      .then(response => {
          console.log(response);
          dispatch(fetchProfileSuccess(response.data.data.user))
        }
      )
      .catch(error => {
        dispatch(fetchProfileFailure(error))
      });
  }
}
