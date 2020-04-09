import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import * as creators from './store/actionCreators';




class LogIn extends PureComponent{

    render(){
        const {login}=this.props;
        if(!login){
            return(
            <div style = {{background:'#d9d8d2', position:'absolute', height: '100%', width: '100%', zIndex:'0'}}>
                <div style = {{background:'#ffffff', width:'400px', height:'220px', margin:'80px auto', boxShadow:'0 0 8px rgba(0,0,0,.1)'}}>
                    <Input placeholder="User Name"
                    prefix = {<UserOutlined/>} 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px',marginTop:'40px'}}
                    value = {this.props.username}
                    onChange = {this.props.changeUsername}
                    />
                    <Input.Password placeholder="Password" 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px', padding:'0 10px'}}
                    value = {this.props.password}
                    onChange = {this.props.changePassword}
                    />
                    <Button 
                    type="primary" 
                    shape="round"
                    style = {{ width:'250px', height:'30px', margin:'10px auto', marginLeft:'70px', padding:'0 10px'}} 
                    onClick={()=>this.props.userLogIn(this.props.username, this.props.password)}>
                        Log In
                    </Button>
                </div>
            </div>
            )
        }else{
            return <Redirect to='/'/>
        }
    }

}
const mapStateToProps= (state)=>{
    return{
        login: state.getIn(['logIn','login']),
        username: state.getIn(['logIn','username']),
        password: state.getIn(['logIn','password']),
        accountId: state.getIn(['logIn','accountId']),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        userLogIn(userName, password){
            dispatch(creators.userLogIn(userName,password));
        },
        changeUsername(e){
            dispatch(creators.changeUsername(e.target.value));
        },
        changePassword(e){
            dispatch(creators.changePassword(e.target.value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogIn);