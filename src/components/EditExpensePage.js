import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import RemoveModal from './RemoveModal';
import { Link } from 'react-router-dom';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        open: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    openModal = () => {
        this.setState(() => ({ open: true }));
    };
    closeModal = () => {
        this.setState(() => ({ open: false }));
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.closeModal();
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <RemoveModal open={this.state.open} closeModal={this.closeModal} onRemove={this.onRemove}/>   
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <div>
                        <button className="button button--remove"
                            onClick={this.openModal}>Delete Expense
                        </button>
                    </div>
                    <div>
                        <Link to="/dashboard" ><button className="button button--secondary">Go back</button></Link>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);