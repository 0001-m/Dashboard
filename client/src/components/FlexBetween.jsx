const { Box } = require("@mui/material");
const { styled } = require("@mui/system");


//style component is way to reuse styles or css in a component-like manner
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center"
});

export default FlexBetween;