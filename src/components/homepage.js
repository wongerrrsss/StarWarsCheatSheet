import React from "react"


export default function homepage(props) {
    return (
        <div className="homepage-wrapper">
            <h2>Select your Page</h2>
            <button onClick={() => props.history.push("/people")}>People</button>
            <button onClick={() => props.history.push("/planets")}>Planets</button>
            <button onClick={() => props.history.push("/species")}>Species</button>
        </div>
    )
}