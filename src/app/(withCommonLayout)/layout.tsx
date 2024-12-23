import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>navbar</div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
