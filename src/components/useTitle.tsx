import { useEffect } from "react";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `Narrat - ${title}`;
  }, [title]); // Incluez title comme dépendance
}

export default useTitle;