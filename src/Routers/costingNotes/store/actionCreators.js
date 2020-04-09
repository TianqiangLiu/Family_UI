import * as names from './actionNames';
import axios from '../../../util/api';
//import {fromJS} from 'immutable';

export const changeNum = (data)=>({
    type:names.CHANGE_NUM,
    data: data
});

export const changePro = (data)=>({
    type: names.CHANGE_PRO,
    data: data
});
export const changeCla = (data)=>({
    type: names.CHANGE_CLA,
    data: data
});
export const changeDate = (data)=>({
    type: names.CHANGE_DATE,
    data: data
});
export const changePieValue = (data)=>({
    type: names.CHANGE_PIEVALUE,
    data: data
});
export const changePieValueRemote = (value,accountId)=>{
    return (dispatch)=>{
        const action = initPieList(accountId,value);
        dispatch(action);
        const action1 = changePieValue(value);
        dispatch(action1);
    };
};


const addList = (data)=>({
    type: names.ADD_LIST,
    data: data
});
export const addListremote= (accountId, inputNum, inputPro, inputCla,inputDate)=> {
    const costing ={
        accountId,
        amount: inputNum,
        propose: inputPro,
        categories: inputCla,
        date: inputDate,
    }; 
    return (dispatch)=>{
        axios({
            method:'post',
            url:'/api/costingList',
            data:JSON.stringify(costing),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res)=>{
            const result = res.data;
            if(result){
            const action = addList(result.id);
            dispatch(action);
            }else{
                alert("Fail to Add!");
            }
        })
    };
};
const deleteList = (index)=>({
    type: names.DELETE_LIST,
    data: index
});

export const deleteListRemote = (id, index)=>{
    return (dispatch)=>{
        axios.delete('/api/costingList?id='+id).then((res)=>{
            const data = res.data;
            if(data){
                const action = deleteList(index);
                dispatch(action);
            }else{
                alert("Fail to Delete!");
            }
        })
    }
}

export const initList = (id)=>{
    return (dispatch)=>{
        axios.get('/api/costingList?accountId='+id).then((res)=>{
            const data = res.data;
            const action = initialList(data);
            dispatch(action);
        })
    };
};
export const initPieList = (accountId,value)=>{
    return (dispatch)=>{
        axios.get('/api/costingList/pieList?accountId='+accountId+'&choose='+value).then((res)=>{
            const data = res.data;
            if(data){
            const action = initialPieList(data);
            dispatch(action);
            }else{
                alert("Fail to Get Value For Pie Chart!");
            }
        })
    }
}
export const initialList = (data)=>({
    type: names.INITIAL_LIST,
    data: data
});
export const initialPieList = (data)=>({
    type: names.INITIAL_PIELIST,
    data: data
});