import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.sideBox}>
            <div className={styles.content}>
              <p className={styles.title}>
                Join our KicksPlus Club & get 15% off
              </p>
              <p className={styles.desc}>
                Sign up for free! Join the community.
              </p>
            </div>
            <div className={styles.email}>
              <input
                className={styles.emailInput}
                type="text"
                placeholder="Email address"
              />
              <button className={styles.emailButton}>Submit</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.logo}>
            <Image src="/footer-logo.svg" fill alt="logo" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footerInfo}>
          <div className={styles.about}>
            <p className={styles.aboutTitle}>About us</p>
            <p className={styles.aboutDesc}>
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div className={styles.linkContainer}>
            <div className={styles.linkBox}>
              <p className={styles.linkTitle}>Categories</p>
              <div className={styles.links}>
                <Link href="/" className={styles.link}>
                  Runners
                </Link>
                <Link href="/" className={styles.link}>
                  Sneakers
                </Link>
                <Link href="/" className={styles.link}>
                  Basketball
                </Link>
                <Link href="/" className={styles.link}>
                  Outdoor
                </Link>
                <Link href="/" className={styles.link}>
                  Golf
                </Link>
                <Link href="/" className={styles.link}>
                  Hiking
                </Link>
              </div>
            </div>
            <div className={styles.linkBox}>
              <p className={styles.linkTitle}>Company</p>
              <div className={styles.links}>
                <Link href="/" className={styles.link}>
                  About
                </Link>
                <Link href="/" className={styles.link}>
                  Contact
                </Link>
                <Link href="/" className={styles.link}>
                  Blogs
                </Link>
              </div>
            </div>
            <div className={styles.linkBox}>
              <p className={styles.linkTitle}>Follow us</p>
              <div className={styles.linksSocial}>
                <Link href="/" className={styles.linkSocial}>
                  <Image src="/facebook.svg" alt="facebook" fill />
                </Link>
                <Link href="/" className={styles.linkSocial}>
                  <Image src="/instagram.svg" alt="instagram" fill />
                </Link>
                <Link href="/" className={styles.linkSocial}>
                  <Image src="/twitter.svg" alt="twitter" fill />
                </Link>
                <Link href="/" className={styles.linkSocial}>
                  <Image src="/tiktok.svg" alt="tiktok" fill />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomLogo}>
          <div className={styles.logoContainer}>
            <Image src="/Group.svg" fill alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
