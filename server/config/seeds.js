const db = require('./connection');
const { User, Tool, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Lawn & Garden',
      _id: '61a57a32ec2d3775db3263dc'
  },
    { name: 'Air Compressors & Tools',
      _id: '61a57a32ec2d3775db3263dd'
  },
    { name: 'Concrete & Masonry',
      _id: '61a57a32ec2d3775db3263de'
  },
    { name: 'Murder Weapons',
      _id: '61a57a32ec2d3775db3263df'
  },
  ]);

  console.log('categories seeded');

  await Tool.deleteMany();

  const tools = await Tool.insertMany([
    {
      name: "CHAINSAW",
      description:
        "Our gas chain saws offering the power and flexibility needed for cutting down trees, clearing brush and chopping logs.",
      image: "0178200.png",
      category: categories[0]._id,
      price: 25,
      quantity: 13,
    },
    {
      name: "HEDGE TRIMMER",
      description: "Our hedge trimmer is a garden power tool used to cut or trim plants in the garden or yard area.",
      image: "0366700.png",
      category: categories[0]._id,
      price: 20,
      quantity: 11,
    },
    {
      name: "POST DIGGER-ONE MAN, GAS OPERATED",
      description: "Gas operated post digger, digs cylindrical wholes for posts of all kind.",
      image: "0101300.png",
      category: categories[0]._id,
      price: 50,
      quantity: 6,
    },
    {
      name: "LAWN MOWER- HIGH WEED",
      description: "Heavy duty Mower capable of large weeds, straw grass, high grass, large fields.",
      image: "0365500.png",
      category: categories[0]._id,
      price: 50,
      quantity: 5,
    },

    {
      name: "AIR COMPRESSOR-6.5CFM PORTABLE ELECTRIC",
      category: categories[1]._id,
      description:"Ideal for smaller jobs, electric portable CMF 6.5",
      image: "0030600.png",
      price: 25,
      quantity: 7,
    },
    {
      name: "SAND BLAST-3/4HP AMBIENT AIR PUMP W/HOS",
      category: categories[1]._id,
      description: "Medium sized sandblaster, 3/4 horse power. Powerful enough for most non-commercial jobs.",
      image: "0043800.png",
      price: 30,
      quantity: 5,
    },
    {
      name: "AIR TOOLS-HAMMER",
      category: categories[1]._id,
      description: "Model T Air Hammer, extreme accuracy and mobility in one.",
      image: "0041300.png",
      price: 20,
      quantity: 11,

    },
    {
      name: "AIR TOOLS-RIVET BUSTER 11 STROKE",
      category: categories[1]._id,
      description: "Quickly handle rivets with this 11 Stroke Air operated Rivet buster.",
      image: "0042720.png",
      price: 20,
      quantity: 9,

    },
    {
      name: "CONCRETE-1 YARD BUCKET",
      category: categories[2]._id,
      description:" Mixing concrete is typically hard work. Speed up your workflow and save your back with our top cement mixer.",
      image: "0197500.png",
      price: 30,
      quantity: 4,
    },
    {
      name: "CONCRETE-FLOOR GRINDER ELECTRIC",
      category: categories[2]._id,
      description:
        "Quickly prepare concrete pouring projects with our electric floor grinder.",
      image: "0182000.png",
      price: 45,
      quantity: 15,
    },
    {
      name: "FLOOR SANDER-17 ELECTRIC",
      category: categories[2]._id,
      description:
        "Prepare floors for concrete or masonry projects with our electric floor sander.",
      image: "0313400.png",
      price: 40,
      quantity: 12,
    },
    {
      name: "MIXER-CEMENT 9 CUBIC FOOT",
      category: categories[2]._id,
      description:
        "Perfect for home projects, driveways, patios, 9 cubic foot cement mixer.",
      image: "0230050.png",
      price: 45,
      quantity: 10,

    },
    {
      name: "PUMP-HYDROSTATIC TEST ELECTRIC",
      category: categories[3]._id,
      description:
        "Keep Your Systems Running At Their Prime testing pressured water systems with this Hydrostatic test electric pump.",
      image: "0701100.png",
      price: 40,
      quantity: 15,
    },
    {
      name: "PUMP-CENTRIFUGAL 2 GAS WSUCT & 50' DIS",
      category: categories[3]._id,
      description:
        "If an electric operated pump is not feasible for your project, a gas alternative might suit your needs.",
      image: "0702700.png",
      price: 12.00,
      quantity: 13,
    },
    {
      name: "HOSE-1 1/2 X50' RUBBER DISCHARGE",
      category: categories[3]._id,
      description:
        "50 feet of rubber house for attachments to you.",
      image: "0702200.png",
      price: 7,
      quantity: 100,
    },
    {
      name: "PUMP-TRASH 6 TOW DSL W/SUCT & 50' DISCH",
      category: categories[3]._id,
      description:
        "Pump out dirty water or flooded areas with this heavy duty towable trash Pump 50'",
      image: "0707600.png",
      price: 75,
      quantity: 6,

    }
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
