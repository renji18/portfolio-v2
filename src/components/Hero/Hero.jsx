import React from "react"
import HiImg from "../../assets/hiImg.svg"

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Aadarsh Jha</p>
        <button className="border py-3 text-lg px-8 rounded-full">
          Say Hello
        </button>
      </div>
      <div className="px-20 h-[80vh] gap-10 flex flex-col -mt-2 justify-center text-center">
        <p className="font-[500] text-[3.2rem]">
          building the <span className="font-bold">Web</span> & shaping{" "}
          <span className="font-bold">Mobile</span> realms
        </p>
        <p className="text-[1.6rem] leading-snug px-56 tracking-wide">
          From concept to execution,{" "}
          <button className="bg-rose-600 hover:bg-white border-2 border-rose-600 transition-all ease-linear duration-300 italic font-bold tracking-wider text-2xl px-4 py-2 animate-bounce-slow rounded-md text-white hover:text-rose-600">
            I'm your go-to
          </button>{" "}
          for turning ideas into pixel-perfect websites and intuitive mobile
          applications.
        </p>
        <img className="h-56" src={HiImg} alt="hi img" />
      </div>
    </div>
  )
}

export default Hero
