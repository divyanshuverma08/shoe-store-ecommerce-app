import React from "react";
import Link from "next/link";
import styles from "./register.module.css";
import KicksClub from "@/components/kicksClub/kicksClub";
import SocialLogin from "@/components/socialLogin/socialLogin";
import RegisterForm from "./components/registerForm";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerLeft}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Register</h1>
          <div className={styles.headerLink}>
            <Link href="/login">Already have an account ?</Link>
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Sign up with</p>
          <SocialLogin />
        </div>
        <p className={styles.sectionTitle}>OR</p>
        <RegisterForm />
      </div>
      <div className={styles.registerRight}>
        <KicksClub />
      </div>
    </div>
  );
}
