import { Link } from 'react-router-dom';
import React from 'react'
import *as S from '../../style/MyPage.style';

function WriteListLink() {
  return (
    <div>
      <Link to="/WriteList" style={{textDecoration: "none"}}>
        <S.WriteLinkBox>Link to Wrtier</S.WriteLinkBox>
        </Link>
    </div>
  )
}

export default WriteListLink
