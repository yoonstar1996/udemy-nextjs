import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <>
        <Link className={classes.btn} href={props.link}>
          {props.children}
        </Link>
      </>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
