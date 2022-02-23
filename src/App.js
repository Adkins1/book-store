import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import BookStore from "./Pages/BookStore"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookstore" element={<BookStore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
