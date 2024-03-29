import classes from "./hero.module.css"
import Image from "next/image";
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/logo.jpg" alt="Author image" width={300} height={300}/>
            </div>
            <h1>Hi, I'm Mike</h1>
            <p>
                I blog about web development - especially frontend frameworks like Angular or React.
            </p>
        </section>
    );
};

export default Hero;
