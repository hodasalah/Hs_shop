import { Star } from "@material-ui/icons";
import React, { Component } from "react";
import "./Star.css";
export default class Stars extends Component {
    state = {
        rating: this.props.rating,
        hover: null,
    };
    setRating = (val) => {
        this.setState({ rating: val });
    };
    setHover = (val) => {
        this.setState({ hover: val });
    };
    render() {
        return (
            <div className="stars">
                {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => this.setRating(ratingValue)}
                            />
                            <Star
                                style={{
                                    fontSize: "20px",
                                    fill:
                                        ratingValue <=
                                        (this.state.rating || this.state.hover)
                                            ? "#e12128"
                                            : "#ccc",
                                }}
                                onMouseEnter={() => this.setHover(ratingValue)}
                                onMouseLeave={() => this.setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
        );
    }
}
