import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'

const App = () => {

  const ref = useRef<any>()
  let [time,] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      // setTime(--time)
    }, 1000)
    ref.current = timer
  }, [time])

  const clearTimer = () => {
    console.log(ref)
    clearInterval(ref.current)
  }

  return (
    <Button onClick={clearTimer}>停止计时{time}</Button>
  )
}
export default App