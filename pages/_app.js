import "styles/global.css";
import "react-sortable-tree/style.css";
import "flickity/dist/flickity.min.css";
import "react-table/react-table.css";
import { SWRConfig } from "swr";
import Layout from "components/layout";
import { useRouterScroll } from "lib/scroll";

export default function App({ Component, pageProps }) {
  useRouterScroll();
  return (
    <SWRConfig
      value={{
        fetcher: (...a) => fetch(...a).then((r) => r.json()),
      }}
    >
      <Layout posts={pageProps.posts}>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
