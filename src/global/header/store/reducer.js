import {fromJS} from 'immutable';
const defaultState = fromJS({
    focused:false,
});

export default (state = defaultState, action)=>{
    return state;
}