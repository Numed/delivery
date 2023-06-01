import { FC } from "react";
import { LoaderContainer, LoaderInner } from "./styles";

const Loader: FC = (): JSX.Element => {
  return (
    <LoaderContainer>
      <LoaderInner />
    </LoaderContainer>
  );
};

export default Loader;
