import PostContent from "../../components/Posts/components/PostDetail/PostContent/PostContent";
import {getPostData, getPostsFiles} from "../../helpers/posts-utils";
import Head from "next/head";

const PostDetailPage = ({post}) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent post={post}/>
        </>
    );
};


export function getStaticProps({params}) {
    const {slug} = params

    const postData = getPostData(slug)

    return {props: {post: postData}, revalidate: 600}
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({params: {slug}})),
        fallback: false
    }
}
export default PostDetailPage;
