import { useState } from "react"

function useTime() {
  let [time, setTime] = useState(10)

  // setTimeout(() => {
  //   setTime(--time)
  // }, 1000)
  
  return [time, setTime]
}

export default function Countdown() {
  let [time] = useTime()

  return (
    <div>
      {time}
    </div>
  )
}