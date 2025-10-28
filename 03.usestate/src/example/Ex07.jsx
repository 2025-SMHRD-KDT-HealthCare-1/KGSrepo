import React from 'react'
import {useState, useRef, useEffect} from 'react'

const Ex07 = () => {

  const[ranNum, setRanNum] = useState(parseInt(Math.random()*50)+1)
  const[hint, setHint] = useState('');
  const inputRef = useRef();
  const [chance, setChance] = useState(10);
  
  console.log(ranNum)

  const btnClick = () =>{
    let inputNum = inputRef.current.value

    if(ranNum>inputNum){
      setHint('UP')
      setChance(chance-1)
    }
    else if(ranNum<inputNum){
      setHint('DOWN')
      setChance(chance-1)
    }
    else{
      setHint('정답')
    }
  }

  useEffect(()=>{
    if(chance == 0){
      alert('기회없음');
    }
  },[chance])

  return (
    <div>
      <h1>1~50사이 랜덤수 맞추기</h1>
      <p>기회 : {chance}</p>
      <input ref={inputRef}></input>
      <button onClick={btnClick}>추측</button>
      <h1>{hint}</h1>
    </div>
  )
}

export default Ex07