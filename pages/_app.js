import "styles/global.css";
import "react-sortable-tree/style.css";
import "flickity/dist/flickity.min.css";
import "react-table/react-table.css";

import Layout from "components/layout";
import { useRouterScroll } from "lib/scroll";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  useRouterScroll();
  return (
    <SWRConfig
      value={{
        fetcher: (...a) => fetch(...a).then((r) => r.json()),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
