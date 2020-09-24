import { Tab, Tabs } from "components/tabs";
import excellences from "data/achievements/pride/excellences.yaml";
import medalists from "data/achievements/pride/medalists.yaml";
import { Fragment } from "react";
import styled from "styled-components";

export default function Pride() {
  return (
    <Tabs>
      <Tab title="Наші відмінники">
        <Tabs>
          {excellences.map(({ title: year, items }) => (
            <Tab title={year} key={year}>
              <Tabs>
                {items.map(({ title: clas, items }) => (
                  <Tab title={clas} key={clas}>
                    <ul>
                      {items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  </Tab>
                ))}
              </Tabs>
            </Tab>
          ))}
        </Tabs>
      </Tab>
      <Tab title="Медалісти закладу">
        <Tabs>
          {medalists.map(({ title: year, items }) => (
            <Tab title={year} key={year}>
              {items.map(({ title: header, items }) => (
                <Fragment key={header}>
                  <Medal>{header}</Medal>
                  <ul>
                    {items.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </Tab>
          ))}
        </Tabs>
      </Tab>
    </Tabs>
  );
}

const Medal = styled.h1`
  text-align: center;
  font-size: 1.3em;
`;
