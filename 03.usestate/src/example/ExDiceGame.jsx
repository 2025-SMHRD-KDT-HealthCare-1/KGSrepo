import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react';


const ExDiceGame = () => {

    // 1. 버튼 클릭시 주사위 이미지 랜덤하게 변경(둘다)

    // 2. 주사위의 숫자를 비교 > 더큰 Score 값을 +1 증가

    // 3. score 값이 먼저 10에 도달한 결과를 출력
    //      >> 'User 승리' or 'COM 승리'


    const[ranNum1, setRanNum1] = useState(1);
    const[ranNum2, setRanNum2] = useState(1);

    const[comScore, setComScore] = useState(0);
    const[userScore, setUserScore] = useState(0);

    const[gameResult, setGameResult] = useState(0);

    const startBtn = () =>{
        let ranComNum = parseInt(Math.random()*6)+1
        setRanNum1(ranComNum);
        let ranUserNum = parseInt(Math.random()*6)+1
        setRanNum2(ranUserNum);

        if (ranComNum>ranUserNum){
            setComScore(comScore + 1)
        }
        else if(ranComNum<ranUserNum){
            setUserScore(userScore + 1)
        }     
    }


    // Mount + Update
        useEffect(()=>{
          if(comScore>9){
            setGameResult('컴퓨터 승리')
        }
        else if(userScore>9){
            setGameResult('인간 승리')
        }
        })

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startBtn}>Start</button>

      <div >
        <img src={`./src/img/Dice${ranNum1}.png`}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={`./src/img/Dice${ranNum2}.png`}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {gameResult}</h1>
    </div>
  )
}


export default ExDiceGame