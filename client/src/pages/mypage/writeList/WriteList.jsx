import React, { Fragment } from "react";
import Headers from "../../../components/layout/Header/Headers";
import Footer from "../../../components/layout/Footer/Footer";
import Container from "../../../components/ui/container/Container";
import WriteListForm from "./WriteListForm";
import Card from "../../../components/ui/card/Card";

function WriteList() {
  return (
    <Fragment>
      <Headers />
      <Container>
        <Card NonFlex>
          <WriteListForm />
        </Card>
      </Container>
      <Footer />
    </Fragment>
  ); 
}

export default WriteList;
