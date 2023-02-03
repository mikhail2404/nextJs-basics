import Hero from "../components/Hero/Hero";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import {getFeaturedPosts} from "../helpers/posts-utils";
import Head from "next/head";


const HomePage = ({posts}) => {
    return (
        <>
            <Head>
                <title>Welcome to Blog</title>
                <meta name="description" content="I post about programming and web development" />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts}/>
        </>
    );
};


export  function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    console.log('getStaticProps')
    return {props: {posts: featuredPosts}}
}
export default HomePage;
