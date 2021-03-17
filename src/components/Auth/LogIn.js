import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

import {
    TextField,
    makeStyles,
    Container,
    Paper,
    Grid,
    InputAdornment,
    IconButton,
    Input,
    InputLabel,
    FormControl,
    Button,
    Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

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

const LogIn = ({ handleLogin }) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [errors, setErrors] = useState({});

    const classes = useStyles();

    /* Methods */

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            let input = {};

            input["email"] = "";
            input["password"] = "";

            setValues(input);
            const data = localStorage.user ? JSON.parse(localStorage.user) : {};

            if (
                values.email === data["email"] &&
                values.password === data["password"]
            ) {
                handleLogin();
            } else if (values.email !== data["email"]) {
                errors["email"] =
                    "Your Email doesn't exist try again or sign up";
            } else if (values.password !== data["password"]) {
                errors["password"] = "Your Password is not correct try again!!";
            }

            setErrors(errors);
        }
    };

    const validate = () => {
        let input = values;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
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

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        setErrors(errors);

        return isValid;
    };

    return (
        <Container>
            {errors.password === "Your Password is not correct try again!!" ? (
                <Alert variant="filled" severity="error">
                    Password is not correct try again!!"
                </Alert>
            ) : null}

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
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                value={values.email}
                                onChange={handleChange("email")}
                            />
                            <Typography variant="body2" color="secondary">
                                {errors["email"]}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl
                                color="secondary"
                                className="form-control"
                            >
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    id="password"
                                    type={
                                        values.showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                            >
                                                {values.showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <Typography variant="body2" color="secondary">
                                    {errors["password"]}
                                </Typography>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} className="area-actions">
                            <Button className={classes.button} type="submit">
                                Log in
                            </Button>
                            <Typography variant="body2" color="secondary">
                                <Link to="/reset-password">
                                    Forget Your Password?
                                </Link>
                            </Typography>
                            <Button className={classes.button}>
                                <Link to="/signup">Make New Account</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default LogIn;
