import axios from '../../../util/api';
import * as names from './actionNames';


export const userLogIn = (userName, password)=>{
    return (dispatch)=>{

        axios.get('/api/login?username='+userName+'&password='+password).then((res)=>{
            const result = res.data;
            if(result){
                const action = changeLogin(result);
                dispatch(action);
                const newaction = initialId(result.accountId);
                dispatch(newaction);
            }else{
                alert("Wrong Credencial!")
            }
        })
    }
};

export const initialId = (data)=>({
    type:names.INITIAL_ID,
    data:data
});

export const changeLogin = (data)=>({
    type:names.CHANGE_LOGIN,
    data:data
});

export const changeUsername = (data)=>({
    type:names.CHANGE_USERNAME,
    data:data,
});

export const changePassword = (data)=>({
    type:names.CHANGE_PASSWORD,
    data:data,
});
