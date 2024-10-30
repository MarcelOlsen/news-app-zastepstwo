import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.leftBox}>
            <h1><Link href="/">Blog app</Link></h1>
        </div>
        <div className={styles.rightBox}>
            <ul className={styles.linkList}>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/articles/1">Article 1</Link></li>
            </ul>
        </div>
    </div>
  );
}