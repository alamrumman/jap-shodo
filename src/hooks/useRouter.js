import { useEffect, useState, useCallback } from "react";

export function useRouter() {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.hash.replace(/^#/, "") || "/"
  );

  useEffect(() => {
    const onHash = () => {
      const next = window.location.hash.replace(/^#/, "") || "/";
      setPath(next);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = useCallback((to) => {
    window.location.hash = to;
  }, []);

  return { path, navigate };
}
