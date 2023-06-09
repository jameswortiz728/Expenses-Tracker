import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const text = 'Test'

    const action = { 
        type: 'SET_TEXT_FILTER',
        text 
    };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('Test'); 
}); 

test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const startDate = moment(0);

    const action = { 
        type: 'SET_START_DATE', 
        startDate 
    };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const endDate = moment(0);

    const action = { 
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(moment(0));
});