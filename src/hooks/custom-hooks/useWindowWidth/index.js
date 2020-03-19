import React, { useState, useEffect } from 'react'

export default function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    console.log('useWindowWidth..');
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
  })
  return width
}