import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";

// FETCH DATA WITH AN API
// {cache: "no-store"} is used to prevent caching
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//    if (!res.ok) {
//      throw new Error("Something went wrong");
//    }

//    return res.json();
// };

const PostUser = async ({userId}) => {

    // FETCH DATA WITH AN API
    //const user = await getData(userId);

    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    );
};

export default PostUser;