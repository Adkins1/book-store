import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Links = () => {
  const user = useSelector((state) => state.auth.user)

  return (
    <section>
      <p>Hello {user ? `${user}!` : "Guest!"}</p>
      <h1>Links</h1>
      <br />
      <h2>Public</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <br />
      <h2>Private</h2>
      <Link to="/">Home</Link>
      <Link to="/editor">Editors Page</Link>
      <Link to="/admin">Admin Page</Link>
    </section>
  )
}

export default Links
