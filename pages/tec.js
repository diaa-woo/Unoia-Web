import axios from "axios";
import { useState } from "react"
import awsIot from "aws-iot-device-sdk";
//import fs from 'fs';

export default function tec(){
    console.log(process.cwd())
    const fs = import('fs');
    var ca = fs.readFileSync("C:/Users/SW2148/project/Unoia-Web/pages/api/keys/AmazonRootCA1.pem");
    var key =  fs.readFileSync("C:/Users/SW2148/project/Unoia-Web/pages/api/keys/cert.pem.crt");
    var cert = fs.readFileSync("C:/Users/SW2148/project/Unoia-Web/pages/api/keys/privateKey.pem.key");
    const keys = {
        "ca": ca,
        "key": key,
        "cert": cert,
    };
    const [power, setPower] = useState(false);
    const [motor, setMotor] = useState(false);
    function powerOnOff(){
        console.log(power)
        setPower(!power);
        console.log(power);
    }
    function motorOnOff(){
        const ch = !motor
        setMotor(ch);
        console.log(motor);
    }
    function awsConnect() {
        let device = new awsIot.device({
            keyPath: keys.key,
            certPath: keys.cert,
            caPath: keys.ca,
            clientId: "Eunoia_shipDevice",
            host: "a8igl60f8s1mm-ats.iot.ap-northeast-2.amazonaws.com" 
         })
         
         const topic = "Eunoia-shipDevice/sub";
         
         device.on("connect", () => {
         
             console.log("connect");
         
             device.subscribe(topic);
         
             const connectionMsg = { message: "successful connection" };
             device.publish(topic, JSON.stringify(connectionMsg));
         });
     
    }
    return(
        <>  <div className="main">
                <div>
                    <button onClick={awsConnect}>connect</button>
                </div>
                <div className="left">
                    <div className="current">현재 1.852km/h로<br />달리는 중....</div>
                    <div className="bt">
                        <div className="bt1">
                            <div className="btName1">전원</div>
                            <label className="switch">
                                <input type="checkbox" onClick={powerOnOff}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="bt2">
                            <div className="btName2">수중 모터</div>
                            <label className="switch">
                                <input type="checkbox" onClick={motorOnOff} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="where">
                    <img src="forward.png" className="forward" />
                    <div>
                        <img src="left.png" className="Tleft"/>
                        <img src="right.png" className="Tright"/>
                    </div>
                    <img src="backward.png" className="backward" />
                </div>
            </div>
            <style jsx>{`
                .Tleft{
                    margin-right: 50px;
                }
                .Tright{
                    margin-left: 50px;
                }
                .main{
                    display: flex;
                }
                .where{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-left: 300px;
                }
                .Tleft, .Tright{
                    width: 210px;
                    height: 160px;
                }
                .forward, .backward{
                    width: 160px;
                    height: 210px;
                }
                .btName1{
                    font-size: 30px;
                }
                .btName2{
                    font-size: 30px;
                }
                .bt{
                    display: flex;
                    margin-top: 90px;
                }
                .current{
                    font-size: 40px;
                }
                .bt1{
                    width: 150px;
                    height: 122px;
                }
                .bt2{
                    margin-left: 100px;
                }
                .main{
                    padding-left: 150px;
                    padding-top: 100px;
                }
                .switch {
                    margin-top: 15px;
                    position: relative;
                    display: inline-block;
                    width: 120px;
                    height: 68px;
                  }
                  
                  /* HTML 기본 체크박스 숨기기 */
                  .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                  }
                  
                  /* 슬라이더 - 실제로 토글될 부분 */
                  .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    -webkit-transition: .4s;
                    transition: .4s;
                  }
                  
                  .slider:before {
                    position: absolute;
                    content: "";
                    height: 52px;
                    width: 52px;
                    left: 7px;
                    bottom: 7px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
                  }
                  
                  input:checked + .slider {
                    background-color: #79DAE8;
                  }
                  
                  input:focus + .slider {
                    box-shadow: 0 0 1px #79DAE8;
                  }
                  
                  input:checked + .slider:before {
                    -webkit-transform: translateX(52px);
                    -ms-transform: translateX(52px);
                    transform: translateX(52px);
                  }
                  
                  /* 슬라이더를 동그랗게 보여주기 위한 부분 */
                  .slider.round {
                    border-radius: 34px;
                  }
                  
                  .slider.round:before {
                    border-radius: 50%;
                  }
            `}</style>
        </>
    )
}