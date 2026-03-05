import { db, Product } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Product).values([
    {
      productId: 1,
      title: 'Even & Odd',
      price: 149.99,
      imageUrl: '/src/assets/images/newArrivals_item1.jpg',
      isAvailable: true,
    },
    {
      productId: 2,
      title: 'Anna Field',
      price: 3490,
      imageUrl: '/src/assets/images/newArrivals_item2.jpg',
      isAvailable: true,
      isOnSale: true,
    },
    {
      productId: 3,
      title: 'Bullo Decollete',
      price: 145.99,
      imageUrl: '/src/assets/images/newArrivals_item3.jpg',
      isAvailable: false,
    },
  ]);
}
