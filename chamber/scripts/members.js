document.addEventListener("DOMContentLoaded", function () {
    const businessContainer = document.getElementById("business-container");

    fetch("../../../wdd230/chamber/data/members.json")
        .then(response => response.json())
        .then(data => {
            const businesses = data.businesses;

            businesses.forEach(function (business) {
                const div = document.createElement("div");
                div.classList.add("business");


                const name = document.createElement("h2");
                name.textContent = business.name;

                const phone = document.createElement("p");
                phone.textContent = "Phone: " + business.phone;

                const address = document.createElement("p");
                address.textContent = "Address: " + business.address;

                const website = document.createElement("a");
                website.textContent = "Website";
                website.href = business.website;
                website.target = "_blank";

                const membership = document.createElement("p");
                membership.textContent = "Membership Level: " + business.membershiplevel;

                div.appendChild(name);
                div.appendChild(phone);
                div.appendChild(address);
                div.appendChild(website);
                div.appendChild(membership);

                businessContainer.appendChild(div);
            });
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
});
