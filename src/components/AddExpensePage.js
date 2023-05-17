import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { Link } from 'react-router-dom';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                     <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                    <Link to="/dashboard" ><button className="button button--secondary">Go back</button></Link>
                </div>  
            </div>
        );
    }
} 

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);