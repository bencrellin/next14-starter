
// TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "......", userId: 1 },
  { id: 2, title: "Post 2", body: "......", userId: 1 },
  { id: 3, title: "Post 3", body: "......", userId: 2 },
  { id: 4, title: "Post 4", body: "......", userId: 2 },
];

export const getPosts = async () => {
    
    return posts;
    // try {
    //   connectToDb();
    //   const posts = await Post.find();
    //   return posts;
    // } catch (err) {
    //   console.log(err);
    //   throw new Error("Failed to fetch posts!");
    // }
};

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    return post;
    
    // try {
    //   connectToDb();
    //   const post = await Post.findOne({ slug });
    //   return post;
    // } catch (err) {
    //   console.log(err);
    //   throw new Error("Failed to fetch post!");
    // }
};
  
export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));

    // noStore();
    // try {
    //   connectToDb();
    //   const user = await User.findById(id);
    //   return user;
    // } catch (err) {
    //   console.log(err);
    //   throw new Error("Failed to fetch user!");
    // 
};