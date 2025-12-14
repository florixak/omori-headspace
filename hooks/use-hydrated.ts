import { useEffect, useEffectEvent, useState } from "react";

const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  const handleHydrated = useEffectEvent(() => {
    setHydrated(true);
  });

  useEffect(() => {
    handleHydrated();
  }, []);

  return hydrated;
};

export default useHydrated;
