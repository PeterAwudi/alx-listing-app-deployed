import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: "1", title: "Cozy Apartment", description: "Nice place", price: 120 },
    { id: "2", title: "Beach House", description: "Ocean view", price: 200 },
  ]);
}
