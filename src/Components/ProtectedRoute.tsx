import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/authContext";

export const ProtectedRoute = () => {
    const { userLoggedIn, loading } = useAuth();
    const location = useLocation();

    if (loading){
        return <div>Loading...</div>
    }

    if (!userLoggedIn) {
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return <Outlet />
}