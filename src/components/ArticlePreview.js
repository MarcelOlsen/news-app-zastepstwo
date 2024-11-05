import styles from "@/styles/components/ArticlePreview.module.css";
import Link from "next/link";

export default function ArticlePreview({i, data}) {

    //Zadanie 3: Poproawiamy style komponentu ArticlePreview
    //1. Wyświetlamy zdjęcvie o stałej wysokości 300px i dostosowujemy szerokość automatycznie
    //2. Dodajemy tytuł artykułu
    //3. Dodajemy opis artykułu
    //4. Dodajemy autora artykułu
    //5. Zamykamy komponent w boxie na szarym tle i z zaokrąglonymi rogami
    return (
        <div className={styles.container} key={i}>
            <div className={styles.leftBox}>
            <img className={styles.image} src={data.urlToImage} alt={data.title}/>
            </div>
            <div className={styles.rightBox}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.description}>{data.description}</p>
                <p className={styles.author}>{data.author}</p>
                <Link href={`/articles/${i}`}>Artykuł</Link>
            </div>
        </div>
    );
}