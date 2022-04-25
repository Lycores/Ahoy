import React from "react";

const Card = React.forwardRef((props, ref) => {
  const { name, css, click } = props;
  return <div ref={ref} className={css} id={name} onClick={click}></div>;
});

export default Card;
