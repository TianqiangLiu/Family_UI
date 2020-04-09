import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, DatePicker, Button } from 'antd';

import * as creators from '../store/actionCreators';


const { Option } = Select;
const { TextArea } = Input;

class AddCalendar extends PureComponent {

    
    render() {
        const { accountId,type,content,date } = this.props;
        return(
            <div>
                        <Form
                            name="calendarForm"
                            style={{ width: '80%' }}
                        >
                            <Form.Item label="Type: ">
                                <Select style={{ width: '80%' }} value={this.props.type} onChange={this.props.changeType.bind(this)}>
                                    <Option value='success'>Normal</Option>
                                    <Option value='warning'>Important</Option>
                                    <Option value='error'>Significant</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Content: ">
                                <TextArea rows={4} style={{ width: '80%' }} value={this.props.content} onChange={this.props.changeContent.bind(this)} />
                            </Form.Item>
                            <Form.Item label="Date: ">
                                <DatePicker style={{ width: '80%' }} value={this.props.date} onChange={this.props.changeDate.bind(this)} />
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" style={{ float: 'right', marginRight: '17%' }} onClick = {()=>this.props.addEvent(accountId,type,content,date)}>Submit</Button>
                            </Form.Item>
                        </Form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        accountId: state.getIn(['logIn', 'accountId']),
        type: state.getIn(['calendar', 'type']),
        content: state.getIn(['calendar', 'content']),
        date: state.getIn(['calendar', 'date']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeContent(e) {
            const action = creators.changeContent(e.target.value);
            dispatch(action);
        },
        changeDate(date, dateString) {
            const action = creators.changeDate(date);
            dispatch(action);
        },
        changeType(e) {
            const action = creators.changeType(e);
            dispatch(action);
        },
        addEvent(accountId,type,content,date){
            const action = creators.addEvent(accountId,type,content,date);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCalendar);