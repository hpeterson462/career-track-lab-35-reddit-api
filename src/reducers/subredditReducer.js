import {
  SET_SUBREDDIT_INPUT
}

const initialState = {
  current: '',
  input: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUBREDDIT_INPUT:
      return { ...state, input: action.payload };
    default:
      return { ...state, current: state.input, input: '' };
    default:
      return state;
  }
}
