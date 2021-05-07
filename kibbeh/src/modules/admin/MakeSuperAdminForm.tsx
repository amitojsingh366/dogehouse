import { wrap } from "@dogehouse/kebab";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { showErrorToast } from "../../lib/showErrorToast";
import { useConn } from "../../shared-hooks/useConn";
import { useTypeSafeTranslation } from "../../shared-hooks/useTypeSafeTranslation";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { MiddlePanel } from "../layouts/GridPanels";

interface SearchUsersProps {}

export const MakeSuperAdminForm: React.FC<SearchUsersProps> = ({}) => {
  const conn = useConn();
  const [username, setUsername] = useState("");
  const [shouldMakeAdmin, setShouldMakeAdmin] = useState(false);
  const { t } = useTypeSafeTranslation();
  const { replace } = useRouter();
  const wrapper = wrap(conn);

  useEffect(() => {
    if (conn.user.username !== "Amitoj") {
      showErrorToast("nice try");
      replace("/dash");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (conn.user.username !== "Amitoj") {
    return <MiddlePanel />;
  }

  return (
    <MiddlePanel>
      <div className="flex">
        <Input
          className={`mb-4`}
          autoFocus
          placeholder="username to make super admin..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <label className={`flex items-center my-1`}>
        <span className={`ml-2 text-primary-100`}>Super Admin:</span>
        <Input
          checked={shouldMakeAdmin}
          autoFocus
          type="checkbox"
          onChange={(e) => setShouldMakeAdmin(e.target.checked)}
        />
      </label>

      <Button
        onClick={() => {
          if (username) {
            console.log(username);
            wrapper.mutation.userSetSuperAdmin(username, shouldMakeAdmin);
          }
        }}
      >
        Change Super Admin Status
      </Button>
    </MiddlePanel>
  );
};
