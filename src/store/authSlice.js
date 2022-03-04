import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = { accessToken: "", roles: [], user: "" }

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setAuth(state, action) {
      const { accessToken, roles, user } = action.payload
      state.accessToken = accessToken
      state.roles = roles
      state.user = user
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
