import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilUserArrows = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M20.64026,15.77179A3.46849,3.46849,0,0,0,21.5,13.5a3.5,3.5,0,0,0-7,0,3.46849,3.46849,0,0,0,.85974,2.27179A4.98821,4.98821,0,0,0,13,20a1,1,0,0,0,2,0,3,3,0,0,1,6,0,1,1,0,0,0,2,0A4.98821,4.98821,0,0,0,20.64026,15.77179ZM18,15a1.5,1.5,0,1,1,1.5-1.5A1.50164,1.50164,0,0,1,18,15ZM6.79327,7.70734,8.793,9.707A.99989.99989,0,0,0,10.207,8.293L9.91406,8h4.17188l-.293.293A.99989.99989,0,1,0,15.207,9.707l1.9997-1.99969a1.00354,1.00354,0,0,0,0-1.41468L15.207,4.293A.99989.99989,0,0,0,13.793,5.707l.293.293H9.91406l.293-.293A.99989.99989,0,0,0,8.793,4.293L6.79327,6.29266a1.00354,1.00354,0,0,0,0,1.41468Zm1.847,8.06445A3.46849,3.46849,0,0,0,9.5,13.5a3.5,3.5,0,0,0-7,0,3.46849,3.46849,0,0,0,.85974,2.27179A4.98821,4.98821,0,0,0,1,20a1,1,0,0,0,2,0,3,3,0,0,1,6,0,1,1,0,0,0,2,0A4.98821,4.98821,0,0,0,8.64026,15.77179ZM6,15a1.5,1.5,0,1,1,1.5-1.5A1.50164,1.50164,0,0,1,6,15Z" />
    </Svg>
  );
};

UilUserArrows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilUserArrows.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilUserArrows;