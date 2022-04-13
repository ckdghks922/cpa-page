import * as S from './styled';

const LoginView: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Text>원하는 소셜 계정을 활용하여 로그인 할 수 있습니다.</S.Text>
      <S.NaverButton />
      <S.KaKaoButton />
    </S.Wrapper>
  );
};

export default LoginView;
