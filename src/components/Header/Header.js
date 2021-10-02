import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

const Header = () => (
  <header className="flex items-center p-8">
    <LogoSVG className="w-8 h-8" />
    <p className="ml-auto">Test task for Bimspot</p>
  </header>
);

export default Header;
