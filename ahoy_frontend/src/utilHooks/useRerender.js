import React, { useState, useCallback } from "react";

const useRerender = React.memo(() => {
  let [state, setState] = useState(0);

  const forceRender = useCallback(() => {
    setState(0);
  });
  return [forceRender];
});

export default useRerender;
