import React from 'react'

const Card = ({
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
}) => {
    return (
        <div className="card-body">
            {imageUrl && (
                <img 
                    className="card-img"
                    src={imageUrl} 
                />
            )}
            <div className="card-content">
                <div className="card-location">
                    {googleMapsUrl && (
                        <>
                            <img src='../images/location.png' />
                            <span className="card-location-name">
                                {location}
                            </span>
                            <a href={googleMapsUrl}>View on Google Maps</a>
                        </>
                    )}
                </div>
                <div className="card-title">
                    {title}
                </div>
                <div className="card-dates">
                    {startDate}
                    &ensp; 
                    {endDate && (<>- {endDate}</>)}
                </div>
                <div className="card-description">
                    {description}
                </div>
            </div>
        </div>
    )    
}

export default Card;