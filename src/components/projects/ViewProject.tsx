import { Stack, useTheme, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "../../resources/icons";
import { ViewProjectType } from "../../types/home";
import { FC } from "react";

interface ViewProjectProps{
    data:ViewProjectType
}

const ViewProject:FC<ViewProjectProps> = ({data}) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} spacing={3}>
      {data.websiteName != undefined && (
        <Link
          to={data.link!}
          target="_blank"
          style={{
            textDecoration: "none",
            color: theme.palette.text.main,
          }}
        >
          <Box display={"inline-block"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                backgroundColor: theme.palette.background[200],
                padding: "0.8rem 1.5rem",
                borderRadius: "3rem",
                border: `1px solid ${theme.palette.accent?.[200]}`,
                cursor: "pointer",
                ":hover": {
                  backgroundColor: theme.palette.background[300],
                },
              }}
            >
              {data.websiteName!} &nbsp;
              <ArrowUpRightIcon />
            </Stack>
          </Box>
        </Link>
      )}
      <Link
        to={data.code}
        target="_blank"
        style={{
          textDecoration: "none",
          color:
            data.websiteName != undefined
              ? theme.palette.background.main
              : theme.palette.text.main,
        }}
      >
        <Box display={"inline-block"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              backgroundColor:
                data.websiteName != undefined
                  ? theme.palette.text[200]
                  : theme.palette.background[200],
              padding: "0.8rem 1.5rem",
              borderRadius: "3rem",
              border: `1px solid ${theme.palette.accent?.[200]}`,
              cursor: "pointer",
              ":hover": {
                backgroundColor: theme.palette.background[300],
              },
            }}
          >
            {data.code.replace(/^https?:\/\//, "")} &nbsp;
            <ArrowUpRightIcon />
          </Stack>
        </Box>
      </Link>
    </Stack>
  );
};

export default ViewProject;
