import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { TabProps } from "../../types";
import Tab from "./Tab";

export default function TabGroup({ tabs }: { tabs: TabProps[] }) {
  return (
    <TabGroupStyled>
      <>
        {tabs.map(({ ...props }: TabProps) => (
          <Tab
            id={props.id}
            label={props.label}
            isChecked={props.isChecked}
            IconIfChecked={props.IconIfChecked}
            IconIfUnchecked={props.IconIfUnchecked}
            onClick={props.onClick}
          />
        ))}
      </>
    </TabGroupStyled>
  );
}

const TabGroupStyled = styled.div`
  height: ${theme.gridUnit * 5}px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1px;
  padding-left: ${theme.gridUnit * 8}px;

  font-size: ${theme.fonts.P0};
`;
