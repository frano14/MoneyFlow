import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInitial } from "../redux/slices/userSlice";
import { setCardInitial } from "../redux/slices/cardSlice";

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInitial());
    dispatch(setCardInitial());
    localStorage.removeItem("JWT_TOKEN");
    navigate("/");
  };

  return (
    <button className="bg-red-600 text-white" onClick={handleSubmit}>
      Logout
    </button>
  );
};

export default LogoutButton;
