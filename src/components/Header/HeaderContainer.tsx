import { useNavigate } from 'react-router-dom';
import { HeaderView } from './HeaderView';

const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleRoute = (route: string) => navigate(route);

  return <HeaderView onRoute={handleRoute} />;
};

export default HeaderContainer;
