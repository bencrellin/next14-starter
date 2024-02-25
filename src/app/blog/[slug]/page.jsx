import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {

//   // {cache: "no-store"} is used to prevent caching
//   // {next:{revalidate:3600}} is used to revalidate the data every 3600 seconds
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  //const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
   const post = await getPost(slug);

  return (
    <div className={styles.container}>
      
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              <h1>01.01.2024</h1>
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage