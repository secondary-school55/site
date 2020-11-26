import { useEffect, useMemo, useState } from "react";
import { MdPrint } from "react-icons/md";
import styled from "styled-components";

import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

const height = 50;

export default function Layout({ children, posts }) {
  const [printMode, setPrintMode] = useState(false);

  useEffect(() => {
    if (printMode === false) return;

    print();
    setPrintMode(false);
  }, [printMode]);

  return (
    <>
      {!printMode && (
        <>
          <Menu height={height} />
          <Header />
          <Breadcrumbs height={height} posts={posts} />
        </>
      )}
      <Content>
        <Widgets>
          <MdPrint size={32} onClick={() => setPrintMode(true)} />
        </Widgets>
        {children}
      </Content>
      {!printMode && <Footer />}
    </>
  );
}

const Content = styled.div`
  margin: 1vw;
  font-family: "open sans";
  font-size: 16px;
  text-align: justify;
`;

const Widgets = styled.div`
  text-align: right;

  & > *:hover {
    cursor: pointer;
  }
`;
