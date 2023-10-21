"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/authSlice";
import toast from "react-hot-toast";

export default function SocailAuthProvider({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const urlSearchString = window.location.search;
    const searchParams = new URLSearchParams(urlSearchString);

    const valid = searchParams.get("valid");
    const email = searchParams.get("email");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const facebook = searchParams.get("facebook");
    const google = searchParams.get("google");
    const auth = searchParams.get("auth");

    if (valid) {
      const user = {
        email,
        firstName,
        lastName,
        token: valid,
      };

      dispatch(login(user));
      localStorage.setItem("user", JSON.stringify(user));
      return;
    }

    if (facebook === "false") {
      toast.error(
        "Email used in facebook. Already exist in another account.You can link this account with that account or link with any another account"
      );
      router.push("/login");
      return;
    }

    if(google === "false"){
        toast.error(
            "Email used in google. Already exist in another account.You can link this account with that account or link with any another account"
          );
          router.push("/login");
          return;
    }

    if(auth === "false"){
        toast.error(
            "Something went wrong..."
          );
          router.push("/login");
          return;
    }

  });
  return <>{children}</>;
}
