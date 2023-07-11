import { Stack, useTheme } from "@mui/material";
import { FC, ReactElement } from "react";
import { IconType } from "react-icons";

export interface ContactIconProps {
  Icon: IconType | undefined;
}

const ContactIcon: FC<ContactIconProps> = ({ Icon }): ReactElement => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        padding: "0.7rem",
        borderRadius: "5px",
        color: theme.palette.accent?.[200],
        ":hover": {
          backgroundColor: theme.palette.background[200],
          color: theme.palette.accent?.main,
        },
      }}
    >
      {Icon != undefined && <Icon size={25} />}
    </Stack>
  );
};

export default ContactIcon;
