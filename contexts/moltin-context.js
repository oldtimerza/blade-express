import React from "react";

import MoltinService from "../services/moltin-service";

export const MoltinContext = React.createContext({
  moltinService: () => {
    return new MoltinService();
  }
});
