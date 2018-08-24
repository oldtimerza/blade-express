import css from "./styling.scss";

export default props => {
  const { menus } = props;
  console.log(menus);
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
