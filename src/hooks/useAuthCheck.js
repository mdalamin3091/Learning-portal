import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../features/auth/authSlice";

export const useAuthCheck = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          loggedInUser({
            accessToken: auth?.accessToken,
            user: auth?.user,
          })
        );
      }
    }
    setChecked(true);
  }, []);
  return checked;
};
