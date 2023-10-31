"use client";

import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Input from "@/components/input/input";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, logout } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { profile } from "@/lib/services/profile";
import Link from "next/link";
import toast from "react-hot-toast";
import { environment } from "@/lib/environment";
import PreviousOrder from "@/components/previousOrder/previousOrder";
import { order } from "@/lib/services/order";

export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.auth.currentUser);

  const [hasPassword, setHasPassWord] = useState(false);

  const [orders, setOrders] = useState(null);

  const [socialAuth, setSocialAuth] = useState({
    google: "",
    facebook: "",
  });

  const [email, setEmail] = useState("");

  const [accountInfo, setAccountInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const [changePassword, setChangePassword] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleAccountInfoChange = (e) => {
    const { name, value } = e.target;

    setAccountInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;

    setChangePassword((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
    getUserInfo();
    getUserOrders();

    const urlSearchString = window.location.search;
    const searchParams = new URLSearchParams(urlSearchString);

    const googleLink = searchParams.get("googlelink");
    const facebookLink = searchParams.get("facebooklink");
    const payment = searchParams.get("payment");

    if (googleLink === "false") {
      toast.error("Google account is already linked with other user");
      router.replace("/profile");
      return;
    }

    if (googleLink === "true") {
      toast.success("Google account linked successfully");
      router.replace("/profile");
      return;
    }

    if (facebookLink === "false") {
      toast.error("Facebook account is already linked with other user");
      router.replace("/profile");
      return;
    }

    if (facebookLink === "true") {
      toast.success("Facebook account linked successfully");
      router.replace("/profile");
      return;
    }

    if (payment === "true") {
      toast.success("Payment Successfull");
      router.replace("/profile");
      return;
    }

    if (payment === "false") {
      toast.error("Payment failed");
      router.replace("/profile");
      return;
    }
  }, []);

  const updateStates = (response) => {
    dispatch(
      updateUser({
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      })
    );
    setAccountInfo({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
    });
    setEmail(response.data.email);
    setSocialAuth({
      google: response.data.google?.email,
      facebook: response.data.facebook?.email,
    });
  };

  const getUserInfo = async () => {
    try {
      const response = await profile.getUser({ id: user.id, auth: true });

      updateStates(response);
      setHasPassWord(response.data.passwordAssigned);
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const getUserOrders = async () => {
    try {
      const response = await order.getOrderByUser({ id: user.id, auth: true });

      setOrders(response.data);
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const updateAccountInfo = async () => {
    try {
      const response = await profile.updateUser({
        id: user.id,
        data: {
          firstName: accountInfo.firstName,
          lastName: accountInfo.lastName,
        },
        auth: true,
      });

      updateStates(response);
      toast.success("Account Info updated");
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const updateEmail = async () => {
    try {
      const response = await profile.updateUser({
        id: user.id,
        data: {
          email: email,
        },
        auth: true,
      });

      updateStates(response);
      toast.success("Email updated");
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const updatePassword = async () => {
    const { password, newPassword, confirmPassword } = changePassword;

    if (!password || !newPassword || !confirmPassword) {
      toast.error("All password fields are mandatory");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and Confirm Password should be same");
      return;
    }

    const passwordRegex = new RegExp(
      "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$"
    );

    if (!passwordRegex.test(newPassword)) {
      toast.error("Enter a valid password");
      return;
    }

    try {
      const response = await profile.updatePassword({
        data: {
          password: password,
          newPassword: newPassword,
        },
        auth: true,
      });

      setChangePassword({
        password: "",
        newPassword: "",
        confirmPassword: "",
      });

      toast.success("Password updated");
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const createPassword = async () => {
    const { newPassword, confirmPassword } = changePassword;

    if (!newPassword || !confirmPassword) {
      toast.error("All password fields are mandatory");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and Confirm Password should be same");
      return;
    }

    const passwordRegex = new RegExp(
      "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$"
    );

    if (!passwordRegex.test(newPassword)) {
      toast.error("Enter a valid password");
      return;
    }

    try {
      const response = await profile.createPassword({
        data: {
          password: newPassword,
        },
        auth: true,
      });

      if (response.success === true) {
        toast.success("Password created");
        setHasPassWord(true);
      } else {
        toast.error("Password not created");
      }

      setChangePassword({
        password: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("user", null);
    router.push("/login");
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileDetails}>
        <div className={styles.section}>
          <div className={styles.sectionHeaderContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeaderTitle}>User Details</h2>
              <p className={styles.sectionHeaderContent}>
                You can update your profile here
              </p>
            </div>
            <div className={styles.logOutButton} onClick={handleLogout}>
              Logout
            </div>
          </div>
          <div className={styles.sectionInputs}>
            <div className={styles.emailUpdateContainer}>
              <Input
                name={"email"}
                className={styles.sectionInput}
                placeholder={"Email"}
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                style={{ opacity: user?.email !== email ? 1 : 0.5 }}
                disabled={user?.email === email}
                className={styles.updateButton}
                onClick={updateEmail}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>Update Account Info</h2>
          </div>
          <div className={styles.sectionInputs}>
            <Input
              name={"firstName"}
              className={styles.sectionInput}
              placeholder={"First Name"}
              type={"text"}
              value={accountInfo.firstName}
              onChange={handleAccountInfoChange}
            />
            <Input
              name={"lastName"}
              className={styles.sectionInput}
              placeholder={"Last Name"}
              type={"text"}
              value={accountInfo.lastName}
              onChange={handleAccountInfoChange}
            />
            <button
              className={styles.updateButton}
              style={{
                opacity:
                  user?.firstName !== accountInfo.firstName ||
                  user?.lastName !== accountInfo.lastName
                    ? 1
                    : 0.5,
              }}
              disabled={
                user?.firstName === accountInfo.firstName &&
                user?.lastName === accountInfo.lastName
              }
              onClick={updateAccountInfo}
            >
              Update
            </button>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>
              {hasPassword ? "Change Password" : "Set Password"}
            </h2>
          </div>
          <div className={styles.sectionInputs}>
            {hasPassword && (
              <Input
                name={"password"}
                className={styles.sectionInput}
                placeholder={"Current Password"}
                type={"password"}
                value={changePassword.password}
                onChange={handleChangePassword}
              />
            )}
            <div className={styles.inputContainer}>
              <Input
                name={"newPassword"}
                className={styles.sectionInput}
                placeholder={"New Password"}
                type={"password"}
                value={changePassword.newPassword}
                onChange={handleChangePassword}
              />
              <p>
                Minimum 8 characters with at least one uppercase, one lowercase,
                one special character and a number
              </p>
            </div>
            <Input
              name={"confirmPassword"}
              className={styles.sectionInput}
              placeholder={"Confirm Password"}
              type={"password"}
              value={changePassword.confirmPassword}
              onChange={handleChangePassword}
            />
            <button
              className={styles.updateButton}
              onClick={hasPassword ? updatePassword : createPassword}
            >
              Change
            </button>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>Linked Accounts</h2>
          </div>
          <div className={styles.sectionInputs}>
            <div className={styles.linkedAccount}>
              <div className={styles.loginProvider}>
                <div className={styles.loginProviderImg}>
                  <Image src="/google_login.svg" fill alt="google login" />
                </div>
                <div className={styles.linkedAccountContainer}>
                  <h3>Google</h3>
                  <p>Log in with Google.</p>
                </div>
              </div>
              <div className={styles.linkButton}>
                {socialAuth.google ? (
                  <Link href="/" className={`${styles.link} ${styles.unlink}`}>
                    Unlink
                  </Link>
                ) : (
                  <Link
                    href={`${environment.SERVER_URL}/api/v1/auth/google/link/user/${user?.id}`}
                    className={styles.link}
                  >
                    Link
                  </Link>
                )}
              </div>
            </div>
            <div className={styles.linkedAccount}>
              <div className={styles.loginProvider}>
                <div className={styles.loginProviderImg}>
                  <Image src="/facebook_login.svg" fill alt="facebook login" />
                </div>
                <div className={styles.linkedAccountContainer}>
                  <h3>Facebook</h3>
                  <p>Log in with Facebook.</p>
                </div>
              </div>
              <div className={styles.linkButton}>
                {socialAuth.facebook ? (
                  <Link href="/" className={`${styles.link} ${styles.unlink}`}>
                    Unlink
                  </Link>
                ) : (
                  <Link
                    href={`${environment.SERVER_URL}/api/v1/auth/facebook/link/user/${user?.id}`}
                    className={styles.link}
                  >
                    Link
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderDetails}>
        {orders?.map((order) => (
          <PreviousOrder
            key={order._id}
            id={order._id}
            items={order.items}
            deliveryType={order.deliveryType}
            amount={order.amount}
            paymentStatus={order.paymentStatus}
          />
        ))}
      </div>
    </div>
  );
}
