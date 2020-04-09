import * as names from './actionNames';
import axios from '../../../util/api';

export const changeContent = (data)=>({
    type:names.CHANGE_CONTENT,
    data:data,
});

export const changeDate = (data)=>({
    type:names.CHANGE_DATE,
    data:data,
});
export const changeType = (data)=>({
    type:names.CHANGE_TYPE,
    data:data,
});
export const changeEvent = (data)=>({
    type:names.CHANGE_EVENT,
    data:data,
});
export const clean = (data)=>({
    type:names.CLEAN,
    data:data,
});
export const addEvent= (accountId,type,content,date)=> {
    const event ={
        accountId,
        type,
        content,
        date

    }; 
    return (dispatch)=>{
        
        axios({
            method:'post',
            url:'/api/event',
            data:JSON.stringify(event),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res)=>{
            const result = res.data;
            if(result){
            const action = clean(result.id);
            dispatch(action);
            const action2 = getListData(accountId);
            dispatch(action2);
            }else{
                alert("Fail to Add!");
            }
        });
        
    };
};

export const getListData = (accountId)=>{
    return(dispatch)=>{
        axios.get('/api/canlendar?accountId=' + accountId ).then((res) => {
            if (res.data) {
                dispatch(changeEvent(res.data));
            }

        });
    }
};

