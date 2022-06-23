import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

// BlogCard Component
export default function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
	return (
		<div className={styles.card}>
			<Link href={"/posts/" + slug}>
				<div className={styles.imgWrapper}>
					{/* Could Use "Image" Component From Next.js */}
					<img src={coverPhoto.url} alt=""/>
				</div>
			</Link>
		</div>
	)
};