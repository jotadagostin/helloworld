import "./Post.css";
import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "./components/PostModelo";
import ReactMarkdown from "react-markdown";
import NotFound from "pages/NotFound";
import StandardPage from "./components/StandardPage";
import Postcard from "./components/PostCard";

export default function Post() {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomended = posts
    .filter((post) => post.id !== Number(parameters.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<StandardPage />}>
        <Route
          index
          element={
            <PostModelo
              photoCover={`/assets/posts/${post.id}/capa.png`}
              title={post.title}>
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>

              <h2 className={styles.titleAnotherPost}>
                Another posts that you maybe like it
              </h2>

              <ul className={styles.postsRecomended}>
                {postsRecomended.map((post) => (
                  <li key={post.id}>
                    <Postcard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
