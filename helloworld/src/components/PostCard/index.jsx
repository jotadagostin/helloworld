import MainButton from "components/MainButton";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";


export default function PostCard( { post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={}>

            </div>
        
        </Link>
    )
}