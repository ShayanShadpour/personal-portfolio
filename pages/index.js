/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import profile from "../public/images/profile.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shayan Shadpour</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.pictureContainer}>
          <Image
            className={styles.profile}
            src={profile}
            alt="Picture of Shayan"
            layout="intrinsic"
          />
        </div>
        <h1 className={styles.title}>Hello!</h1>

        <p className={styles.description}>
          I&apos;m an aspiring  and passionate front-end web developer from southern Canada.
        </p>

        <div>
          <a href="/files/ShayanShadpour_Resume.pdf" alt="alt text" target="_blank" rel="noopener noreferrer">          
          <button className={styles.custombtn}> 
            Resume
          </button>
          </a>
          
          <Link href="/contact">
            <button className={styles.custombtn}>Hire me!</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
