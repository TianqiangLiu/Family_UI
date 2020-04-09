import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';
import * as creators from './store/actionCreators';




class Profile extends PureComponent {

    render() {

        const { login ,accountId, username, password, firstName, lastName, familyRole} = this.props;
        if (login) {
            return (
                <div style={{ background: '#d9d8d2', position: 'absolute', height: '100%', width: '100%', zIndex: '0' }}>
                    {/* <div style = {{background:'#ffffff', width:'400px', height:'400px', margin:'80px auto', boxShadow:'0 0 8px rgba(0,0,0,.1)'}}> */}
                    <Form
                        name="profileForm"
                        style={{ background: '#ffffff', width: '400px', height: '350px', margin: '10px auto', marginTop: '100px' }}
                    >
                        <Form.Item label="User Name"
                            style={{ width: '100%', height: '30px', margin: '10px auto', marginLeft: '80px', marginTop: '50px', padding: '0 10px', bottom: '0' }}
                        >
                            <Input value={this.props.username} style={{ width: '30%' }} onChange={this.props.changeUsername}></Input>

                        </Form.Item>
                        <Form.Item label="Password"
                            style={{ width: '100%', height: '30px', margin: '10px auto', marginLeft: '80px', padding: '0 10px' }}
                        >
                            <Input value={this.props.password} style={{ width: '30%' }} onChange={this.props.changePassword}></Input></Form.Item>
                        <Form.Item label="First Name"
                            style={{ width: '100%', height: '30px', margin: '10px auto', marginLeft: '80px', padding: '0 10px' }}

                        >
                            <Input value={this.props.firstName} style={{ width: '30%' }} onChange={this.props.changeFirstName}></Input></Form.Item>
                        <Form.Item label="Last Name"
                            style={{ width: '100%', height: '30px', margin: '10px auto', marginLeft: '80px', padding: '0 10px' }}
                        >
                            <Input value={this.props.lastName} style={{ width: '30%' }} onChange={this.props.changeLastName}></Input></Form.Item>
                        <Form.Item label="Family Role"
                            style={{ width: '100%', height: '30px', margin: '10px auto', marginLeft: '80px', padding: '0 10px' }}

                        >
                            <Input value={this.props.familyRole} style={{ width: '30%' }} onChange={this.props.changeFamilyRole}></Input></Form.Item>
                        <Form.Item
                            style={{ width: '100%', height: '30px', margin: '10px auto', marginLeft: '80px', padding: '0 10px', float: 'right' }}

                        >
                            <Button type="primary" htmlType="submit" style={{ marginRight: '80px', float: 'right' }}
                                onClick={()=>this.props.userEdit(accountId, username, password, firstName, lastName, familyRole)}>
                                Edit
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* </div> */}
                </div>
            )
        } else {
            return <Redirect to='/login' />
        }
    }

    componentDidMount() {
        if (this.props.login) {
            this.props.intialProfile(this.props.accountId);
        }
    }

}
const mapStateToProps = (state) => {
    return {
        login: state.getIn(['logIn', 'login']),
        accountId: state.getIn(['logIn', 'accountId']),
        username: state.getIn(['profile', 'username']),
        password: state.getIn(['profile', 'password']),
        firstName: state.getIn(['profile', 'firstName']),
        lastName: state.getIn(['profile', 'lastName']),
        familyRole: state.getIn(['profile', 'familyRole']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        intialProfile(accountId) {
            dispatch(creators.intialProfile(accountId));
        },
        changeUsername(e) {
            dispatch(creators.changeUsername(e.target.value));
        },
        changePassword(e) {
            dispatch(creators.changePassword(e.target.value));
        },
        changeFirstName(e) {
            dispatch(creators.changeFirstName(e.target.value));
        },
        changeLastName(e) {
            dispatch(creators.changeLastName(e.target.value));
        },
        changeFamilyRole(e) {
            dispatch(creators.changeFamilyRole(e.target.value));
        },
        userEdit(accountId, username, password, firstName, lastName, familyRole) {
            dispatch(creators.userEdit(accountId, username, password, firstName, lastName, familyRole));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);