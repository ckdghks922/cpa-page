import * as S from './styled';

const LeftSide: React.FC = () => {
  return <S.LeftWrapper>사진</S.LeftWrapper>;
};

const MainSide: React.FC = () => {
  return <S.MainWrapper>소개글</S.MainWrapper>;
};

export const IntroView: React.FC = () => {
  return (
    <S.Wrapper>
      <LeftSide />
      <MainSide />
    </S.Wrapper>
  );
};
