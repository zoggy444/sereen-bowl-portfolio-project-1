import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type {
  TabProps,
  TabContainerProps,
  ContentTabIDType,
} from "../../../../types";
import Tab from "../../../reusable-ui/Tab";

export default function TabContainer({
  foldTab,
  contentTabs,
}: TabContainerProps) {
  return (
    <TabContainerStyled>
      <>
        <Tab {...foldTab} />
        {contentTabs.map(({ ...props }: TabProps<ContentTabIDType>) => (
          <Tab key={props.id} {...props} />
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

  font-size: ${theme.fonts.size.P0};
`;
