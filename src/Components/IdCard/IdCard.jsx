import React from 'react'

import "./IdCard.css"

function idCard(props) {
    console.log(props);
  return (
    <div>
      <div className="container">
        <div>
          <img className="img" src={props.picture} alt="" />
        </div>
        <ul>
          <li>
            {' '}
            <b>First name:</b> {props.firstName}
          </li>
          <li>
            <b>Last name:</b> {props.lastName}
          </li>
          <li>
            <b>Gender:</b> {props.gender}
          </li>
          <li>
            <b>Height:</b> {props.height}
          </li>
          <li>
            <b>Birth:</b> {props.date}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default idCard