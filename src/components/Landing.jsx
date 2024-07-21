import React from "react"
import html from "../assets/html.svg"
import js from "../assets/javascript.svg"
import css from "../assets/css.svg"

const Landing = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-9xl font-semibold text-darkGreenish">
      <img
        className="h-40 w-40 absolute top-20 left-10 -rotate-45"
        src={html}
        alt=""
      />
      <img
        className="h-40 w-40 absolute top-[20rem] right-14 rotate-45"
        src={js}
        alt=""
      />
      <img
        className="h-40 w-40 absolute top-[30rem] left-14 rotate-45"
        src={css}
        alt=""
      />
      <p className="font-sriracha">Hi. I'm Aadarsh.</p>
      <p className="font-sriracha">A Developer.</p>
      <p className="text-xl mt-14 tracking-wide w-2/5 leading-relaxed text-lightGreenish text-center">
        From concept to execution, I'm your go-to for turning ideas into
        pixel-perfect applications.
      </p>
    </div>
  )
}

export default Landing
