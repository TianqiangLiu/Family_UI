import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddCalendar from './addCalendar';
import CalendarComponent from './calendarComponent';


class CanlenderDetail extends PureComponent {

    render() {
        
        if (this.props.login) {
            return (
                <div

                >
                    <div style={{ width: '70%', marginLeft: '10px', float: 'left' }}>
                        <CalendarComponent></CalendarComponent>
                    </div>
                    <div style={{ width: '25%', marginLeft: '10px', marginTop: '20px', float: 'right' }}>
                    <AddCalendar></AddCalendar>

                    </div>
                </div>

            )
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.getIn(['logIn', 'login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanlenderDetail);