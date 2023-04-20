export const getExpensesTotal = (expenses) => {
    return expenses ? expenses.reduce((total, expense) => total + expense.amount, 0) : 0
};

export const getExpensesCount = (expenses) => {
    return expenses.length;
};
 