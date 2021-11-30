const db = require('./connection');
const { User, Tool, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Lawn & Garden' },
    { name: 'Air Compressors & Tools' },
    { name: 'Concrete & Masonry' },
    { name: 'Murder Weapons' },
  ]);

  console.log('categories seeded');

  await Tool.deleteMany();

  const tools = await Tool.insertMany([
    {
      name: "Chainsaw",
      description:
        "Our gas chain saws offering the power and flexibility needed for cutting down trees, clearing brush and chopping logs.",
      image: "cookie-tin.jpg",
      category: categories[0]._id,
      price: 21,
      quantity: 5,
    },
    {
      name: "Hedge Trimmer",
      description: "Our hedge trimmer is a garden power tool used to cut or trim plants in the garden or yard area.",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 21,
      quantity: 5,
    },
    {
      name: "Air Compressor",
      category: categories[1]._id,
      description:"ideal to support multiple trim finishing nailers, small framing/roofing jobs and all general inflation, blowing and smaller SCFM air tools.",
      image: "toilet-paper.jpg",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Nail Gun",
      category: categories[1]._id,
      description: "Our A nail gun is a smart tool for when you need to drive a lot of nails consistently and quickly. It can sink thousands of nails a day with excellent accuracy.",
      image: "soap.jpg",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Concrete Mixer",
      category: categories[2]._id,
      description:" Mixing concrete is typically hard work. Speed up your workflow and save your back with our top cement mixer.",
      image: "wooden-spoons.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Trowl",
      category: categories[2]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "camera.jpg",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Duct Tape",
      category: categories[3]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "tablet.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Bowie Knife",
      category: categories[3]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "bedtime-book.jpg",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Gloves",
      category: categories[3]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "spinning-top.jpg",
      price: 1.99,
      quantity: 1000,
    },
  ]);

  console.log('tools seeded');

  await User.deleteMany();

  // await User.create({
  //   firstName: 'Pamela',
  //   lastName: 'Washington',
  //   email: 'pamela@testmail.com',
  //   password: 'password12345',
  //   orders: [
  //     {
  //       tools: [tools[0]._id, tools[0]._id, tools[1]._id]
  //     }
  //   ]
  // });

  // await User.create({
  //   firstName: 'Elijah',
  //   lastName: 'Holt',
  //   email: 'eholt@testmail.com',
  //   password: 'password12345'
  // });
    const testUser = [
      {
        firstName: "Pamela",
        lastName: "Washington",
        email: "pamela@testmail.com",
        password: "password12345",
        orders: [
          {
            tools: [tools[0]._id, tools[0]._id, tools[1]._id],
          },
        ],
      },
      {
        firstName: "Elijah",
        lastName: "Holt",
        email: "eholt@testmail.com",
        password: "password12345",
        orders: [
          {
            tools: [tools[0]._id, tools[0]._id, tools[1]._id],
          }
        ]
      },
    ];
    
    await User.collection.insertMany(testUser);

  console.log('users seeded');

  process.exit();
});
