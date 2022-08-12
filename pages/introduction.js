export default function Introduction(){
    return(
        <>
            <div className="main">
                <div className="top">
                    <div className="left">
                        <p className="name">OHE 선박?</p>
                        <img src="whaleImg.png" />
                    </div>
                    <div className="text">
                        <p className="first">배에서 바닷물을 모아 오염된 바닷물을 정화한 뒤,</p>
                        <p className="second"><span className="color">수소</span>를 분리하여 전기로 변환시켜 가동시키는</p>
                        <p className="third"><span className="color">OHE 선박</span>!</p>
                    </div>
                </div>
                <div className="mid">
                    <div className="left">
                        <p className="name">OHE 선박의 외관</p>
                        <img src="seImg.png" className="seImg" />
                    </div>
                    <div className="text">
                        <p className="mid_first"><span className="air">공기의 저항</span>을 적게 받는 신체!</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <p className="name">OHE 선박의 외관</p>
                    </div>
                    <img src="seImg.png" className="seImg" />
                </div>
            </div>
            <style jsx>{`
                .mid_first{
                    font-size: 35px;
                }
                .air{
                    background-color: #E8F9FD;
                }
                .top{
                    display: flex;
                }
                .mid{
                    margin-top: 100px;
                    display: flex;
                }
                .left{
                    display: flex;
                    flex-direction: column;
                    margin-left: 80px;
                }
                .text{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-top: 200px;
                    margin-left: 100px;
                }
                img{
                    margin-top: 30px;
                    margin-left: 30px;
                }
                .name{
                    margin-top: 50px;
                    font-size: 45px;
                    font-weight: bold;
                }
                .first{
                    margin-bottom: 0px;
                    font-size: 35px;
                }
                .second{
                    margin-top: 0px;
                    font-size: 35px;
                    margin-bottom: 0px;
                }
                .third{
                    margin-top: 0px;
                    font-size: 35px;
                }
                .color{
                    color: #79DAE8;
                }
                .seImg{
                    width: 724px;
                    height: 428px;
                }
            `}</style>
        </>
    )
}