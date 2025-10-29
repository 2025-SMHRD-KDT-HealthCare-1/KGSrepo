import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useState, useRef} from 'react'

const Login = () => {

  // 사용자가 입력한 ID : smhrd, Pw : 123
  // 일때만 Home으로 이동
  // 둘중 하나라도 다르다면 '잘못 입력했습니다.' 알림 출력

  const inputIdRef = useRef();
  const inputPwRef = useRef();

  const nav = useNavigate();

  const idd = 'smhrd'
  const pww = '123'

  const lgnbtn = () =>{
    let inputId = inputIdRef.current.value;
    let inputPw = inputPwRef.current.value;
    if(inputId === idd && inputPw === pww){
      nav('/')
    }
    else{
      alert('잘못 입력햇슴다')
    }
  }

  return (
    <div>
        <h1>Login Page</h1>
        <p>ID : <input ref={inputIdRef}></input></p>
        <p>PW : <input ref={inputPwRef}></input></p>
        {/* <Link to='/'><button>로그인</button></Link> */}
        <button onClick={lgnbtn}>로그인</button>
    </div>
  )
}

export default Login