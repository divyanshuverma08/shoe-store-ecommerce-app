import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import KicksClub from "@/components/kicksClub/kicksClub";
import SocialLogin from "@/components/socialLogin/socialLogin";
import LoginForm from "./components/loginForm";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginLeft}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Login</h1>
          <div className={styles.headerLink}>
            <Link href="/forgot-password">Forgot your password?</Link>
            <span> Or </span>
            <Link href="/register">{`Don't have a account ?`}</Link>
          </div>
        </div>
        <LoginForm />
        <SocialLogin />
        <p className={styles.terms}>
          By clicking {`'Log In'`} you agree to our website KicksClub{" "}
          <span>Terms & Conditions</span>, <span>Kicks Privacy Notice</span> and{" "}
          <span>Terms & Conditions</span>.
        </p>
      </div>
      <div className={styles.loginRight}>
        <KicksClub />
      </div>
    </div>
  );
}
