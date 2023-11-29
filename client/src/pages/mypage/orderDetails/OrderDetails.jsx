import React, { Fragment, useEffect } from 'react'

import Container from '../../../components/ui/container/Container'
import Title from '../../../components/ui/title/Title'
import Card from '../../../components/ui/card/Card'

import OrderList from './orderList/OrderList'
import { useSelector } from 'react-redux'


// {
//   "message": "Success",
//   "data": {
//       "_id": "6565d9eb4a16231162528570",
//       "user": "655c67ec36ebfc1c8e2f010c",
//       "orderDetail": [
//           {
//               "name": "메실차차수정",
//               "options": "",
//               "price": 44444,
//               "_id": "6565d9eb4a16231162528571"
//           },
//       ],
//       "status": "제조완료",
//       "totalPrice": 44444,
//       "nickname": "자전거 도둑 김수남",
//       "request": "dsadasd",
//       "packagingOption": "방문포장",
//       "date": "2023-11-28T12:15:39.934Z",
//       "createdAt": "2023-11-28T12:15:39.940Z",
//       "updatedAt": "2023-11-28T17:03:21.146Z",
//       "__v": 0
//   }
// }


function OrderDetails() { 
  const token = useSelector(state => state.login.token);
  const userId = useSelector(state => state.user._id);

  // useEffect(() => {
  //   const getOrder = async () => {
  //     await 
  //   }
  //   getOrder();
  // }, [])
 
  return (
    <Fragment>
      <Container>
        <Title>주문 내역</Title>
        <Card>
          <OrderList token={token} userId={userId}/>
        </Card>
      </Container>
    </Fragment>
  )
}

export default OrderDetails
