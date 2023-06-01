import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  padding: 20px 60px;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(57%2c 57%2c 57%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c525.478C96.358%2c503.114%2c193.019%2c482.891%2c272.428%2c423.906C348.484%2c367.411%2c401.447%2c287.439%2c438.086%2c200.067C473.88%2c114.709%2c478.326%2c23.676%2c479.074%2c-68.88C479.945%2c-176.691%2c492.389%2c-287.955%2c442.803%2c-383.691C386.687%2c-492.034%2c300.651%2c-591.877%2c186.237%2c-634.264C69.08%2c-677.668%2c-68.906%2c-670.855%2c-180.462%2c-614.596C-285.793%2c-561.477%2c-329.701%2c-440.344%2c-394.177%2c-341.556C-449.713%2c-256.466%2c-504.924%2c-174.466%2c-531.697%2c-76.447C-561.437%2c32.436%2c-584.553%2c144.905%2c-556.939%2c254.346C-526.134%2c376.432%2c-481.155%2c517.422%2c-367.946%2c572.535C-254.474%2c627.776%2c-122.936%2c554.011%2c0%2c525.478' fill='%232e2e2e'%3e%3c/path%3e%3cpath d='M1440 1041.09C1540.353 1042.844 1654.608 1078.896 1734.067 1017.577 1813.607 956.196 1808.484 836.6220000000001 1831.644 738.858 1850.472 659.38 1869.2930000000001 580.789 1856.658 500.094 1844.133 420.105 1802.05 351.855 1760.194 282.55 1710.085 199.57999999999998 1682.541 77.46699999999998 1588.1399999999999 55.483000000000004 1492.579 33.22799999999995 1423.176 154.437 1329.052 182.14499999999998 1235.03 209.82299999999998 1118.893 153.99200000000002 1042.965 215.96800000000002 966.908 278.049 965.3969999999999 392.578 952.077 489.847 938.836 586.544 930.986 685.351 966.225 776.366 1002.6800000000001 870.52 1064.329 958.1610000000001 1152.468 1007.409 1238.45 1055.452 1341.521 1039.368 1440 1041.09' fill='%23444444'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")
    no-repeat center;
  background-size: cover;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
  color: #fff;
  font-size: 24px;
  letter-spacing: 1.1px;
  font-weight: 500;
  text-decoration: none;
`;

export const HeaderNavContainer = styled.nav`
  width: 50%;
`;

export const NavList = styled.ul`
  list-style: none;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ListItem = styled.li`
  margin-left: 20px;
`;

export const LinkButton = styled(Link)`
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-decoration: none;
  opacity: 0.85;
  transition: all 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;
