import { Link } from "react-router-dom"

const EditorUser = () => {
  return (
    <section>
      <h1>Editors Page</h1>
      <br />
      <p>You must have been assigned an Editor role.</p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default EditorUser
