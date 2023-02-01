import PostHeader from "../PostHeader/PostHeader";
import ReactMarkdown from "react-markdown";
import classes from './post-content.module.css'
import Image from "next/image";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"

SyntaxHighlighter.registerLanguage('js', js)
const PostContent = ({post}) => {
    const customComponents = {
        p : ({node, ...props}) =>  {
            if(props.children[0].type === 'img'){
                const image = props.children[0]
                return (
                    <div className={classes.image}>
                        <Image src={`/images/posts/${post.slug}/${image.props.src}`} alt={image.props.alt} width={600} height={300}/>
                    </div>
                )
            }
            return <p>{props.children}</p>
        },
        code: ({node, ...props}) => {
            return <SyntaxHighlighter style={atomDark} language={props.className.replace('language-', '')} children={props.children}/>
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={`/images/posts/${post.slug}/${post.image}`}/>
            <ReactMarkdown components={customComponents}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;
