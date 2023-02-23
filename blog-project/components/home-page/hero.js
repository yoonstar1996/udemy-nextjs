import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/me.jpg"
            alt="An image showing Yoonstar"
            width={300}
            height={300}
          />
        </div>
        <h1>Hi, I'm Yoonstar</h1>
        <p>
          I blog about web development - especially fronted frameworks like
          Angular React.
        </p>
      </section>
    </>
  );
}
