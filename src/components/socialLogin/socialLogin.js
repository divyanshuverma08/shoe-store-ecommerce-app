import React from 'react'
import Image from 'next/image'
import styles from "./socialLogin.module.css"
import Link from 'next/link'
import { environment } from '@/lib/environment'

export default function SocialLogin() {
  return (
    <div className={styles.socialLogin}>
    <Link href={`${environment.SERVER_URL}/api/v1/auth/google`} className={styles.loginProvider}>
      <div className={styles.loginProviderImg}>
        <Image src="/google_login.svg" fill alt="google login" />
      </div>
    </Link>
    <div className={styles.loginProvider}>
      <div className={styles.loginProviderImg}>
        <Image src="/apple_login.svg" fill alt="apple login" />
      </div>
    </div>
    <Link href={`${environment.SERVER_URL}/api/v1/auth/facebook`} className={styles.loginProvider}>
      <div className={styles.loginProviderImg}>
        <Image src="/facebook_login.svg" fill alt="facebook login" />
      </div>
    </Link>
  </div>
  )
}
