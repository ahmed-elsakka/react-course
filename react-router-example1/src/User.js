import { NavLink, Outlet, useParams } from "react-router-dom";

function User() {
    const params = useParams();
  return (
    <div>
      <h1>User ID: {params.id}</h1>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="settings">Settings</NavLink>

      <Outlet />
    </div>
  );
}

export default User;