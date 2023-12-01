import { ROUTES } from "../router/Routes";



function IncludeRedPage(location) {

  const pathParams = location.split("/")
  //console.log("asdfasdf", pathParams[2])

  const RedColorPage = [
    ROUTES.PAYMENT.path,
    ROUTES.PAYMENTDONE.path,
    ROUTES.CART.path,
    ROUTES.ORDERDETAILS.path,
    ROUTES.ORDER.path,
    ROUTES.NOTFOUND.path,
    ROUTES.REGISTER.path,
    ROUTES.LOGIN.path,
    ROUTES.LOGOUT.path,
    ROUTES.MAIN.path,
  `${ROUTES.RECIPEVIEW.path}/${pathParams[2]}`,
    ROUTES.RECIPEWRITE.path,
    ROUTES.RECIPE.path,
    ROUTES.MYPAGE.path,
  ];


  const includeBoolean = RedColorPage.includes(location);
  return includeBoolean;
}

export default IncludeRedPage;
