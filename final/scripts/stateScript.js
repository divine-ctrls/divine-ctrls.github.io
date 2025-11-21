// State data object
const statesData = {
    "Connecticut": {
        name: "Connecticut",
        governor: "Ned Lamont (D)",
        size: "5543 sq mi",
        population: "3,605,944 (2020)",
        founded: "January 9, 1788 (5th state)",
        homepage: "https://www.ct.gov",
        statehouse: "/images/ct-statehouse.jpg/",
        stateBird: "/images/ct-bird.jpg",
        stateFlower: "/images/ct-flower.jpg",
        birdName: "American Robin",
        flowerName: "Mountain Laurel"
    },
    "Maine": {
        name: "Maine",
        governor: "Janet Mills (D)",
        size: "35,385 sq mi",
        population: "1,362,359 (2020)",
        founded: "March 15, 1820 (23rd state)",
        homepage: "https://www.maine.gov",
        statehouse: "/images/me-statehouse.jpg/",
        stateBird: "/images/me-bird.jpg",
        stateFlower: "/images/me-flower.jpg",
        birdName: "Black-capped Chickadee",
        flowerName: "White Pine Cone and Tassel"
    },
    "Massachusetts": {
        name: "Massachusetts",
        governor: "Maura Healey (D)",
        size: "10,555 sq mi",
        population: "6,981,974 (2020)",
        founded: "February 6, 1788 (6th state)",
        homepage: "https://www.mass.gov",
        statehouse: "/images/ma-statehouse.jpg/",
        stateBird: "/images/ma-bird.jpg",
        stateFlower: "/images/ma-flower.jpg",
        birdName: "Black-capped Chickadee",
        flowerName: "Mayflower"
    },
    "New Hampshire": {
        name: "New Hampshire",
        governor: "Chris Sununu (R)", 
        size: "8,968 sq mi",
        population: "1,356,458 (2012)",
        founded: "June 21, 1788 (9th state)",
        homepage: "https://www.nh.gov",
        statehouse: "/images/nh-statehouse.jpg/",
        stateBird: "/images/nh-bird.jpg",
        stateFlower: "/images/nh-flower.jpg",
        birdName: "Purple Finch",
        flowerName: "Purple Lilac"
    },
    "Rhode Island": {
        name: "Rhode Island",
        governor: "Daniel McKee (D)",
        size: "1,214 sq mi",
        population: "1,097,379 (2020)",
        founded: "May 29, 1790 (13th state)",
        homepage: "https://www.ri.gov",
        statehouse: "/images/ri-statehouse.jpg/",
        stateBird: "/images/ri-bird.jpg",
        stateFlower: "/images/ri-flower.jpg",
        birdName: "Rhode Island Red",
        flowerName: "Violet"
    },
    "Vermont": {
        name: "Vermont",
        governor: "Phil Scott (R)",
        size: "9,614 sq mi",
        population: "643,077 (2020)",
        founded: "March 4, 1791 (14th state)",
        homepage: "https://www.vermont.gov",
        statehouse: "/images/vt-statehouse.jpg/",
        stateBird: "/images/vt-bird.jpg",
        stateFlower: "/images/vt-flower.jpg",
        birdName: "Hermit Thrush",
        flowerName: "Red Clover"
    }
};

// Function to display state information
function displayState(stateName) {
    const state = statesData[stateName];

    // Update State Name Panel
    const stateNameDiv = document.getElementById("stateName");
    stateNameDiv.innerHTML = `<h2>${state.name}</h2>`;

    // Update Key Facts Panel
    const stateFactsDiv = document.getElementById("stateFacts");
    stateFactsDiv.innerHTML = `
        <p><strong>Governor:</strong> ${state.governor}</p>
        <p><strong>Size:</strong> ${state.size}</p>
        <p><strong>Population:</strong> ${state.population}</p>
        <p><strong>Founded:</strong> ${state.founded}</p>
        <p><strong>Homepage:</strong> <a href="${state.homepage}" target="_blank">${state.homepage}</a></p>
    `;

    // Update Images Panel
    const stateImagesDiv = document.getElementById("stateImages");
    stateImagesDiv.innerHTML = `
        <div>
            <img src="${state.statehouse}" alt="${state.name} Statehouse">
            <p>Statehouse</p>
        </div>
        <div>
            <img src="${state.stateBird}" alt="${state.birdName}">
            <p>State Bird: ${state.birdName}</p>
        </div>
        <div>
            <img src="${state.stateFlower}" alt="${state.flowerName}">
            <p>State Flower: ${state.flowerName}</p>
        </div>
    `;
}