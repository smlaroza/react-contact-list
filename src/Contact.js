import React from "react"
import users from "./user"

function Contact(props) {
  const id = props.match.params.id

  const user = users.find((user) => user.id == id)

  return (
    <div class="contactpage">
      {" "}
      <div class="arrow">&#8592;</div>
      <div class="contactimg">
        <img src={user.picture.large} />
      </div>
      <div class="userinfo">
        <p>
          {user.name.first} {user.name.last}
        </p>
        <p>{user.email}</p>
        <p>{user.cell}</p>
        <p>
          {user.location.city},{user.location.state}
        </p>
      </div>
    </div>
  )
}

export default Contact
