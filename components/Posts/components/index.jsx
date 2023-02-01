import PostsGrid from "./PostsGrid/PostsGrid";
import classes from './posts.module.css'
const Posts = ({posts}) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts}/>
        </section>
    );
};

export default Posts;
