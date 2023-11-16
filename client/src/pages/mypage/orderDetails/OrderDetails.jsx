import React, { Fragment } from 'react'
import Container from '../UI/Container'
import Title from '../UI/Title'
import Card from '../UI/Card'
import OrderList from './orderList/OrderList'

function OrderDetails() {
  return (
    <Fragment>
      <Container>
        <Title>주문 내역</Title>
        <Card>
          <OrderList />
        </Card>
      </Container>
    </Fragment>
  )
}

export default OrderDetails
