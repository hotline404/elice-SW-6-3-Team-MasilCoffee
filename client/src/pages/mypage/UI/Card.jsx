import React from 'react'
import *as S from '../mypageComponent/MyPage.style'

function Card(props) {
  return (
    <div>
      <S.Card>{props.children}</S.Card>
    </div>
  )
}

export default Card
