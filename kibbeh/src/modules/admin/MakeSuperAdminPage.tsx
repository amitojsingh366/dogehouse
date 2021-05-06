import * as React from "react";
import { PageComponent } from "../../types/PageComponent";
import { WaitForWsAndAuth } from "../auth/WaitForWsAndAuth";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { MakeSuperAdminForm } from "./MakeSuperAdminForm";

interface Props {}

export const MakeSuperAdminPage: PageComponent<Props> = () => {
  return (
    <WaitForWsAndAuth>
      <DefaultDesktopLayout>
        <MakeSuperAdminForm />
      </DefaultDesktopLayout>
    </WaitForWsAndAuth>
  );
};

MakeSuperAdminPage.ws = true;
