import React from "react"

const SlideBig = ({ location }) => {

    const liStyle = {
        width: "100%",
        float: "left",
        marginRight: "-100%",
        position: "relative",
        opacity: "1",
        display: "block",
        zIndex: "2"
    }
    
    return (
        <li style={liStyle} > 
            <img src={"img/home/" + location.city + "_big.jpeg"}/>
            <div className="meta">
                <h3>{location.city} {location.pitch}</h3>
                <div className="info">
                    <p>{location.location_count} hotel(s)</p>
                </div>
                <a href="tour-detail.html" className="btn_1">Read more</a>
            </div>
        </li>
    )
}

export default SlideBig