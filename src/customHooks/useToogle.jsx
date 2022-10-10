import React, { useState } from "react";

const useToogle = () => {
  let [value, setValue] = useState(false);
  return [value, setValue];
};

export default useToogle;
