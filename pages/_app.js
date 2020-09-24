import "styles/global.css";
import "react-sortable-tree/style.css";
import "flickity/dist/flickity.min.css";
import "react-table/react-table.css";

import Layout from "components/layout";
import { useRouterScroll } from "lib/scroll";

function MyApp({ Component, pageProps }) {
  useRouterScroll();
  return (
    <Layout posts={pageProps.posts}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
