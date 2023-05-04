import { Navigate,useLocation } from "react-router-dom";
import Todo from "../components/pages/Todo"

const Private = () => {

  const location=useLocation();

  if (!location.state.name&&!location.state.image) {
    return <Navigate to="/sign" replace />;
  }

  return <Todo/>;
};

export default Private;