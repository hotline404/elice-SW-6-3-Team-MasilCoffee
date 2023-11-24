import UserRightSideItem from "./UserRightSideItem";
import AdminRightSideItem from "./AdminRightSideItem";
import NonUserRightSideItem from "./NonUserRightSideItem";

const TransComponent = (props) => {
  switch (props.userRole) {
    case "Admin": {
      return (
        <AdminRightSideItem
          item={props.linkDatas.right_side}
          location={props.location}
        />
      );
    }

    case "User": {
      return (
        <UserRightSideItem
          item={props.linkDatas.right_side}
          location={props.location}
        />
      );
    }

    default:
      return (
        <NonUserRightSideItem
          item={props.linkDatas.non_user_right}
          location={props.location}
        />
      );
  }
};

export default TransComponent;
