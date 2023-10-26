import {useCallback, useMemo, useState} from "react";

// Custom Hook
const useToggle = () => {
  const [status , setStatus] = useState<boolean>(false);

  const toggleStatus = useCallback(() => {
    setStatus((previousStatus) => !previousStatus);
  } , []);

  return useMemo(
    () => ({
      status,
      toggleStatus
    }),
    [status, toggleStatus]
  );
};

export default useToggle;