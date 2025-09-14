import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Style component is a way to reuse styles or css in a component-like manner
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export default FlexBetween;