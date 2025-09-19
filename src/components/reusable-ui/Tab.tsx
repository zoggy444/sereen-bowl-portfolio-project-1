import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { TabProps } from "../../types";

export default function Tab<T>({
  id,
  label,
  isActive,
  IconIfChecked,
  IconIfUnchecked,
  onClick,
}: TabProps<T>) {
  const onTabClick = () => {
    console.log(onClick)
    return onClick(id);
  };

  return (
    <TabStyled
      className={isActive ? "tab-active" : "tab-inactive"}
      onClick={onTabClick}
    >
      {isActive && IconIfChecked && <IconIfChecked />}
      {!isActive && IconIfUnchecked && <IconIfUnchecked />}
      {label && <span>{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  box-sizing: border-box;
  height: ${theme.gridUnit * 5 - 2}px;
  padding-left: ${theme.gridUnit * 3}px;
  padding-right: ${theme.gridUnit * 3}px;

  border-top-right-radius: ${theme.borderRadius.round};
  border-top-left-radius: ${theme.borderRadius.round};

  display: flex;
  align-items: center;
  gap: ${theme.gridUnit}px;
  cursor: pointer;

  span:hover {
    text-decoration: underline;
  }

  &.tab-inactive {
    border: 1px solid ${theme.colors.greyLight};
    border-bottom: 2px solid ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    &:hover {
      border-bottom: 2px solid ${theme.colors.white};
    }
  }
  &.tab-active {
    border: none;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
