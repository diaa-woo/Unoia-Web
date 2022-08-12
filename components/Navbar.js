import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <nav>
                <Link href="/">
                    <a className="logo">Eunoia</a>
                </Link>
                <ul>
                    <Link href="/introduction">
                        <li>
                            <a>선체 소개</a>
                        </li>
                    </Link>
                    <Link href="/tec">
                        <li className="tec">
                           <a>기술</a>
                        </li>
                    </Link>
                    <Link href="/freeBoard">
                        <li className="freeBoard">
                            <a>자유게시판</a>
                        </li>
                    </Link>
                </ul>
            </nav>
            <style jsx>{`
                nav{
                    background-color: black;
                    width: 100%;
                    height: 90px;
                    display: flex;
                    align-items: center;
                }
                .logo{
                    color: white;
                    font-size: 35px;
                    margin-left: 20px;
                }
                ul{
                    list-style: none;
                    display: flex;
                    margin-left: 800px;
                }
                li{
                    color: #BEBDBD;
                    font-size: 17px;
                    cursor: pointer;
                }
                .tec{
                    margin-left: 130px;
                }
                .freeBoard{
                    margin-left: 130px;
                }
                a:hover{
                    color: white;   
                }
            `}</style>
        </>
    )
}