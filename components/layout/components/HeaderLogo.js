import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>FUND.CROWD</Logo>
  )
}

const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-left: 11px;
  font-family: 'Poppins';
  letter-spacing: 3px;
  cursor: pointer;
`

export default HeaderLogo