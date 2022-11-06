
export default function awsConnect() {
    const awsIot = require('aws-iot-device-sdk');
    let device = new awsIot.device({
       keyPath:  "C:/Users/SW2148/project/Unoia-Web/pages/api/keys/privateKey.pem.key",
       certPath: "C:/Users/SW2148/project/Unoia-Web/pages/api/keys/cert.pem.crt",
       caPath: "C:/Users/SW2148/project/Unoia-Web/pages/api/keys/AmazonRootCA1.pem",
       clientId: "Eunoia_shipDevice",
       host: "a8igl60f8s1mm-ats.iot.ap-northeast-2.amazonaws.com" 
    })
    
    const topic = "Eunoia_shipDevice/sub"; 
    
    device.on("connect", () => {
    
        console.log("connect");
    
        device.subscribe(topic);
    
        const connectionMsg = { message: "successful connection" };
        device.publish(topic, JSON.stringify(connectionMsg));
    });
    
}