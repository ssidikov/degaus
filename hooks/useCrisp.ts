import * as React from "react";
import { ChatboxColors, Crisp } from "crisp-sdk-web";

const CRISP_WEBSITE_ID = "81de3d00-775d-43a9-a1a0-2a4ceec192d2";

export function useCrisp() {
  React.useEffect(() => {
    Crisp.configure(CRISP_WEBSITE_ID);
    Crisp.setAvailabilityTooltip(false);
    Crisp.toggleOperatorCount(true);
    Crisp.setColorTheme(ChatboxColors.Black);
    Crisp.load();
  }, []);
}
