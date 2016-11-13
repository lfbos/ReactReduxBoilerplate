import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from 'reducers';

describe('Reducers', () => {
	describe('exampleReducer', () => {
		it('should toggle message', () => {
			var action = {
				type: 'TOGGLE_MESSAGE'
			};
			var res = reducers.showMessageReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});
});
