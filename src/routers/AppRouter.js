import React from 'react';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import LoginPage from './../components/LoginPage';
import NotFoundPage from './../components/NotFoundPage';
import Footer from './../components/Footer';
import { Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from  './PrivateRoute';
import PublicRoute from  './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component = {LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component = {ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component = {AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component = {EditExpensePage}/>
                <PublicRoute component={NotFoundPage} />
            </Switch>
            <Footer/>
        </div>
    </Router>
);

export default AppRouter;