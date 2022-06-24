import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

// BlogCard Component
export default function BlogCard({ coverPhoto, title, content, author, datePublished, slug }) {
	return (
		<article className={styles.card}>
			<Link href={"/posts/" + slug}>
				<div className={styles.imgWrapper}>
					{/* Could Use "Image" Component From Next.js */}
					<img src={coverPhoto.url} alt=""/>
				</div>
			</Link>

			<div className={styles.caption}>
				<h2>{title}</h2>

				<div className={styles.details}>
					<div className={styles.author}>
						<img src={author.avatar.url} alt=""/>
						<h3>{author.name}</h3>
					</div>

					<div className={styles.date}>
						<h3>{datePublished}</h3>
					</div>
				</div>
			</div>
		</article>
	)
};