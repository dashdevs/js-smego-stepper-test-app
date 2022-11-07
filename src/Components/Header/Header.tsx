import Layout from 'Components/common/Layout';
import {
  StyledLayout,
  LogoWrapper,
  LogoText,
  LogoIcon,
  LogoIconTop,
  LogoIconMiddle,
  LogoIconBottom,
  HeaderTitleWrapper,
} from './Header.style';

const Header = () => {
  return (
    <Layout styles={StyledLayout}>
      <LogoWrapper>
        <LogoText>smeGo</LogoText>

        <LogoIcon>
          <LogoIconTop />
          <LogoIconMiddle />
          <LogoIconBottom />
        </LogoIcon>
      </LogoWrapper>
      <HeaderTitleWrapper>
        <span className="title">Application</span>

        <a href="/" className="link">
          Fill in later
        </a>
      </HeaderTitleWrapper>
    </Layout>
  );
};

export default Header;
