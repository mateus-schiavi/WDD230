document.addEventListener('DOMContentLoaded', function() {
    const rentalForm = document.getElementById('rental-form');

    rentalForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const vehicleType = document.getElementById('vehicle-type').value;
        const duration = document.getElementById('duration').value;
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (vehicleType !== "---------------" && duration !== "-------" && paymentMethod && name && email && phone) {
            // All necessary fields are filled, including payment method
            alert('Reserved with success');

            // Create an object to store the rental information
            const rentalInfo = {
                vehicleType: vehicleType,
                duration: duration,
                paymentMethod: paymentMethod.value,
                name: name,
                email: email,
                phone: phone
            };

            // Save rentalInfo object to local storage
            localStorage.setItem('rentalInformation', JSON.stringify(rentalInfo));

            rentalForm.reset();
        } else {
            // If any field is empty or payment method is not selected, display an error message
            alert('Please fill in all fields, including payment method.');
        }
    });
});

// For contact form, you can follow a similar approach
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const contactName = document.getElementById('contact-name').value.trim();
        const contactEmail = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!contactName || !contactEmail || !message) {
            // If any field is empty, display an error message and stop form submission
            alert('Please fill in all fields.');
        } else {
            // All fields are filled, display success message and reset the form
            alert('Message sent successfully');

            // Create an object to store the contact information
            const contactInfo = {
                contactName: contactName,
                contactEmail: contactEmail,
                message: message
            };

            // Save contactInfo object to local storage
            localStorage.setItem('contactInformation', JSON.stringify(contactInfo));

            contactForm.reset();
        }
    });
});
