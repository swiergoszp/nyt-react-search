import React from "react";

const Saved = props => {
  return (
      <div className="container">
        <li className="list-group-item">
          <h4>
            <span>
              <em>{props.title}</em>
            </span>
            <span className="btn-group pull-right">
              <a href={props.url}>
                <button className="btn btn-warning ">View Article</button>
              </a>
              <button className="btn btn-warning" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
            </span>
          </h4>
          <p>Date Published: {props.date}</p>
        </li>
      </div>
  )
}

export default Saved;
