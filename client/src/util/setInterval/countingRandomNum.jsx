import React, {useState} from 'react'

function countingRandomNum(sec, num) {
  const [count, setCount] = useState(0)
  const randomNum = Math.floor(Math.random()*10);
  
  const callback = () => {
    setCount(randomNum + num);
  }
  
  setInterval(callback, sec);

  return count;
}

export default countingRandomNum
