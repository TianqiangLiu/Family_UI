import {fromJS} from 'immutable';
import * as names from './actionNames';


const defaultState = fromJS({
    login: false,
    username: '',
    password: '',
    accountId: '',
});

export default (state = defaultState, action) =>{
    switch(action.type){
        case names.CHANGE_LOGIN:
            return state.set('login',action.data);
        case names.CHANGE_USERNAME:
            return state.set('username',action.data);
        case names.CHANGE_PASSWORD:
            return state.set('password',action.data);
        case names.INITIAL_ID:
            return state.set('accountId',action.data);
        default:
            return state;
    }
    
}