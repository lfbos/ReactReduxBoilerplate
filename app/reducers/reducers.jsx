export var showMessageReducer = (state = false, action) => {
 switch (action.type) {
  case 'TOGGLE_MESSAGE':
   return !state;
   break;
  default:
   return state;
 }
};
