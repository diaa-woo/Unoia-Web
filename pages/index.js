import Head from 'next/head'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <>
    <Carousel showThumbs={false}>
      <div className='jb-wrap'>
        <img src='img1.jpeg' />
        <p className='jb-text'>순수 바닷물에서 분리한 수소를 이용하여<br/>움직이는 선박, OHE 선박</p>
      </div>
      <div>
        <img src='img2.jpeg' />
        <p className='jb-text'>순수 바닷물에서 분리한 수소를 이용하여<br/>움직이는 선박, <strong>OHE 선박</strong></p>
      </div>
    </Carousel>
    <div className='intro'>
        <div className='text'>
          <div className='intTitle'>Eunoia</div>
          <div className='intSub'>Eunoia는 OHE 선박이 어떤 선박인지,<br/>어떤 기술을 가졌는지를 알려줍니다.</div>
        </div>
        <ul>
          <li>
            <img src="introImg.png" className='introImg'/>
            <p>Introduction</p>
            <div>OHE 선박, 선박의<br/>외관, 내관 구조 소개</div>
          </li>
          <li>
            <img src="tecImg.png" className='tecImg'/>
            <p>Technology</p>
            <div>모터 / 속도 / 방향 제어,<br/>바닷물 수중 모터 제어</div>
          </li>
          <li>
            <img src="boardImg.png" className='boardImg'/>
            <p>bulletin board</p>
            <div>OHE 선박에 대한<br/>공지 사항 / Q&A</div>
          </li>
        </ul>
    </div>
    <style jsx>{`
    img{
      height: 400px;
    }
    .jb-text{
      position: absolute;
      top: 25%;
      left: 30%;
      color: black;
      font-weight: bold;
      font-size: 40px;
    }
    .intro{
      margin-top: 50px;
    }
    .text{
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .intTitle{
      font-size: 35px;
      font-weight: bold;
    }
    .intSub{
      color: #BEBDBD;
      margin-top: 30px;
      font-size: 20px;
    }
    ul{
      margin-top: 50px;
      padding-left: 200px;
      padding-right: 200px;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(33%, auto));
    }
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .introImg{
      width: 140px;
      height: 140px;
    }
    .tecImg{
      width: 140px;
      height: 140px;
    }
    .boardImg{
      width: 140px;
      height: 140px;
    }
    li p{
      font-size: 20px;
    }
    `}</style>
    </>
  )
}
