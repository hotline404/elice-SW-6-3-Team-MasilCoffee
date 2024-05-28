import UserRightSideItem from "./UserRightSideItem";
import AdminRightSideItem from "./AdminRightSideItem";
import NonUserRightSideItem from "./NonUserRightSideItem";

const TransComponent = ({userRole, linkDatas, location, onVisible}) => {
  switch (userRole) {
    case "Admin": {
      return (
        <AdminRightSideItem
          item={linkDatas.right_side}
          location={location}
          onVisible={onVisible}
        />
      );
    }

    case "User": {
      return (
        <UserRightSideItem
          item={linkDatas.right_side}
          location={location}
          onVisible={onVisible}
        />
      );
    }

    default:
      return (
        <NonUserRightSideItem
          item={linkDatas.non_user_right}
          location={location}
          onVisible={onVisible}
        />
      );
  }
};
/* 타입 안정화 */

TransComponent.propTypes = {
  location: PropTypes.string.isRequired,
  onVisible: PropTypes.func.isRequired,
  linkDatas: PropTypes.array.isRequired
}

export default TransComponent;
