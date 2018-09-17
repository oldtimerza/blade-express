import PropTypes from "prop-types";

import css from "./styling.scss";

const NavMenu = props => {
  const { menus } = props;
  return (
    <div>
      {menus && menus.items && menus.items.length
        ? menus.items.map(item => {
            if (item.title) {
              return (
                <div className="menuItem" key={item.title}>
                  {item.title}
                </div>
              );
            }
            return null;
          })
        : null}
    </div>
  );
};

NavMenu.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.arrayOf({ title: PropTypes.string })
    })
  )
};

export default NavMenu;
