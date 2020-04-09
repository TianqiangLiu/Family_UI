import React from 'react';
import {HeaderDiv, Title,MenuDiv} from './style';
import {actionCreators as loginCreators} from '../../Routers/login/store';
import { Menu , Button} from 'antd';
import {
    HomeOutlined,
    SnippetsOutlined,
    TableOutlined,
    UserOutlined,
    TeamOutlined,
    SearchOutlined,
    LoginOutlined
} from '@ant-design/icons';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


const Header = (props)=>{
    return(
        <HeaderDiv>
            <Link to='/'>
                <Title/>
            </Link>
            <MenuDiv style = {{ zIndex:'1'}}>
                <Menu mode="horizontal" style = {{boxSizing: 'border-box', width:'760px', display:'block', paddingRight:'400px',overflow:'hidden',float:'left'}} selectable = {false}>
                    
                    <Menu.Item key = 'homePage' style = {{color:'#292929'}}>
                        <Link to='/'>
                            <HomeOutlined style = {{color:'#f7725c'}}/>
                            Home
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item  key = 'notes'  style = {{color:'#292929'}} >
                        <Link to='/costingnotes'>
                        <SnippetsOutlined style = {{color:'#f7725c'}}/>
                        Costing Notes
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item  key = 'canlendar' style = {{color:'#292929'}}>
                        <Link to='/canlendar'>
                        <TableOutlined style = {{color:'#f7725c'}}/>
                        Calendar
                        </Link>
                    </Menu.Item>
                    <Menu.Item key = 'location'  style = {{color:'#292929'}}>
                        <Link to='/location'>
                        <SearchOutlined style = {{color:'#f7725c'}}/>
                        Location
                        </Link>
                    </Menu.Item>
                    <Menu.Item key = 'communication'  style = {{color:'#292929'}}>
                        <Link to='/communication'>
                        <TeamOutlined style = {{color:'#f7725c'}}/>
                        Communication
                        </Link>
                    </Menu.Item>
                    <Menu.Item key = 'profile'  style = {{color:'#292929'}}>
                        <Link to='/profile'>
                        <UserOutlined style = {{color:'#f7725c'}}/>
                        Profile
                        </Link>
                    </Menu.Item>

                </Menu>
                {
                    props.login?
                    <Button type="primary" style = {{left:"0px", marginTop:'20px'}} icon = {<LoginOutlined />} onClick = {props.logout}>LogOut</Button>
                    :
                    <div>
                    <Link to='/login'>
                        <Button type="primary" style = {{left:"0px", marginTop:'20px'}} icon = {<LoginOutlined />}>LogIn</Button>
                    </Link>
                    <Link to='/signup'>
                    <Button type="dashed" style = {{left:"0px", marginTop:'20px'}}>SignUp</Button>
                    </Link>
                    </div>
                    

                }
                
            </MenuDiv>
            

        </HeaderDiv>
        );
    
}

const mapStateToProps= (state)=>{
    return{
        login: state.getIn(['logIn', 'login'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logout(){
            dispatch(loginCreators.changeLogin(false));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);