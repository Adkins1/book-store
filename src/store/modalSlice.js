import { createSlice } from "@reduxjs/toolkit"

// false == light and true == dark
const initialThemeState = { displayModal: false, modalType: "" }

const modalSlice = createSlice({
  name: "modal",
  initialState: initialThemeState,
  reducers: {
    toggleModal(state) {
      state.displayModal = !state.displayModal
    },
    changeModalType(state, action) {
      state.modalType = action.payload
    },
  },
})

export const modalActions = modalSlice.actions

export default modalSlice.reducer
