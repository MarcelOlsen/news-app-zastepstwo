import styles from "@/styles/components/ArticlePreview.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ArticlePreview({i, data}) {

    //Zadanie 2: Wyświetl tytuł, opis, autora i obrazek artykułu
    return (
        <div className={styles.container} key={i}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.author}</p>
            <img src={data.urlToImage} alt={data.title} width={200} height={200} />
        </div>
    );
}