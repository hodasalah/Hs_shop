import React from "react";
import {
    List,
    ListItem,
    Button,
    Typography,
    ListItemText,
    ListItemAvatar,
} from "@material-ui/core";
import "./style.css";

const BookingDetails = ({ checkoutData, handleBackStep, handleNextStep }) => {
    
    return (
        <>
            <List>
                {checkoutData.live.line_items.map((item) => (
                    <ListItem key={item.id} className="listItem">
                        <ListItemAvatar>
                            <img
                                src={item.media.source}
                                alt={item.product_name}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "inline-block",
                                    marginRight: "15px",
                                    borderRadius: "3px",
                                }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={`Quantity: ${item.quantity}`}
                        />
                        <Typography variant="body2">
                            {item.line_total.formatted_with_symbol}
                        </Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="Total price" />
                    <Typography variant="body2">
                        {checkoutData.live.subtotal.formatted_with_code}
                    </Typography>
                </ListItem>
            </List>

            <div className="actions">
                <Button
                    size="medium"
                    onClick={(e) => handleBackStep(e, "order-address")}
                    variant="contained"
                >
                    Go Back
                </Button>
                <Button
                    onClick={(e) => handleNextStep(e, "order-payment")}
                    size="medium"
                    color="secondary"
                    variant="contained"
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default BookingDetails;
