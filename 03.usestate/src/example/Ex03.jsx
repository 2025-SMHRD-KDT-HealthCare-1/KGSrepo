import React, {useState} from 'react'

const Ex03 = () => {

    // 1. 버튼 클릭시 내가 선택한 숫자 출력
    // 2. 버튼 클릭시 1~3사이 랜덤 수 출력
    // 3. 사용자가 클릭한 숫자와 랜덤수를 비교 후 결과 출력

    const [myNum, setMyNum] = useState(0);
    const [comNum, setComNum] = useState(0);
    const [result, setResult] = useState('');

    const mN = (btnNum) =>{
        let RandNum = Math.floor(Math.random() * 3) + 1;
        setMyNum(btnNum)
        setComNum(RandNum)
        
        if(btnNum === RandNum){
        setResult('정답')
    }
        else{
            setResult('땡')
    }
    }


  return (
    <div>
        <button onClick={()=>mN(1)}>1</button>
        <button onClick={()=>mN(2)}>2</button>
        <button onClick={()=>mN(3)}>3</button>
        <div>
            <p>내가 입력한 숫자 : {myNum}</p>
            <p>컴퓨터 랜덤 숫자 : {comNum}</p>
            <p>결과 : {result}</p>
        </div>
    </div>
  )
}

export default Ex03