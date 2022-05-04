import { useCallback, useState } from "react";

const useRerender = () => {
  let [state, setState] = useState(0);

  const forceUpdate = useCallback(() => {
    let random = Math.random();
    while (random === state) {
      random = Math.random();
    }
    setState(random);
  }, [state]);

  return [forceUpdate];
};
export default useRerender;
