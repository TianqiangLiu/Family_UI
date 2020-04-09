import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import familyPic from '../../constant/familyPicture.jpg';

class Home extends PureComponent{
    render(){
        return(
            <div>
                <img src = {familyPic}  height = "100%" width = "100%"/>
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    return{
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);