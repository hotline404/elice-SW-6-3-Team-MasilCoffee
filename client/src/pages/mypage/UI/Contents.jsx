import React from 'react'
import *as S from '../mypageComponent/MyPage.style'

function Contents(props) {
  return (
    <div>
      <S.Contents>{props.children}</S.Contents>
    </div>
  )
}

export default Contents
