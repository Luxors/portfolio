import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Product = defineTable({
  columns: {
    productId: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text({ optional: true }),
    price: column.number(),
    imageUrl: column.text(),
    isOnSale: column.boolean({ default: false }),
    isAvailable: column.boolean({ default: true }),
    isNewArrival: column.boolean({ default: false }),
    isBestSeller: column.boolean({ default: false }),
    isSpecialOffer: column.boolean({ default: false }),
    createdAt: column.date({ default: new Date() }),
    // categoryId: column.number({ references: () => Category.columns.id }), // так можно добавить связь с другой таблицей
  },
});

const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text({ optional: true }),
    createdAt: column.date({ default: new Date() }),
  },
});

export default defineDb({
  tables: { Product, Category },
});
