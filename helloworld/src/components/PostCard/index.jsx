import MainButton from "components/MainButton";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.cover}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="cover picture"
        />
        <h2 className={styles.title}>{post.title}</h2>

        <MainButton>Read</MainButton>
      </div>
    </Link>
  );
}
