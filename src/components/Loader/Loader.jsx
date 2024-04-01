import React from "react"
import "./loader.css"

export default function Loader() {
  return (
    <div
      id="loader"
      className="fixed z-0 flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-slate-50 opacity-100 transition-all ease-linear duration-500"
    >
      <div class="cssload-tetrominos">
        <div class="cssload-tetromino cssload-box1"></div>
        <div class="cssload-tetromino cssload-box2"></div>
        <div class="cssload-tetromino cssload-box3"></div>
        <div class="cssload-tetromino cssload-box4"></div>
      </div>
    </div>
  )
}
