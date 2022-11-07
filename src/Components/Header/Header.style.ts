import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  grid-column: 1/5;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1024px) {
    grid-column: 1/5;
  }
`;

export const HeaderTitleWrapper = styled.div`
  grid-column: 5/11;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    grid-column: 5/11;
  }

  @media (max-width: 767px) {
    grid-column: 1/5;
  }

  .title {
    font-size: 28px;
    line-height: 58px;
    color: #000000;
  }

  .link {
    text-decoration: none;
    font-size: 16px;
    line-height: 60px;
    color: #2b64f5;
  }
`;

export const StyledLayout = css`
  grid-template-rows: 80px;

  @media (max-width: 767px) {
    grid-template-rows: repeat(2, 40px);
  }
`;

export const LogoText = styled.span`
  font-size: 35px;
  color: #2b64f5;
  line-height: 75px;
  font-weight: 600;
`;

export const LogoIcon = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

export const LogoIconTop = styled.div`
  background: #2b64f5;
  width: 20px;
  height: 7px;
`;

export const LogoIconMiddle = styled.div`
  background: #2b64f5;
  width: 10px;
  height: 7px;
`;

export const LogoIconBottom = styled.div`
  background: #2b64f5;
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;
