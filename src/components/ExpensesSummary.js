import React from 'react';
import { getExpensesTotal, getExpensesCount } from '../selectors/expenses-total';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expensesCount, expensesTotal, allExpenses }) => {
    const expensesWord = expensesCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    const notShownExpenses = allExpenses - expensesCount;
    const notShownExpensesWord = notShownExpenses === 1 ? "expense" : "expenses";

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <p className="page-header__title">Not showing: <span>{notShownExpenses}</span> {notShownExpensesWord} due to filters below</p>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses),
        allExpenses: state.expenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);