import { ADD_NOTE, REMOVE_NOTE, CHANGE_STATUS } from "../actions/actions";

const initialState = {
  notes: [],
  status: 'no order'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content,
            url: action.url
          }
        ]
      };
    case REMOVE_NOTE:
      return notes.filter((note, index) => index != action.id);
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export default rootReducer;
