import { Link } from 'react-router-dom';
import React from 'react'
import *as S from '../../style/MyPage.style';
import { ROUTES } from '../../../../router/Routes';

function WriteListLink() {
  return (
    <div>
      <Link to={ROUTES.WRITELIST.path} style={{textDecoration: "none"}}>
        <S.WriteLinkBox>내가 쓴 글</S.WriteLinkBox>
        </Link>
    </div>
  )
}

export default WriteListLink
