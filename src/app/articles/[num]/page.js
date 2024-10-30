import styles from "@/styles/page.module.css";

export default function Articles({ params}) {

    const { num } = params;

    return (
        <div className={styles.container}>
        <h1>Article {num}</h1>
        </div>
    );
}