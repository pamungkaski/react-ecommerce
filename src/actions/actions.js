export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const CHANGE_STATUS = "CHANGE_STATUS";

export function addNote(title, content, url) {
  return { type: ADD_NOTE, title: title, content: content, url: url };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}

export function changeStatus(status) {
  return { type: CHANGE_STATUS, status: status };
}