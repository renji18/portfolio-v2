import React from "react"
import "./square-up-down-empty-black.css"
import "./translated-progress.css"
import "./moon.css"
import "./3d-cubes.css"
import "./fingers.css"

export default function Loader() {
  return (
    <div id="loader" className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-slate-50 opacity-100 transition-all ease-linear duration-500">
      <div class="cssload-loading">
        <div class="cssload-finger cssload-finger-1">
          <div class="cssload-finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="cssload-finger cssload-finger-2">
          <div class="cssload-finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="cssload-finger cssload-finger-3">
          <div class="cssload-finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="cssload-finger cssload-finger-4">
          <div class="cssload-finger-item">
            <span></span>
            <i></i>
          </div>
        </div>
        <div class="cssload-last-finger">
          <div class="cssload-last-finger-item">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default function 3D-cubes() {
//   return (
//     <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-slate-400">
//       <div class="cssload-tetrominos">
//         <div class="cssload-tetromino cssload-box1"></div>
//         <div class="cssload-tetromino cssload-box2"></div>
//         <div class="cssload-tetromino cssload-box3"></div>
//         <div class="cssload-tetromino cssload-box4"></div>
//       </div>
//     </div>
//   )
// }

// export default function moon() {
//   return (
//     <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-slate-400">
//       <div class="cssload-container">
//         <div class="cssload-item cssload-moon"></div>
//       </div>
//     </div>
//   )
// }

// export default function TranslatedProgress() {
//   return (
//     <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-white">
//       <div class="cssload-container">
//         <div class="cssload-progress cssload-float cssload-shadow">
//           <div class="cssload-progress-item"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function SUDEB() {
//   return (
//     <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-white">
//       <span class="cssload-loader"><span class="cssload-loader-inner"></span></span>
//     </div>
//   )
// }
