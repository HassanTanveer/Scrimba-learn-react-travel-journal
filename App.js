import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

import data from './data';

const App = () => {
    return (
        <>
            <Navbar/>
            {
                data.map((location, index) => {
                    return (
                        <Card
                            key={index}
                            title={location.title}
                            location={location.location}
                            googleMapsUrl={location.googleMapsUrl}
                            startDate={location.startDate}
                            endDate={location.endDate}
                            description={location.description}
                            imageUrl={location.imageUrl}
                        />
                    )
                })
            }
            <Card />
        </>
    )
}

export default App;