import React, { PureComponent } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as creators from './store/actionCreators';




class SignUp extends PureComponent{

    render(){
            return(
            <div style = {{background:'#d9d8d2', position:'absolute', height: '100%', width: '100%', zIndex:'0'}}>
                <div style = {{background:'#ffffff', width:'400px', height:'400px', margin:'80px auto', boxShadow:'0 0 8px rgba(0,0,0,.1)'}}>
                    <Input placeholder="User Name"
                    prefix = {<UserOutlined/>} 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px',marginTop:'40px'}}
                    value = {this.props.username}
                    onChange = {this.props.changeUsername}
                    />
                    <Input placeholder="Password" 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px', padding:'0 10px'}}
                    value = {this.props.password}
                    onChange = {this.props.changePassword}
                    />
                    <Input placeholder="First Name" 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px', padding:'0 10px'}}
                    value = {this.props.firstName}
                    onChange = {this.props.changeFirstName}
                    />
                    <Input placeholder="Last Name" 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px', padding:'0 10px'}}
                    value = {this.props.lastName}
                    onChange = {this.props.changeLastName}
                    />
                    <Input placeholder="Family Role" 
                    style = {{ width:'250px', height:'30px', margin:'10px auto', lineHeight:'30px', marginLeft:'70px', padding:'0 10px'}}
                    value = {this.props.familyRole}
                    onChange = {this.props.changeFamilyRole}
                    />
                    <Button 
                    type="primary" 
                    shape="round"
                    style = {{ width:'250px', height:'30px', margin:'10px auto', marginLeft:'70px', padding:'0 10px'}} 
                    onClick={()=>this.props.userSignUp(this.props.history,this.props.username, this.props.password,this.props.firstName,this.props.lastName,this.props.familyRole)}
                    >
                        SignUp
                    </Button>
                </div>
            </div>
            )

    }

}
const mapStateToProps= (state)=>{
    return{
        username: state.getIn(['signUp','username']),
        password: state.getIn(['signUp','password']),
        firstName: state.getIn(['signUp','firstName']),
        lastName: state.getIn(['signUp','lastName']),
        familyRole: state.getIn(['signUp','familyRole']),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeUsername(e){
            dispatch(creators.changeUsername(e.target.value));
        },
        changePassword(e){
            dispatch(creators.changePassword(e.target.value));
        },
        changeFirstName(e){
            dispatch(creators.changeFirstName(e.target.value));
        },
        changeLastName(e){
            dispatch(creators.changeLastName(e.target.value));
        },
        changeFamilyRole(e){
            dispatch(creators.changeFamilyRole(e.target.value));
        },
        userSignUp(history,username,password,firstName,lastName,familyRole){
            dispatch(creators.userSignUp(history,username,password,firstName,lastName,familyRole))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignUp));