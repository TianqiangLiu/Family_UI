import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input, Button, DatePicker, Table, Select, Radio } from 'antd';
import * as creators from '../store/actionCreators';
import { PieChart, Pie } from 'recharts';
import moment from 'moment';

const { Column, } = Table;
const { Option } = Select;


class CostList extends PureComponent {


    render() {
        const { login, accountId, inputNum, inputPro, inputCla, inputDate } = this.props;
        // const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({
            cx, cy, midAngle, innerRadius, outerRadius, percent, index,
        }) => {

            return JSON.parse(JSON.stringify(this.props.pieList))[index].name;
        };
        const renderTableDate = (text, record, index) => {
            const date = new Date(text);
            return date.toDateString();
        };
        const renderTableKey = (record) => {
            return record.id;
        };
        const compareMoment = (a, b) => {
            return moment(a.date).isAfter(b.date);
        }
        if (login) {
            return (
                <div style={{ marginTop: '50px' }}>
                    <div style={{ width: '900px', overflow: 'hidden', float: 'left' }}>
                        <Input
                            placeholder="Amount"
                            style={{ width: '150px', marginRight: '10px' }}
                            value={inputNum}
                            onChange={this.props.changeNum.bind(this)}
                        ></Input>
                        <Input
                            placeholder="Propose of Costing"
                            style={{ width: '300px', marginRight: '10px' }}
                            value={inputPro}
                            onChange={this.props.changePro.bind(this)}
                        ></Input>
                        <Select defaultValue={inputCla} value={inputCla} style={{ width: 160 }} onChange={this.props.changeCla.bind(this)}>
                            <Option value='personal'>Personal</Option>
                            <Option value='grocery'>Grocery</Option>
                            <Option value='transportation'>Transportation</Option>
                            <Option value='entertainment'>Entertainment</Option>
                            <Option value='restaurants'>Restaurants</Option>
                            <Option value='health and education'>Health and Education</Option>
                            <Option value='home and office'>Home and Office</Option>

                        </Select>
                        <DatePicker
                            placeholder="Date of Costing"
                            value={inputDate}
                            onChange={this.props.changeDate.bind(this)}
                        />
                        <Button
                            type="primary"
                            style={{ marginLeft: '10px' }}
                            onClick={() => this.props.addList(accountId, inputNum, inputPro, inputCla, inputDate)}
                        >
                            Submit
                        </Button>
                        <Table
                            dataSource={JSON.parse(JSON.stringify(this.props.list))}
                            style={{ marginTop: '10px', width: '800px' }}
                            rowKey={renderTableKey}
                            sortDirections={['descend']}>
                            <Column title='Amount'
                                dataIndex='amount'
                                key='amount' />
                            <Column title='Propose of Costing'
                                dataIndex='propose'
                                key='propose' />
                            <Column title='Spend Categories'
                                dataIndex='categories'
                                key='categories' />
                            <Column title='Date'
                                dataIndex='date'
                                key='date'
                                render={renderTableDate}
                                sorter={(a, b) => compareMoment(a, b)}
                                defaultSortOrder={'descend'} />
                            <Column title="Action"
                                key="action"
                                render={(text, record, index) => (
                                    <span>
                                        <Button onClick={() => this.props.deleteList(JSON.parse(JSON.stringify(this.props.list))[index].id, index)}>Delete</Button>
                                    </span>
                                )} />
                        </Table>
                    </div>
                    <div style={{ display: 'block' }}>
                        <div style={{ marginRight: '530px', float: 'right' }}>Money Spended This Year</div>
                        <Radio.Group style={{ marginRight: '450px', float: 'right' }} value={this.props.pieListValue} onChange={(e) => this.props.changePieValue(e, accountId)}>
                            <Radio value='30'>Last 30 days</Radio>
                            <Radio value='180'>Last 180 days</Radio>
                            <Radio value='360'>Last 360 days</Radio>
                        </Radio.Group>
                        <PieChart width={375} height={270} style={{ width: '500px', float: 'right', marginRight: '300px' }} isAnimationActive={false} >

                            <Pie data={JSON.parse(JSON.stringify(this.props.pieList))} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#5bba65" label={renderCustomizedLabel} isAnimationActive={false} />
                            {/* <Pie data = {data01}  dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label={true} isAnimationActive={false} /> */}
                        </PieChart>
                    </div>

                </div>
            )
        } else {
            return <Redirect to='/login' />
        }
    }

    componentDidMount() {
        if (this.props.login) {
            this.props.initialList(this.props.accountId);
            this.props.initialPieList(this.props.accountId, this.props.pieListValue);
        }
    }

}




const mapStateToProps = (state) => {
    return {
        login: state.getIn(['logIn', 'login']),
        accountId: state.getIn(['logIn', 'accountId']),
        inputNum: state.getIn(['costing', 'inputNum']),
        inputPro: state.getIn(['costing', 'inputPro']),
        inputCla: state.getIn(['costing', 'inputCla']),
        inputDate: state.getIn(['costing', 'inputDate']),
        list: state.getIn(['costing', 'list']),
        pieList: state.getIn(['costing', 'pieList']),
        pieListValue: state.getIn(['costing', 'pieListValue'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeNum(e) {
            const action = creators.changeNum(e.target.value);
            dispatch(action);
        },
        changePro(e) {
            const action = creators.changePro(e.target.value);
            dispatch(action);
        },
        changeCla(e) {
            const action = creators.changeCla(e);
            dispatch(action);
        },
        changeDate(date, dateString) {
            const action = creators.changeDate(date);
            dispatch(action);
        },
        changePieValue(e, accountId) {
            const action = creators.changePieValueRemote(e.target.value, accountId);
            dispatch(action);
        }
        ,
        addList(accountId, inputNum, inputPro, inputCla, inputDate) {
            const action = creators.addListremote(accountId, inputNum, inputPro, inputCla, inputDate);
            dispatch(action);
        },
        deleteList(id, index) {
            const action = creators.deleteListRemote(id, index);
            dispatch(action);
        },
        initialList(accountId) {
            const action = creators.initList(accountId);
            dispatch(action);
        },
        initialPieList(accountId, value) {
            const action = creators.initPieList(accountId, value);
            dispatch(action);
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CostList);