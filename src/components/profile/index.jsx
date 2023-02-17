import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo1 from "../../accsets/img/logo1.png";
import logo2 from "../../accsets/img/logo2.png";
import { getTags } from "../store/funtion";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags());
  });

  return (
    <div className="profile">
      <div className="profileContainer">
        <div className="profileSidebar">
          <div className="icon">
            <img src={logo1} alt="" style={{ paddingRight: "9px" }} />
            <img src={logo2} alt="" />
            <p>Posts</p>
            <p>Logout</p>
          </div>
        </div>

        <div className="profileTable">
          <button>Add new</button>
          <input placeholder="title" />
          <input placeholder="Tags" />

          <table>
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
        </div>
      </div>
      <button>Phần phân trang</button>
    </div>
  );
};

export default Profile;
