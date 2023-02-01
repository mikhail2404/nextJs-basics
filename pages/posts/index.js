import Posts from "../../components/Posts/components";
import {getAllPosts} from "../../helpers/posts-utils";
import Head from "next/head";

const PostsPage = ({posts}) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts!"/>
            </Head>
            <Posts posts={posts}/>
        </>
    );
};


export  function getStaticProps() {
    const allPosts = getAllPosts()
    return {props: {posts: allPosts}}
}
export default PostsPage;
