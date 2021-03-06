import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import {{> MyName }} from ".";
import MockData from "./{{> my-name }}.mocks";

storiesOf('{{> type }}/{{> MyName }}', module).add(
  'default',
  (): ReactElement => <{{> MyName }} {...MockData.default}></{{> MyName }}>
);
