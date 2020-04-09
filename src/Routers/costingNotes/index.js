import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import CostList from './components/CostList';




class CostingNotes extends PureComponent{

    render(){
        return(
        <div>
        <CostList/>
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

export default connect(mapStateToProps,mapDispatchToProps)(CostingNotes);