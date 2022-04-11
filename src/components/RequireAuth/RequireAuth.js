import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthUser } from "../../App";

const RequireAuth = ({ children }) => {
	const [user] = useContext(AuthUser);
	const location = useLocation();

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
