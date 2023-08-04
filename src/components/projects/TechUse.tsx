import { FC } from "react";
import { LangFrame } from "../../types/home";
import Tag from "./Tag";
import { Stack } from "@mui/material";

interface TechUseProps {
  techUse: LangFrame;
  type: string;
}

const TechUse: FC<TechUseProps> = ({ techUse, type }) => {
  return (
    <Stack direction={"row"} spacing={1} flexWrap={"wrap"} useFlexGap>
      <Tag text={type} />
      {techUse.langs.map((el) => (
        <Tag text={el} key={el} />
      ))}
      {techUse.framework.map((el) => (
        <Tag text={el} key={el} />
      ))}
    </Stack>
  );
};

export default TechUse;
