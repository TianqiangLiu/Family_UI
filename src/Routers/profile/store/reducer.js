import {fromJS} from 'immutable';
import * as names from './actionNames';


const defaultState = fromJS({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    familyRole: '',
});

export default (state = defaultState, action) =>{
    switch(action.type){
        case names.CHANGE_USERNAME:
            return state.set('username',action.data);
        case names.CHANGE_PASSWORD:
            return state.set('password',action.data);
        case names.CHANGE_FIRSTNAME:
            return state.set('firstName',action.data);
        case names.CHANGE_LASTNAME:
            return state.set('lastName',action.data);
        case names.CHANGE_FAMILYROLE:
            return state.set('familyRole',action.data);
        default:
            return state;
    }
    
}