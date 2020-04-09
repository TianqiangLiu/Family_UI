import * as names from './actionNames';
import axios from '../../../util/api';

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

export const intialProfile = (accountId)=>{
    return (dispatch)=>{
        axios.get('/api/profile?accountId='+accountId).then((res)=>{
            const result = res.data;
            const action = changeUsername(result.userName);
            dispatch(action);
            const action1 = changeFamilyRole(result.familyRole);
            dispatch(action1);
            const action2 = changePassword(result.password);
            dispatch(action2);
            const action3 = changeFirstName(result.firstName);
            dispatch(action3);
            const action4 = changeLastName(result.lastName);
            dispatch(action4);
        })
    }
};
export const userEdit = (accountId,username,password,firstName,lastName,familyRole)=>{
    const user = {
        accountId:accountId,
        userName:username,
        password:password,
        firstName,
        lastName,
        familyRole
    }
    return (dispatch)=>{
        axios({
            method:'patch',
            url:'/api/profile',
            data:JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res)=>{
            const result = res.data;
            if(result){
                alert("Profile have been saved.")
            }else{
                alert("UserName Have Been Taken!")
            }
        });
    }
};
