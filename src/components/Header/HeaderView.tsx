import * as S from './styled';

interface HeaderProps {
  onRoute: (route: string) => void;
}
export const HeaderView: React.FC<HeaderProps> = ({ onRoute }) => {
  return (
    <S.Wrapper>
      사무소
      <S.MenuWrapper>
        <S.Menu onClick={() => onRoute('intro')}>인사말</S.Menu>
        <S.Menu>구성원 소개</S.Menu>
        <S.Menu>찾아오시는 길</S.Menu>
        <S.Menu>문의 게시판</S.Menu>
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
