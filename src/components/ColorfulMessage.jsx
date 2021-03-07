import React from 'react';

const ColorfulMessage = (props) => {
  //分割代入でprops.colorと書かなくてよくなる
  const { color, children } = props;
  const contentStyle = {
    //JSではプロパティ名と値が同じ名前のときはプロパティ名を省略できる
    color,
    fontSize: '18px'
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
