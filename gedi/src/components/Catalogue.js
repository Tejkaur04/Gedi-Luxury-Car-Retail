// Catalogue.js
import React, { useState } from 'react';
import './catalogue.css';
import './singlecar.css';

function Catalogue() {
  const carData = [
    {
        id: 1,
        category: "Coupe",
        title: "Ferrari 296 GTB",
        price: "₹5,25,00,000",
        emi: "EMI Starts @ ₹9,02,743.82",
        imgSrc: "https://images.pexels.com/photos/16345861/pexels-photo-16345861.jpeg",
        link: "singlecar.html"
    },
    {
        id: 2,
        category: "Coupe",
        title: "Audi Q8 55 TFSI Celebration",
        price: "₹72,00,000",
        emi: "EMI Starts @ ₹1,23,804.87",
        imgSrc: "https://images.pexels.com/photos/18371003/pexels-photo-18371003.jpeg",
        link: "#"
    },
    {
        id: 3,
        category: "SUV",
        title: "BMW M4 Competition X4 Drive",
        price: "₹1,53,00,000",
        emi: "EMI Starts @ ₹1,01,451.21",
        imgSrc: "https://images.pexels.com/photos/24426351/pexels-photo-24426351.jpeg",
        link: "test.html"
    },
    {
        id: 4,
        category: "SUV",
        title: "Range Rover Evoque",
        price: "₹65,00,000",
        emi: "EMI Starts @ ₹1,10,500.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 5,
        category: "Sedan",
        title: "Mercedes-Benz S-Class",
        price: "₹2,17,00,000",
        emi: "EMI Starts @ ₹3,75,000.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 6,
        category: "Hatchback",
        title: "Volkswagen Polo GT",
        price: "₹12,00,000",
        emi: "EMI Starts @ ₹20,100.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 7,
        category: "Coupe",
        title: "Porsche 911 Carrera",
        price: "₹1,99,00,000",
        emi: "EMI Starts @ ₹3,43,000.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 8,
        category: "Sedan",
        title: "Audi A8 L",
        price: "₹1,57,00,000",
        emi: "EMI Starts @ ₹2,70,000.00",
        imgSrc: "https://images.pexels.com/photos/18371003/pexels-photo-18371003.jpeg",
        link: "#"
    },
    {
        id: 9,
        category: "SUV",
        title: "Lamborghini Urus",
        price: "₹3,15,00,000",
        emi: "EMI Starts @ ₹5,42,000.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 10,
        category: "Hatchback",
        title: "Mini Cooper S",
        price: "₹35,00,000",
        emi: "EMI Starts @ ₹60,500.00",
        imgSrc: "https://images.pexels.com/photos/1381816/pexels-photo-1381816.jpeg",
        link: "#"
    },
    {
        id: 11,
        category: "Coupe",
        title: "Aston Martin Vantage",
        price: "₹3,00,00,000",
        emi: "EMI Starts @ ₹5,15,000.00",
        imgSrc: "https://images.pexels.com/photos/19986977/pexels-photo-19986977.jpeg",
        link: "#"
    },
    {
        id: 12,
        category: "SUV",
        title: "Bentley Bentayga",
        price: "₹4,10,00,000",
        emi: "EMI Starts @ ₹7,08,000.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 13,
        category: "Sedan",
        title: "Jaguar XF",
        price: "₹55,00,000",
        emi: "EMI Starts @ ₹94,000.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    },
    {
        id: 14,
        category: "Hatchback",
        title: "BMW 1 Series",
        price: "₹29,00,000",
        emi: "EMI Starts @ ₹49,500.00",
        imgSrc: "https://images.pexels.com/photos/24426351/pexels-photo-24426351.jpeg",
        link: "#"
    },
    {
        id: 15,
        category: "SUV",
        title: "Ford Endeavour",
        price: "₹35,00,000",
        emi: "EMI Starts @ ₹60,000.00",
        imgSrc: "https://images.pexels.com/photos/18231632/pexels-photo-18231632.jpeg",
        link: "#"
    }
];



const [activeCategory, setActiveCategory] = useState("all");
const [selectedCar, setSelectedCar] = useState(null);

const filterSelection = (category) => {
    setActiveCategory(category);
};

const filteredCars = carData.map(car => ({
    ...car,
    isVisible: activeCategory === "all" || car.category === activeCategory
}));

const handleCarClick = (car) => {
    setSelectedCar(car);
};

return (
    <div className="catalogue-component">
        {selectedCar ? (
            <SingleCar car={selectedCar} onBack={() => setSelectedCar(null)} />
        ) : (
            <div className="card text-center">
                <div className="card-header">
                    <button className={`btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => filterSelection('all')}>Show all</button>
                    <button className={`btn ${activeCategory === 'Coupe' ? 'active' : ''}`} onClick={() => filterSelection('Coupe')}>Coupe/Sportscar</button>
                    <button className={`btn ${activeCategory === 'SUV' ? 'active' : ''}`} onClick={() => filterSelection('SUV')}>SUV</button>
                    <button className={`btn ${activeCategory === 'Sedan' ? 'active' : ''}`} onClick={() => filterSelection('Sedan')}>Sedan</button>
                    <button className={`btn ${activeCategory === 'Hatchback' ? 'active' : ''}`} onClick={() => filterSelection('Hatchback')}>Hatchback</button>
                </div>
                <div className="card-body">
                    <div className="card-group">
                        {filteredCars.map(car => (
                            <CarCard key={car.id} car={car} onClick={() => handleCarClick(car)} />
                        ))}
                        
                    </div>
                </div>
            </div>
        )}
    </div>
);
}

function CarCard({ car, onClick }) {
return (
    <div className={`filterDiv ${car.category} ${car.isVisible ? "show" : ""}`} onClick={onClick}>
        <img src={car.imgSrc} className="card-img-top" alt={car.title} />
        <div className="card-body">
            <h5 className="card-title">{car.title}</h5>
            <h6 className="card-title">{car.price}</h6>
            <p className="card-text">{car.emi}</p>
            <button className="btn btn-primary">Know More</button>
        </div>
    </div>
);
}

function SingleCar({ car, onBack }) {
return (
    <div className="single-car-view">
        <button className="btn btn-secondary" onClick={onBack}>Back to Catalogue</button>
        <div className="navbox">
            {/* Navbar content from your HTML */}
        </div>
        <div className="name">
            <h3>{car.title}</h3>
        </div>
        <div className="flex-container">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car.imgSrc} className="d-block w-100" alt="..." />
                    </div>
                    {/* Additional images here if available */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="ramram">
                <button type="button" className="btn btn-warning btn-lg w-100">Reserve Now</button>
            </div>
            <div className="content">
                <div className="ses">
                    <p className="intro">Description of the car goes here.</p>
                    <h5>Specifications & Features</h5>
                    <div className="flexi">
                        {/* Features icons and descriptions */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Catalogue;