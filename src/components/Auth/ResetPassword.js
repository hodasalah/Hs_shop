import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

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

const ResetPassword = () => {
    /* State */
    const history = useHistory();
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
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
    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
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
            input["confirmPassword"] = "";

            setValues(input);
            let data = JSON.parse(localStorage.user);
            data.password = values.password;
            data.confirmPassword = values.confirmPassword;

            localStorage.setItem("user", JSON.stringify(data));

            history.push("/");
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
        if (!input["confirmPassword"]) {
            isValid = false;
            errors["confirmPassword"] = "Please enter your confirm password.";
        }

        if (
            typeof input["password"] !== "undefined" &&
            typeof input["confirmPassword"] !== "undefined"
        ) {
            if (input["password"] !== input["confirmPassword"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }

        let data = JSON.parse(localStorage.getItem("user"));

        if (data.email !== input["email"]) {
            isValid = false;
            errors["email"] = "please put your logged in email";
        }
        JSON.stringify(localStorage.getItem("user"));
        setErrors(errors);

        return isValid;
    };

    return (
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
                        <Grid item xs={12}>
                            <FormControl
                                color="secondary"
                                className="form-control"
                            >
                                <InputLabel htmlFor="confirmPassword">
                                    confirm Password
                                </InputLabel>
                                <Input
                                    id="confirmPassword"
                                    type={
                                        values.showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={values.confirmPassword}
                                    onChange={handleChange("confirmPassword")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowConfirmPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                            >
                                                {values.showConfirmPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <Typography variant="body2" color="secondary">
                                    {errors["confirmPassword"]}
                                </Typography>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} className="area-actions">
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                type="submit"
                            >
                                Reset Password
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default ResetPassword;
