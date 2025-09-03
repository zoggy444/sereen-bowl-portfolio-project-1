import styled from "styled-components";
import { theme } from "../../theme/theme";
import type {
  TabProps,
  TabContainerProps,
  ContentTabIDType,
} from "../../types";
import Tab from "./Tab";

export default function TabContainer({
  foldTab,
  contentTabs,
}: TabContainerProps) {
  return (
    <TabContainerStyled>
      <>
        <Tab
          id={foldTab.id}
          label={foldTab.label}
          isChecked={foldTab.isChecked}
          IconIfChecked={foldTab.IconIfChecked}
          IconIfUnchecked={foldTab.IconIfUnchecked}
          onClick={foldTab.onClick}
        />
        {contentTabs.map(({ ...props }: TabProps<ContentTabIDType>) => (
          <Tab
            key={props.id}
            id={props.id}
            label={props.label}
            isChecked={props.isChecked}
            IconIfChecked={props.IconIfChecked}
            IconIfUnchecked={props.IconIfUnchecked}
            onClick={props.onClick}
          />
        ))}
      </>
    </TabContainerStyled>
  );
}

const TabContainerStyled = styled.div`
  height: ${theme.gridUnit * 5}px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1px;
  padding-left: ${theme.gridUnit * 8}px;

  font-size: ${theme.fonts.P0};
`;
