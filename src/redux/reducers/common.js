
const defaultState = {
  appName: '',
  modalMode: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
    console.log(`toggling modal: ${action.modalMode}`)
    return {
      ...defaultState,
      modalMode: action.modalMode
    }
    default:
      return state;
  }
};
