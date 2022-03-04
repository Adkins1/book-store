import { createSlice } from "@reduxjs/toolkit"

// false == light and true == dark
const initialModalState = { displayModal: false, modalType: "" }

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
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
