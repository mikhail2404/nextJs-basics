import classes from "./featured-posts.module.css"
import PostsGrid from "../Posts/components/PostsGrid/PostsGrid";
const FeaturedPosts = ({posts}) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}/>
        </section>
    );
};

export default FeaturedPosts;
