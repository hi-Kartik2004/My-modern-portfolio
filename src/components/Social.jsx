import React from 'react'
import { SiHtml5 } from 'react-icons/si'

const Social = () => {
  return (
<div className="social flex gap-4 items-center">
        <div className="logo border p-2 rounded-xl image-bg-color ">
          <SiHtml5 />
        </div>
        <div>
          <label htmlFor="github" className="text-xs">Github</label>
          <h4 className="text-sm">hi-Kartik2004</h4>
        </div>
      </div>
  )
}

export default Social