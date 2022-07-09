/* eslint-disable @next/next/no-img-element */
import Navbar from "./Navbar";

import GradientRight from "../assets/GradientRight";
import styles from './Layout.module.css';

type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {
  return (
    <>
      <GradientRight className={styles.background1} />
      <GradientRight className={styles.background2} />

      <Navbar />

      <main className={`${styles.mainContent}`}>{children}</main>

    </>
  );
}
