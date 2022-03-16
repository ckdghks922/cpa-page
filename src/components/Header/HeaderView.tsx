import * as S from './styled';

const HeaderMenu: React.FC = () => {
  return (
    <div>
      <div>인사말</div>
      <div>구성원 소개</div>
      <div>찾아오시는 길</div>
      <div>문의 게시판</div>
    </div>
  );
};

export const HeaderView: React.FC = () => {
  return <S.Wrapper>사무소</S.Wrapper>;
};
