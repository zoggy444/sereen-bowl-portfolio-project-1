import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { useContext, useState, type FormEvent } from "react";
import { MenuDispatchContext } from "../../../../context/MenuContext";
import type { FormFooterAddProps, MenuActionType } from "../../../../types";
import { FiCheckCircle } from "react-icons/fi";
import { theme } from "../../../../theme/theme";
import {
  FormProdContext,
  FormProdHandlersContext,
} from "../../../../context/AdminPanelContext";

export default function FormFooterAdd({ className }: FormFooterAddProps) {
  const menuDispatch = useContext(MenuDispatchContext);
  const { formInputs } = useContext(FormProdContext);
  const { handleInputReset } = useContext(FormProdHandlersContext);
  const [addedMsg, setaddedMsg] = useState(false);

  const onFormSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    handleInputReset();
    setaddedMsg(true);
    setTimeout(() => {
      setaddedMsg(false);
    }, 2000);
    const action: MenuActionType = {
      type: "add-product",
      prodVals: formInputs,
    };
    menuDispatch(action);
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
