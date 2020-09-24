import { useRouter } from "next/router";
import { useEffect } from "react";

export function useRouterScroll() {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      const el = document.getElementById("SCROLL");
      if (scrollY <= el.offsetTop) return;
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);
}
