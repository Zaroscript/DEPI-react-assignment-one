import React, { Component } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./categories.css";

class CategoryCard extends Component {
  render() {
    const { title, offers, link, icon, isDropdown, dropdownItems } = this.props;

    return (
      <div className="text-center">
        {isDropdown ? (
          <>
            <div className="dropdown">
              <button
                className="dropdown-toggle border-0 btn-outline-0 mx-auto bg-transparent fs-5"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {title}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {dropdownItems.map((item, idx) => (
                  <li key={idx}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="category">
            <h5>{title}</h5>
            <span className="offers d-flex align-items-center justify-content-center gap-1">
              <FontAwesomeIcon icon={faBookmark} />
              <span>{offers}</span> offers
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default CategoryCard;
