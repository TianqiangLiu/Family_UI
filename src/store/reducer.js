import {reducer as headerReducer} from '../global/header/store';
import {reducer as costingReducer} from '../Routers/costingNotes/store';
import {reducer as logInReducer} from '../Routers/login/store';
import {reducer as signUpReducer} from '../Routers/signUp/store';
import {reducer as profileReducer} from '../Routers/profile/store';
import {reducer as calendarReducer} from '../Routers/canlendar/store';
import {combineReducers} from 'redux-immutable';


export default combineReducers({
    header:headerReducer,
    costing:costingReducer,
    logIn:logInReducer,
    signUp:signUpReducer,
    profile: profileReducer,
    calendar: calendarReducer,
})