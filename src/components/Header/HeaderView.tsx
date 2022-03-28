import * as S from './styled';

interface HeaderProps {
  onRoute: (route: string) => void;
}
export const HeaderView: React.FC<HeaderProps> = ({ onRoute }) => {
  return (
    <S.Wrapper>
      <S.Title onClick={() => onRoute('/')}>사무소</S.Title>
      <S.MenuWrapper>
        <S.Menu onClick={() => onRoute('intro')}>인사말</S.Menu>
        <S.Menu>구성원 소개</S.Menu>
        <S.Menu>찾아오시는 길</S.Menu>
        <S.Menu onClick={() => onRoute('board')}>문의 게시판</S.Menu>
      </S.MenuWrapper>
      <S.MenuIcon>=</S.MenuIcon>
    </S.Wrapper>
  );
};
