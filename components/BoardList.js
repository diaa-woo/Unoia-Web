import styles from "../styles/BoardList.module.css";

export default function BoardList(){
    const boardlist = [{'kind': "공지사항", "title": "OHE 선박 운행 시작합니다!", "author": "김세진", "at": "2022/08/13", "view": 301},
                       {'kind': "문의", "title": "이건 무인선박인가요? 사람도 탈 수 있는 건가요?", "author": "전수향", "at": "2022/08/14", "view": 4},
                       {'kind': "문의", "title": "저.. 이거 너무 타고 싶은데 혹시 비용을 따로 내야하는거죠ㅠㅠ?", "author": "함지민", "at": "2022/08/16", "view": 9},
                       {'kind': "제안", "title": "저희 회사에서 투자를 하고 싶습니다!", "author": "황우석", "at": "2022/08/20", "view": 15}]
    const list = boardlist.map((data, index) => (
        <ul className={styles.list}>
          <li className={styles.num}>{index + 1}</li>
          <li className={styles.kind}>{data.kind}</li>
          <li className={styles.title}>{data.title}</li>
          <li className={styles.author}>{data.author}</li>
          <li className={styles.at}>{data.at}</li>
          <li className={styles.view}>{data.view}</li>
        </ul>
    ));
    return(
        <>
        {list}
        </>
    )
}