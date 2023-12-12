// Dados correspondentes a cada imagem

// Dados correspondentes a cada imagem
const imageInformation = [
    {
        description: {
            'Name': 'Honda Metropolitan Scooter',
            'Engine Type': '49cc liquid-cooled horizontal single-cylinder',
            'Bore and Stroke': '39.5mm x 40.3mm',
            'Compression Ratio': '12.0:1',
            'Valve Train': 'SOHC; two valves per cylinder',
            'Induction': 'Programmed fuel injection; 19mm throttle body',
            'Transmission': 'Automatic V-Matic belt drive',
            'Front Suspension': 'Telescopic fork; 2.8-inch travel',
            'Rear Suspension': 'Single shock; 2.4-inch travel',
            'Front Brake': 'Cable-actuated 95mm drum',
            'Rear Brake': 'Cable-actuated 110mm drum; Combined Braking System (CBS)',
            'Front Tire': '80/100-10',
            'Rear Tire': '80/100-10Rake',
            'Rake': '26.5°',
            'Trail': '3.0 inches',
            'Wheelbase': '46.5 inches',
            'Seat Height': '28.3 inches',
            'Curb Weight': '179 pounds (Includes all standard equipment, required fluids and full tank of fuel)',
            'Fuel Capacity': '1.2 gallons',
            'Miles Per Gallon': 'TBD MPG - Honda\'s fuel economy estimates are based on EPA exhaust emission measurement test procedures and are intended for comparison purposes only. Your actual mileage will vary depending on how you ride,'
            + 'how you maintain your vehicle, weather, road conditions, tire pressure, installation of accessories, cargo, rider and passenger weight, and other factors.'
        }
    },
    {
        description: {
            'Name': 'Honda Dio Scooter',
            'Engine Type': 'Fan Cooled, 4 Stroke, SI Engine',
            'No. of Valves per Cylinder': '2',
            'Max. Power Output': '8 hp @7000 rpm',
            'Max. Torque': '8.91 Nm @ 5500 rpm',
            'Fuel Delivery': 'Carburation',
            'Fuel Tank Capacity (liters)': '5.3',
            'Starter': 'Self/Kick',
            'Ignition System': 'Capacitor Discharge',
            'Battery Capacity': '12V 3A (MF)',
            'Transmission Type': 'V-matic',
            'Clutch': 'N/A',
            'Dimensions': '1781 x 710 x 1133',
            'Frame type': 'Under-bone',
            'Ground Clearance (mm)': '158',
            'Kerb Weight(kg)': '104(max)',
            'Seat Height(mm)': '765',
            'Wheelbase(mm)': '1238',
            'Suspension front': 'Spring Loaded Hydraulic Type',
            'Suspension rear': 'Spring Loaded Hydraulic Type',
            'Tire-size front': '90/100-10 53J (Tubeless)',
            'Tire-size rear': '90/100-10 53J (Tubeless)',
            'ABS System': 'N/A',
            'Brakes front': 'Drum 130 mm',
            'Brakes rear': 'Drum 130 mm(CBS)',
            'Instruments': 'Digital Meter',
            'Headlights': 'LED'
        }
    },
    {
        description: {
            'Name:': 'Honda PCX 150 Scooter',
            'Engine Type': 'Fan Cooled, 4 Stroke, SI Engine',
            'No. of Valves per Cylinder': '2',
            'Max. Power Output': '8 hp @7000 rpm',
            'Max. Torque': '8.91 Nm @ 5500 rpm',
            'Fuel Delivery': 'Carburation',
            'Fuel Tank Capacity (liters)': '5.3',
            'Starter': 'Self/Kick',
            'Ignition System': 'Capacitor Discharge',
            'Battery Capacity': '12V 3A (MF)',
            'Transmission Type': 'V-matic',
            'Clutch': 'N/A',
            'Dimensions': '1781 x 710 x 1133',
            'Frame type': 'Under-bone',
            'Ground Clearance (mm)': '158',
            'Kerb Weight(kg)': '104(max)',
            'Seat Height(mm)': '765',
            'Wheelbase(mm)': '1238',
            'Suspension front': 'Spring Loaded Hydraulic Type',
            'Suspension rear': 'Spring Loaded Hydraulic Type',
            'Tire-size front': '90/100-10 53J (Tubeless)',
            'Tire-size rear': '90/100-10 53J (Tubeless)',
            'ABS System': 'N/A',
            'Brakes front': 'Drum 130 mm',
            'Brakes rear': 'Drum 130 mm(CBS)',
            'Instruments': 'Digital Meter',
            'Headlights': 'LED'
        }
    },
    {
        description: {
            'Name:': 'Honda Pioneer ATV ',
            'Engine Type': '675cc liquid-cooled OHV single-cylinder four-stroke',
            'Bore and Stroke': '102.0 mm x 82.6 mm',
            'Compression Ratio': '9.2:1',
            'Induction': 'Fuel Injection (PGM-FI); 40 mm throttle body',
            'Valve Train': 'OHV; four valves per cylinder',
            'Clutch': 'Automatic',
            'Transmission': 'Automotive-style automatic transmission with hydraulic torque converter, three forward gears and Reverse. Three drive modes include 2WD, 4WD and 4WD with Differential lock. AT/MT modes with paddle shifting on the deluxe and Forest models.',
            'Driveline': 'Direct front and rear driveshafts',
            'Front Suspension': 'Independent double-wishbone; 7.9-inch travel',
            'Rear Suspension': 'Independent double-wishbone; 7.9-inch travel',
            'Front Brake': 'Dual 200 mm hydraulic discs',
            'Rear Brake': 'Single 170 mm hydraulic disc',
            'Front Tires': '25 x 8-12',
            'Rear Tires': '25 x 10-12',
            'Length': '114.8 inches',
            'Width': '59.9 inches',
            'Height': '77.6 inches',
            'Wheelbase': '76.8 inches',
            'Bed Capacity': '1000 pounds',
            'Towing Capacity': '1500 pounds',
            'Ground Clearance': '10.8 inches',
            'Turning Radius': '14.8 feet',
            'Curb Weight': '1292 pounds - Includes all standard equipment, required fluids and full tank of fuel.',
            'Fuel Capacity': '8.1 gallons, including 1.5-gallon reserve',
            'Safety': 'Recommended for Drivers 16 years of age and older',
            'Available Colors': 'Avenger Red, Black Forest Green, Sandstone Beige',
            'Model ID': 'SXS700M2'
        }
    }
];

const vehicleGallery = document.querySelector('.vehicle-gallery');

imageInformation.forEach((item, index) => {
    const vehicleItem = document.querySelector(`.vehicle-item:nth-child(${index + 1})`);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('vehicle-description');

    const detailList = document.createElement('ul');
    detailList.classList.add('vehicle-details'); // Classe para os detalhes do veículo

    // Adicionando as informações de cada imagem como itens da lista à descrição
    for (const [key, value] of Object.entries(item.description)) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        detailList.appendChild(listItem);
    }

    descriptionDiv.appendChild(detailList);
    vehicleItem.appendChild(descriptionDiv);
});
