import { Stack } from "@fluentui/react";

import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <Stack>
      <Meta />
      {children}
    </Stack>
  );
};

export default Layout;
