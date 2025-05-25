import {styled} from "@mui/material/styles";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import {Zoom} from "@mui/material";
import React from "react";

export const HtmlTooltip = styled(({className, ...props}) => (
  <Tooltip
    slots={{
      transition: Zoom,
    }}
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -10],
            },
          },
        ],
      },
    }}
    {...props}
    classes={{popper: className}}
  />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#303030',
    color: '#f6f6f6',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #f6f6f6',
    boxShadow: theme.shadows[1],
  },
}));

export const MyTooltip = styled(({className, ...props}) => (
  <Tooltip
    slots={{
      transition: Zoom,
    }}
    slotProps={{
      popper: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -10],
            },
          },
        ],
      },
    }}
    {...props}
    classes={{popper: className}}
  />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#303030',
    color: '#f6f6f6',
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #f6f6f6',
  },
}));