import * as names from './actionNames';
import axios from '../../../util/api';
import {actionCreators as loginCreators} from '../../login/store';

export const changeUsername = (data)=>({
    type:names.CHANGE_USERNAME,
    data:data,
});

export const changePassword = (data)=>({
    type:names.CHANGE_PASSWORD,
    data:data,
});
export const changeFirstName = (data)=>({
    type:names.CHANGE_FIRSTNAME,
    data:data,
});
export const changeLastName = (data)=>({
    type:names.CHANGE_LASTNAME,
    data:data,
});
export const changeFamilyRole = (data)=>({
    type:names.CHANGE_FAMILYROLE,
    data:data,
});
export const userSignUp = (history,username,password,firstName,lastName,familyRole)=>{
    const user = {
        userName:username,
        password:password,
        firstName,
        lastName,
        familyRole
    }
    return (dispatch)=>{
        axios({
            method:'post',
            url:'/api/signup',
            data:JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res)=>{
            const result = res.data;
            if(result){
                const action = loginCreators.changeLogin(result);
                dispatch(action);
                const newaction = loginCreators.initialId(result.accountId);
                dispatch(newaction);
                history.push('/');
            }else{
                alert("UserName Have Been Taken!")
            }
        });
    }
}