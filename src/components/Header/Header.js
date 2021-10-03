import { useHistory } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

const Header = () => {
  const history = useHistory();
  const handleGoHome = () => {
    history.push('/');
  };
  return (
    <header className="flex items-center p-8">
      <LogoSVG className="w-8 h-8 cursor-pointer" onClick={handleGoHome} />
      <p className="ml-auto">Test exercise for Bimspot by Dmitry Nezvinskyi</p>
    </header>
  );
};

export default Header;
