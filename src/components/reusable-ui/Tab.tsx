import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { IconType } from "react-icons";

export default function Tab({
  isChecked,
  Icon,
  label,
}: {
  isChecked: boolean;
  Icon: IconType;
  label?: string;
}) {
  if (!isChecked) {
    return (
      <TabUncheckedStyled>
        {Icon && <Icon />}
        {label && <span>{label}</span>}
      </TabUncheckedStyled>
    );
  }
  return (
    <TabCheckedStyled>
      {Icon && <Icon />}
      {label && <span>{label}</span>}
    </TabCheckedStyled>
  );
}

const TabUncheckedStyled = styled.div`
  box-sizing: border-box;
  height: ${theme.gridUnit * 5 - 2}px;
  padding-left: ${theme.gridUnit * 3}px;
  padding-right: ${theme.gridUnit * 3}px;

  border-top: 1px solid ${theme.colors.greyLight};
  border-left: 1px solid ${theme.colors.greyLight};
  border-right: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  border-top-right-radius: ${theme.borderRadius.round};
  border-top-left-radius: ${theme.borderRadius.round};

  display: flex;
  align-items: center;
  gap: ${theme.gridUnit}px;
  cursor: pointer;

  background-color: ${theme.colors.white};
  color: ${theme.colors.greySemiDark};
`;

const TabCheckedStyled = styled.div`
  height: ${theme.gridUnit * 5 - 2}px;
  padding-left: ${theme.gridUnit * 3}px;
  padding-right: ${theme.gridUnit * 3}px;

  border-top-right-radius: ${theme.borderRadius.round};
  border-top-left-radius: ${theme.borderRadius.round};

  display: flex;
  align-items: center;
  gap: ${theme.gridUnit}px;
  cursor: pointer;

  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
`;
