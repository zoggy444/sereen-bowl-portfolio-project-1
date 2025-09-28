import styled from "styled-components";
import PanelContent from "./PanelContent";
import { useContext } from "react";
import TabContainer from "./TabContainer";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";

const AdminPanel = () => {
  const { isAdminMode } = useContext(IsAdminModeContext);

  if (isAdminMode) {
    return (
      <AdminPanelStyled>
        <TabContainer />
        <PanelContent />
      </AdminPanelStyled>
    );
  }
  return;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0px;
  grid-column: 2 / 3;

  max-height: 264px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
