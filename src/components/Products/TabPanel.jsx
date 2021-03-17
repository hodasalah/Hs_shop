import React from "react";

import PropTypes from "prop-types";
import { Grid, Box } from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Grid item md={4} sm={6} xs={12} hidden={value !== index}>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <>{children}</>
                    </Box>
                )}
            </div>
        </Grid>
    );
}
export default TabPanel;
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
