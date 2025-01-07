import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import CursorCustomize from "@/components/CursorCustomize/CursorCustomize";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <CursorCustomize />
      <Footer />
    </>
  );
};

export default layout;
