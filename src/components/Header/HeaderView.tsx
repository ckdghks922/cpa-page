import { ROUTE_URL } from '../../configs';
import * as S from './styled';

const MENU_ITEM = [
  { key: ROUTE_URL.INTRO, text: '인사말' },
  { key: ROUTE_URL.MEMBER, text: '구성원 소개' },
  { key: ROUTE_URL.WAY, text: '찾아오시는 길' },
  { key: ROUTE_URL.BOARD, text: '문의 게시판' },
];

interface HeaderProps {
  onRoute: (route: string) => void;
}
export const HeaderView: React.FC<HeaderProps> = ({ onRoute }) => {
  return (
    <S.Wrapper>
      <S.Title onClick={() => onRoute('/')}>사무소</S.Title>
      <S.MenuWrapper>
        {MENU_ITEM.map(elem => (
          <S.Menu key={elem.key} onClick={() => onRoute(elem.key)}>
            {elem.text}
          </S.Menu>
        ))}
      </S.MenuWrapper>
      <S.MenuIcon>=</S.MenuIcon>
    </S.Wrapper>
  );
};
