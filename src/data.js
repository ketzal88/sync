let apartments = [
    {
      name: "Santa Monica",
      price: "$10,800",
      id: 0,
    },
    {
      name: "Stankonia",
      price: "$8,000",
      id: 1,
    },
    {
      name: "Ocean Avenue",
      price: "$9,500",
      id: 2,
    },
    {
      name: "Tubthumper",
      price: "$14,000",
      id: 3,
    },
    {
      name: "Wide Open Spaces",
      price: "$4,600",
      id: 4,
    },
  ];
  
  export function getApartments() {
    return apartments;
  }

  export function getApartment(id) {
    return apartments.find(
      (apartment) => apartment.id === id
    );
  }
