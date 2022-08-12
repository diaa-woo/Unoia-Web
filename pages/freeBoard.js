import BoardList from "../components/BoardList";

export default function FreeBoard(){
    return(
        <>
            <div className="title">자유게시판</div>
            <div className="board">
                <div className="topBar">
                    <ul>
                        <li className="num">번호</li>
                        <li className="board_title">제목</li>
                        <li className="author">글쓴이</li>
                        <li className="at">날짜</li>
                        <li className="view">조회수</li>
                    </ul>
                </div>
                <div className="list">
                    <BoardList />
                </div>
            </div>
            <style jsx>{`
                .title{
                    padding-left: 40px;
                    padding-top: 70px;
                    font-size: 40px;
                }
                .topBar{
                    margin-top: 50px;
                    margin-left: 100px;
                    width: 1152px;
                    height: 46px;
                    border: 1px solid gray;
                    display: flex;
                    align-items: center;
                }
                ul{
                    padding-left: 20px;
                    display: flex;
                    list-style: none;
                    justify-content: flex-start;
                }
                .board_title{
                    margin-left: 400px;
                }
                .author{
                    margin-left: 400px;
                }
                .at{
                    margin-left: 70px;
                }
                .view{
                    margin-left: 70px;
                }
                .list{
                    margin-left: 100px;
                }
            `}</style>
        </>
    )
}