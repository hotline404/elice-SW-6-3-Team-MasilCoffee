import React, { Fragment } from 'react'

import Container from '../../../components/ui/container/Container'
import Title from '../../../components/ui/title/Title'
import Card from '../../../components/ui/card/Card'

import OrderList from './orderList/OrderList'

import Headers from '../../../components/layout/Header/Headers'
import Footer from '../../../components/layout/Footer/Footer'

function OrderDetails() {
  return (
    <Fragment>
      <Headers />
      <Container>
        <Title>주문 내역</Title>
        <Card>
          <OrderList />
        </Card>
      </Container>
      <Footer/>
    </Fragment>
  )
}

export default OrderDetails
