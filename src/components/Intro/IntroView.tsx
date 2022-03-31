import Cat from '../../assets/cat.jpg';
import * as S from './styled';

const LeftSide: React.FC = () => {
  return (
    <S.LeftWrapper>
      <img alt="사진" src={Cat} />
    </S.LeftWrapper>
  );
};

const MainSide: React.FC = () => {
  return <S.MainWrapper>나는 고양이입니다.</S.MainWrapper>;
};

export const IntroView: React.FC = () => {
  return (
    <S.Wrapper>
      <LeftSide />
      <MainSide />
    </S.Wrapper>
  );
};
