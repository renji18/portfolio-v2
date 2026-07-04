import { styled } from "@mui/material/styles";
import Tooltip, {
  tooltipClasses,
  type TooltipProps,
} from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";

type StyledTooltipProps = TooltipProps & {
  className?: string;
};

export const HtmlTooltip = styled(
  ({ className, ...props }: StyledTooltipProps) => (
    <Tooltip
      slots={{
        transition: Zoom,
      }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
      {...props}
      classes={{ popper: className }}
    />
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#303030",
    color: "#f6f6f6",
    minWidth: 200,
    maxWidth: 260,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #f6f6f6",
    boxShadow: theme.shadows[1],
    padding: "10px",
  },
}));

export const MyTooltip = styled(
  ({ className, ...props }: StyledTooltipProps) => (
    <Tooltip
      slots={{
        transition: Zoom,
      }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
      {...props}
      classes={{ popper: className }}
    />
  ),
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#303030",
    color: "#f6f6f6",
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #f6f6f6",
  },
}));
