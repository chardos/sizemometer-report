export const ADD_HISTORIES = 'ADD_HISTORIES';

export default function histories(state = [], action) {
  switch (action.type) {
    case ADD_HISTORIES:
      return action.payload;

    default:
      return state;
  }
}

export const addHistories = fileHistories => ({
  type: ADD_HISTORIES,
  payload: fileHistories,
});
