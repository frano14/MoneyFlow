import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInitial } from "../redux/slices/userSlice";

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInitial());
    localStorage.removeItem("JWT_TOKEN");
    navigate("/");
  };

  return (
    <button className="bg-red-600 text-white mt-12" onClick={handleSubmit}>
      Logout
    </button>
  );
};

export default LogoutButton;
