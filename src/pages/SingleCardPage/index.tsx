import { FC } from "react";

import SingleCardContent from "../../components/SinglePageContent";
import Header from "../../components/Header";

const SingleCardPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <SingleCardContent />
    </>
  );
};

export default SingleCardPage;
