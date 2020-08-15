import React from "react";
import Avatar from "@material-ui/core/Avatar";

import { useGradientAvatarStyles } from "@mui-treasury/styles/avatar/gradient";

export const GradientAvatarStyle = React.memo(function GradientAvatar() {
  const styles = useGradientAvatarStyles({
    size: 140,
    gap: 3,
    thickness: 4,
    gapColor: "#f4f7fa",
    color: "linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)",
  });
  return (
    <>
      <div className={styles.root}>
        <Avatar
          src={
            "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
      </div>
    </>
  );
});
