import {fromJS,remove} from 'immutable';
import * as names from './actionNames';
import moment from 'moment';

const defaultState = fromJS({
    inputNum: '',
    inputPro: '',
    inputCla:'personal',
    inputDate: moment(new Date()),
    list: [],
    pieList: [],
    pieListValue: '30'
});

export default (state = defaultState, action) =>{
    switch(action.type){
        case names.CHANGE_NUM:
            return state.set('inputNum',action.data);
        case names.CHANGE_PRO:
            return state.set('inputPro',action.data);
        case names.CHANGE_CLA:
            return state.set('inputCla',action.data);
        case names.CHANGE_DATE:
            return state.set('inputDate',action.data);
        case names.CHANGE_PIEVALUE:
            return state.set('pieListValue',action.data);
        case names.ADD_LIST:
            const temState = [{
                key: state.get('inputNum')+ '-'
                +state.get('inputPro')+'-'
                +state.get('inputCla')+'-'
                +state.get('inputDate').format('YYYY-MM-DD')+'-'
                +action.data
                    ,
                id: action.data,
                amount: state.get('inputNum'),
                propose: state.get('inputPro'),
                categories: state.get('inputCla'),
                date: state.get('inputDate').format('YYYY-MM-DD')
            }];
            return state.merge({
                                'list' : state.get('list').concat(temState),
                                'inputNum':'',
                                'inputPro':'',
                                'inputCla':'personal',
                                'inputDate':moment(new Date())
                                });

        case names.DELETE_LIST:
            return state.merge({
                'list': remove(state.get('list'),action.data),
            });
        case names.INITIAL_LIST:
            return state.set('list', fromJS(action.data));
        case names.INITIAL_PIELIST:
            return state.set('pieList', fromJS(action.data))
        default:
            return state;
    }
    
}