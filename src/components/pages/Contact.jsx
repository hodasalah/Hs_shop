import React, { useState } from "react";
import Banner from "./Banner";
import "./style.css";

import {
    TextField,
    makeStyles,
    Container,
    Paper,
    Grid,
    TextareaAutosize,
    Button,
    Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
}));
const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        textArea: "",
    });
    const [errors, setErrors] = useState({});
    const classes = useStyles();
    /* Methods */

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["textArea"] = "";

            setValues(input);
            alert("we got your message please check your email");
        }
    };
    const validate = () => {
        let input = values;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }
        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }
        if (!input["textArea"]) {
            isValid = false;
            errors["textArea"] = "Please enter your Message.";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        setErrors(errors);

        return isValid;
    };

    return (
        <div>
            <Banner>CONTACT US</Banner>

            <Container>
                <Paper
                    style={{
                        padding: "20px 10px",
                        maxWidth: "700px",
                        margin: "50px auto",
                    }}
                >
                    <form
                        method="post"
                        className={classes.root}
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Your Name"
                                    color="secondary"
                                    value={values.name}
                                    onChange={handleChange("name")}
                                />
                                <Typography variant="body2" color="secondary">
                                    {errors["name"]}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    color="secondary"
                                    value={values.email}
                                    onChange={handleChange("email")}
                                />
                                <Typography variant="body2" color="secondary">
                                    {errors["email"]}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    rowsMin={3}
                                    value={values.textArea}
                                    placeholder="Your Message"
                                    onChange={handleChange("textArea")}
                                />
                                <Typography variant="body2" color="secondary">
                                    {errors["textArea"]}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" className="btn-message">
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Contact;
