export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = {
  isOpen: false,
  commitHash: null,
  filename: null,
};

export default function detailModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}

export const openModal = (bar, filename) => ({
  type: OPEN_MODAL,
  payload: {
    commitHash: bar.commitHash,
    filename,
  },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
