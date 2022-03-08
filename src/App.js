import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import BookStore from "./Pages/BookStore"
import RegisterPage from "./Pages/RegisterPage"
import LoginPage from "./Pages/LoginPage"
import RequireAuth from "./Components/RequireAuth/RequireAuth"
import EditorUserPage from "./Pages/EditorUserPage"
import AdminUserPage from "./Pages/AdminUserPage"
import MissingPage from "./Pages/MissingPage"
import LayoutPage from "./Pages/LayoutPage"
import LinkPage from "./Pages/LinkPage"
import UnauthorizedPage from "./Pages/UnauthorizedPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bookstore" element={<BookStore />} />
          <Route path="/linkpage" element={<LinkPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* here we protect these routes */}
          <Route
            element={
              <RequireAuth allowedRoles={process.env.REACT_APP_USER_ROLE} />
            }
          >
            <Route path="/" element={<Homepage />} />
          </Route>

          <Route
            element={
              <RequireAuth allowedRoles={process.env.REACT_APP_EDITOR_ROLE} />
            }
          >
            <Route path="editor" element={<EditorUserPage />} />
          </Route>

          <Route
            element={
              <RequireAuth allowedRoles={process.env.REACT_APP_ADMIN_ROLE} />
            }
          >
            <Route path="admin" element={<AdminUserPage />} />
          </Route>

          {/* catch all other urls*/}
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
