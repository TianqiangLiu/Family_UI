import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Calendar, Badge } from 'antd';

import moment from 'moment';
import * as creators from '../store/actionCreators';



class CanlendarComponent extends PureComponent {


    render() {

        const getListData = (value)=> {
            let listData;
            let date= value.format("YYYY-MM-DD");
            const events = this.props.event;
            listData = events[date];
            return listData||[];
        }

        const dateCellRender=(value)=> {
            const listData = getListData(value);
            return (
              <ul className="events">
                {listData.map(item => (
                  <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                  </li>
                ))}
              </ul>
            );
          }
        return (
            <div>
                <Calendar defaultValue={moment(new Date())} dateCellRender={dateCellRender} />

            </div>

        )

    }
    componentDidMount() {

        this.props.getListData(this.props.accountId);

    }
}



const mapStateToProps = (state) => {
    return {
        accountId: state.getIn(['logIn', 'accountId']),
        update: state.getIn(['calendar', 'update']),
        event: state.getIn(['calendar', 'event']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListData(accountId) {
            dispatch(creators.getListData(accountId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanlendarComponent);