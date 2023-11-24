import React from 'react'
import LinkTo from '../../../ui/Link/LinkTo';
import IncludeRedPage from '../../../../util/IncludeRedPage';
import { ROUTES } from '../../../../router/Routes';
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

function UserRightSideItem(props) {

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
          {items.map((link) => {
            return (
              <LinkTo there={{ to: link.to, name: link.name }} style={style} />
            );
          })}
    </RightSide>
  )
}

export default UserRightSideItem
