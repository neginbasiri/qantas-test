import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';


import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('fetch data on mount', () => {
	const app = shallow(<App />);
	const FakeFun = jest.spyOn(app.prototype, 'getAirportData');

	expect(FakeFun).toHaveBeenCalled();
});
