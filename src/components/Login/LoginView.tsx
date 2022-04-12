import * as S from './styled';

const LoginView: React.FC = () => {
  return (
    <S.Wrapper>
      원하는 소셜 계정을 통해 로그인 할 수 있습니다.
      <S.LoginButton />
      <S.LoginButton />
    </S.Wrapper>
  );
};

export default LoginView;
