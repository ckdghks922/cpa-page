import * as S from './styled';

const TEMP_DATA = [
  { id: 1, title: '게시글 1', author: '홍길동1', date: '2022/03/01' },
  { id: 2, title: '게시글 2', author: '홍길동2', date: '2022/03/02' },
  { id: 3, title: '게시글 3', author: '홍길동3', date: '2022/03/03' },
  { id: 4, title: '게시글 4', author: '홍길동4', date: '2022/03/04' },
  { id: 5, title: '게시글 5', author: '홍길동5', date: '2022/03/05' },
];

const BoardTitle: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일</th>
      </tr>
    </thead>
  );
};

interface ItemProps {
  info: {
    id: number;
    title: string;
    date: string;
    author: string;
  };
}
const BoardItem: React.FC<ItemProps> = ({ info }) => {
  const { id, title, author, date } = info;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{date}</td>
    </tr>
  );
};

const BottomPage: React.FC = () => {
  return (
    <S.PageList>
      <S.PageItem>이전</S.PageItem>
      <S.PageItem>1</S.PageItem>
      <S.PageItem>2</S.PageItem>
      <S.PageItem>3</S.PageItem>
      <S.PageItem>4</S.PageItem>
      <S.PageItem>5</S.PageItem>
      <S.PageItem>다음</S.PageItem>
    </S.PageList>
  );
};

const BoardView: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>문의 게시판</S.Title>
      <S.SubTitle>문의 글을 작성할 수 있습니다.</S.SubTitle>
      <table>
        <BoardTitle />
        <tbody>
          {TEMP_DATA.map(elem => (
            <BoardItem key={elem.id} info={elem} />
          ))}
        </tbody>
      </table>
      <S.WriteButton>글쓰기</S.WriteButton>
      <BottomPage />
    </S.Wrapper>
  );
};

export default BoardView;
