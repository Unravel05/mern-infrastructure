import sendRequest from "./send-request";
const BASE_URL ='/api/notes'

export function addNote(text) {
    return sendRequest(BASE_URL, 'POST', text)
}

export function getNote() {
    return sendRequest(`${BASE_URL}`)
}