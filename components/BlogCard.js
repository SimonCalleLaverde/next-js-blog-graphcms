import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import Image from "next/image";
import moment from "moment";

// BlogCard Component
export default function BlogCard({ coverPhoto, title, content, author, datePublished, slug }) {
	return (
		<article className={styles.card}>
			<Link href={`/posts/${slug}`}>
				<div className={styles.imgWrapper}>
					{/*<img src={coverPhoto.url} alt=""/>*/}
					<Image src={coverPhoto.url} alt="" layout="fill"/>{/* Must use "width" & "height" properties or "layout='fill'" property */}
				</div>
			</Link>

			<div className={styles.caption}>
				<h2>{title}</h2>

				<div className={styles.details}>
					<div className={styles.author}>
						<img src={author.avatar.url} alt={author.name}/>
						<h3>{author.name}</h3>
					</div>

					<div className={styles.date}>
						{/*<h3>{datePublished}</h3>*/}
						{/*<h3>{moment(datePublished).format("MMMM d, YYYY")}</h3>*/}
						{/*<h3>{moment(datePublished).format("MMMM Do, YYYY")}</h3>*/}
						<h3>{moment(datePublished).format("MMMM D, YYYY")}</h3>
					</div>
				</div>
			</div>
		</article>
	)
};