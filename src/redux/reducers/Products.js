const initialState = [
  {
    name: "Street Bike 024",
    price: 800,
    description: "this will change your life",
    imageUrl:
      "https://www.bricklanebikes.co.uk/content/images/thumbs/0026783_bianchi-record-road-bike_1200.jpeg"
  },
  {
    name: "Saddle Up or Die",
    price: 1500,
    description: "Are you hardcore into saddle bags. this is the bike 4 u",
    imageUrl:
      "https://cdn.blessthisstuff.com/imagens/stuff/le-velo-vintage-bikes-4.jpg"
  },
  {
    name: "Beach Cruisin Baby",
    price: 400,
    description:
      "This was featured in a Lana Del Rey video, and ridden by 2Chainz",
    imageUrl:
      "http://www.nostalgic.net/wp-content/uploads/2015/04/Nate-Pense-Streamliner-1.jpg"
  }
];

export const Products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
