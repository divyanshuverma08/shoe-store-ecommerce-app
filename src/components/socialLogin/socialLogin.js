import React from 'react'
import Image from 'next/image'
import styles from "./socialLogin.module.css"

export default function SocialLogin() {
  return (
    <div className={styles.socialLogin}>
    <div className={styles.loginProvider}>
      <div className={styles.loginProviderImg}>
        <Image src="/google_login.svg" fill alt="google login" />
      </div>
    </div>
    <div className={styles.loginProvider}>
      <div className={styles.loginProviderImg}>
        <Image src="/apple_login.svg" fill alt="apple login" />
      </div>
    </div>
    <div className={styles.loginProvider}>
      <div className={styles.loginProviderImg}>
        <Image src="/facebook_login.svg" fill alt="google login" />
      </div>
    </div>
  </div>
  )
}
