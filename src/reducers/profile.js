import { FETCHING_PROFILE, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from '../actions/profile';

const INITIAL_STATE = {
   activeProfile: {
      profile: null,
      error: '',
      loading: false
   },
   profileList: {
      profiles: [],
      error: '',
      loading: false
   }
};

export default function(state = INITIAL_STATE, action) {
   switch(action.type) {
      case FETCHING_PROFILE:
         return {
            ...state,
            activeProfile: {
               profile: null,
               error: '',
               loading: true
            }
         };
      case FETCH_PROFILE_SUCCESS:
         return {
            ...state,
            activeProfile: {
               profile: action.activeProfile,
               loading: false,
               error: ''
            }
         };
      case FETCH_PROFILE_FAILURE:
         return {
            ...state,
            activeProfile: {
               profile: null,
               loading: false,
               error: action.error
            }
         };
      default:
         return state;
   }
}