import React, { ReactElement } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { H1Css } from "./text.styles";

const TextStories = styled.div`
  ${H1Css}
`;

storiesOf("styles | Text", module).add(
  "all",
  (): ReactElement => <TextStories> Headline </TextStories>
);
