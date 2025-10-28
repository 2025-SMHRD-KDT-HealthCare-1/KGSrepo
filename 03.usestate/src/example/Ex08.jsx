import React from 'react'
import pic from '../img/ggo.webp'
import {useState} from 'react'

const Ex08 = () => {

    const [mySrc, setSrc] = useState('./src/img/ggo.webp')
    const [pos, setPos] = useState(0);
    let imgs = ['./src/img/ggo.webp', './src/img/karina1.jpg', './src/img/zam.png']

    const chImg1 = () =>{
        if(pos==0){
            setPos(2)
        }
        else{
            setPos(pos-1)
        }
    }

    const chImg2 = () =>{
        if(pos==2){
            setPos(0)
        }
        else{
            setPos(pos+1)
        }
    }

  return (
    <div>
        <img src={imgs[pos]} style={{height:'300px'}}></img>
        <button onClick={chImg1}>이전</button>
        <button onClick={chImg2}>다음</button>
    </div>
  )
}

export default Ex08