import React from 'react'
import LinkTo from '../../../ui/Link/LinkTo';
import IncludeRedPage from '../../../../util/IncludeRedPage';
import { ROUTES } from '../../../../router/Routes';
import { useSelector } from 'react-redux';
import { RightSide } from '../Headers.style';

const items = [
  {
    to: ROUTES.MYPAGE.path,
    name: "마이페이지"
  },
  {
    to: ROUTES.LOGOUT.path,
    name: "로그아웃"
  }
]

function RightSideItem(props) {
  const isLogin = useSelector((state) => state.login.loginState);

  const transLog = !isLogin ? "로그인" : "로그아웃";
  const transPath = !isLogin ? ROUTES.LOGIN.path : ROUTES.LOGOUT.path;


  const style = {
    textDecoration: "none",
    textAlign: "center",
    color: `${IncludeRedPage(props.location) ? "#191414" : "#f5f5f5"}`,
    fontSize: "15px",
    fontWeight: "400",
    margin: "27px",
    cursor: "pointer",
  };

  return (
    <RightSide>
      <LinkTo
            there={{ to: `${transPath}`, name: `${transLog}` }}
            style={style}
          />

          {items.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
    </RightSide>
  )
}

export default RightSideItem
