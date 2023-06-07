import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`w-full max-w-[1280px] px-5 mx-auto md:px-10 ${className || ""}`}>
        {children}
    </div>
  )
}

export default Wrapper