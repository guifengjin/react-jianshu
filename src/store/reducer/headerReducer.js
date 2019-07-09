import { fromJS } from 'immutable';
import * as types from '../action/types';

const defaultState = fromJS({
  focused: false
});

// immutable 对象的set方法, 会结合之前的immutable对象的值和设置的值,返回一个全新的对象
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return state.set('focused', true)
    case types.SEARCH_BLUR:
      return state.set('focused', false)
    default:
      return state.set('focused', false)
  }
}