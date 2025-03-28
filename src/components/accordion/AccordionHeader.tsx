import { ReactNode } from "react";
import { FlexboxProps, SpaceProps } from "styled-system";
import Icon from "@component/icon/Icon";
// STYLED COMPONENT
import { AccordionHeaderWrapper } from "./styles";

// ==================================================================================
interface Props extends SpaceProps, FlexboxProps {
  open?: boolean;
  showIcon?: boolean;
  children: ReactNode;
  [key: string]: unknown;
}

// ==================================================================================

export default function AccordionHeader({ open, children, showIcon = true, ...props }: Props) {
  return (
    <AccordionHeaderWrapper open={open as boolean} {...props}>
      {children}

      {showIcon && (
        <Icon className="caret-icon" variant="small" defaultcolor="currentColor">
          chevron-right
        </Icon>
      )}
    </AccordionHeaderWrapper>
  );
}
