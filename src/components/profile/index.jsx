import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo1 from "../../accsets/img/logo1.png";
import logo2 from "../../accsets/img/logo2.png";
import { getTags } from "../store/funtion";

import "./style.css";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags());
  });

  return (
    <div className="profile">
      <div className="profileContainer">
        <div className="profileSidebar">
          <div className="profileIcon">
            <img src={logo1} alt="" style={{ paddingRight: "9px" }} />
            <img src={logo2} alt="" />
          </div>
          <p>Posts</p>
          <p>Logout</p>
        </div>

        <div className="profileTable">
          <div className="profileTableHeader">
            <div>
              <button className="profileButton">Add new</button>
            </div>
            <div>
              <input
                placeholder="title"
                style={{ marginRight: "43px" }}
                className="profileInput"
              />

              <input placeholder="Tags" className="profileInput" />
            </div>
          </div>

          <table className="profileTableContent">
            <thead>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <td>
                <th>1</th>
              </td>
              <td>
                <th>1</th>
              </td>
              <td>
                <th>1</th>
              </td>
              <td>
                <th>1</th>
              </td>
              <td>
                <th>1</th>
              </td>
            </tbody>
          </table>
          <button>Phần phân trang</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
