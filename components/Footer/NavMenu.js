import PropTypes from "prop-types";
import Link from "next/link";

import css from "./styling.scss";

const NavMenu = props => {
  const { menus } = props;
  return (
    <div>
      {menus && menus.items && menus.items.length
        ? menus.items.map(item => {
            if (item.title) {
              return (
                <div>
                  <Link href={item.url} key={item.title}>
                    <a className={css.verticalMenu}>{item.title}</a>
                  </Link>
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
      items: PropTypes.shape({ title: PropTypes.string, url: PropTypes.url })
    })
  )
};

export default NavMenu;
