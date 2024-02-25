import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {

//     // {cache: "no-store"} is used to prevent caching
//     // {next:{revalidate:3600}} is used to revalidate the data every 3600 seconds
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});
  
//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }
  
//     return res.json();
// };

const BlogPage = async () => {

    // FETCH DATA WITH AN API
    // const posts = await getData();

    // FETCH DATA WITHOUT AN API
    const posts = await getPosts();

    return (
        <div className={styles.container}>
          {posts.map((post) => (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      );
}

export default BlogPage