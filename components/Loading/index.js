import React from "react";

import css from "./styling.scss";

const Loading = props => {
  return (
    <div className={css.loading}>
      <img src="static\images\Rolling-1s-200px.gif" className={css.image} />;
    </div>
  );
};

export default Loading;
