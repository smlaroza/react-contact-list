import React from "react"
import users from "./user"
import { Link } from "react-router-dom"

function Home(props) {
  return (
    <div class="container">
      <ul>
        <header>My Peeps</header>
        {users.map((user) => (
          <li className="names" key={"user-tab" + user.id}>
            <Link to={"/contact/" + user.id}>
              <img className="tlimg" src={user.picture.thumbnail} />
              {user.name.first} {user.name.last}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
