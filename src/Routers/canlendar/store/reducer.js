import { fromJS } from 'immutable';
import * as names from './actionNames';
import moment from 'moment';


const defaultState = fromJS({
    type: 'success',
    content: '',
    date: moment(new Date()),
    update: 0,
    event: {},

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case names.CHANGE_CONTENT:
            return state.set('content', action.data);
        case names.CHANGE_DATE:
            return state.set('date', action.data);
        case names.CHANGE_TYPE:
            return state.set('type', action.data);
        case names.CHANGE_EVENT:
            return state.set('event',action.data);
        case names.CLEAN:
            return state.merge({
                'type': 'success',
                'content': '',
                'date': moment(new Date()),
            });
        case names.UPDATE:
            return state.set('update',state.getIn(['calendar', 'update'])+1);
        default:
            return state;
    }

};