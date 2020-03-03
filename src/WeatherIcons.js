import React, {Component} from "react";

class WeatherIcons extends Component {
    render() {
        if (this.props.description === "Clear") {
            return (
                <div className="icon">
                    <div className="icon-clear"/>
                </div>
            );
        }
        if (this.props.description === "Thunderstorm") {
            return (
                <div className="icon">
                    <div className="icon-thunderstorm"/>
                </div>
            );
        }
        if (this.props.description === "Drizzle") {
            return (
                <div className="icon">
                    <div className="icon-drizzle"/>
                </div>
            );
        }
        if (this.props.description === "Rain") {
            return (
                <div className="icon">
                    <div className="icon-rain"/>
                </div>
            );
        }
        if (this.props.description === "Snow") {
            return (
                <div className="icon">
                    <div className="icon-snow"/>
                </div>
            );
        }
        if (this.props.description === "Atmosphere") {
            return (
                <div className="icon">
                    <div className="icon-atmosphere"/>
                </div>
            );
        }
        if (this.props.description === "Clouds") {
            return (
                <div className="icon">
                    <div className="icon-clouds"/>
                </div>
            );
        }
    }
}

export default WeatherIcons;