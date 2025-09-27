import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { useContext, useState, type FormEvent } from "react";
import {
  AdminPanelContext,
  MainDispatchContext,
} from "../../../../context/OrderMainContext";
import type {
  AdminPanelFormActionType,
  FormFooterProps,
  MenuActionType,
} from "../../../../types";
import { FiCheckCircle } from "react-icons/fi";
import { theme } from "../../../../theme/theme";

export default function FormFooterAdd({ className }: FormFooterProps) {
  const { menuDispatch, adminPanelFormDispatch } =
    useContext(MainDispatchContext);
  const { formInputs } = useContext(AdminPanelContext);
  const [addedMsg, setaddedMsg] = useState(false);

  const onFormSubmit = (e?: FormEvent) => {
    e?.preventDefault();

    setaddedMsg(true);
    setTimeout(() => {
      setaddedMsg(false);
    }, 2000);
    const menuAction: MenuActionType = {
      type: "add-product",
      prodVals: formInputs,
    };
    menuDispatch(menuAction);
    const PanelAction: AdminPanelFormActionType = {
      type: "reset",
      formTarget: "add-product",
    };
    adminPanelFormDispatch(PanelAction);
  };

  return (
    <FormFooterAddStyled className={className}>
      <Button
        label="Add new product to menu"
        intent="success"
        className="button-submit"
        type="submit"
        onClick={onFormSubmit}
      />
      {addedMsg && (
        <div className="added-msg">
          <FiCheckCircle /> <span>Succesfuly added !</span>
        </div>
      )}
    </FormFooterAddStyled>
  );
}

const FormFooterAddStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 1fr;
  column-gap: ${theme.spacing.md};

  .button-submit {
    grid-column: 2 / 3;
  }

  .added-msg {
    grid-column: 3/4;
    color: ${theme.colors.success};
    display: flex;
    align-items: center;
    span {
      padding-left: ${theme.spacing.xs};
    }
  }
`;
