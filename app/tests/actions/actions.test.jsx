import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
	it('should generate toggle message action', () => {
		var action = {
			type: 'TOGGLE_MESSAGE'
		};
		var res = actions.toggleMessage();

		expect(res).toEqual(action);
	});
});
