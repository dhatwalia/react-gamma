const F1Garage = () => {
    const cars = [
        { position: 1, brand: 'Mercedes' },
        { position: 2, brand: 'Redbull' },
        { position: 3, brand: 'Ferrari' },
        { position: 4, brand: 'McLaren' },
        { position: 5, brand: 'Alpine' },
        { position: 6, brand: 'AlphaTauri' },
        { position: 7, brand: 'Aston Martin' },
        { position: 8, brand: 'Williams' },
        { position: 9, brand: 'Alfa Romeo' },
        { position: 10, brand: 'Haas' },
    ];
    return (
        <div>
            <h2>F1 2021 standing</h2>
            <ol>
                {cars.map((car) => <li>{car.brand} is in position {car.position}</li>)}
            </ol>
        </div>
    );
};

export default F1Garage;