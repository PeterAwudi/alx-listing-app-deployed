export default function handler(req, res) {
  res.status(200).json([
    { id: "1", title: "Cozy Apartment", description: "Nice place", price: 120 },
    { id: "2", title: "Beach House", description: "Ocean view", price: 200 },
  ]);
}
