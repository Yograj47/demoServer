const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const products = {
  data: {
    hasNextPage: true,
    hasPrevPage: false,
    limit: 10,
    nextPage: 2,
    page: 1,
    prevPage: null,
    products: [
      {
        __v: 0,
        _id: "649e792a64e7dba29b7266f0",
        category: "649e792a64e7dba29b7265fe",
        createdAt: "2023-06-30T06:41:46.445Z",
        description:
          "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        mainImage: {
          _id: "649e792a64e7dba29b7266f1",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=4496371623133184",
        },
        name: "Recycled Granite Gloves",
        owner: "649e792964e7dba29b7263a4",
        price: 413,
        stock: 47,
        subImages: [
          {
            _id: "649e792a64e7dba29b7266f2",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5094563479814144",
          },
          {
            _id: "649e792a64e7dba29b7266f3",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=1134715742453760",
          },
          {
            _id: "649e792a64e7dba29b7266f4",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=1975560538423296",
          },
          {
            _id: "649e792a64e7dba29b7266f5",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=4972727878287360",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.445Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b7266f6",
        category: "649e792a64e7dba29b72660f",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        mainImage: {
          _id: "649e792a64e7dba29b7266f7",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=6393156033576960",
        },
        name: "Fantastic Rubber Bike",
        owner: "649e792964e7dba29b726362",
        price: 279,
        stock: 94,
        subImages: [
          {
            _id: "649e792a64e7dba29b7266f8",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=4576081554178048",
          },
          {
            _id: "649e792a64e7dba29b7266f9",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5055349610512384",
          },
          {
            _id: "649e792a64e7dba29b7266fa",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=10303488131072",
          },
          {
            _id: "649e792a64e7dba29b7266fb",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6038712513200128",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b7266fc",
        category: "649e792a64e7dba29b7265ff",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        mainImage: {
          _id: "649e792a64e7dba29b7266fd",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=5744853168160768",
        },
        name: "Practical Granite Fish",
        owner: "649e792964e7dba29b7263a7",
        price: 466,
        stock: 179,
        subImages: [
          {
            _id: "649e792a64e7dba29b7266fe",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=3441473867481088",
          },
          {
            _id: "649e792a64e7dba29b7266ff",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=8111664301867008",
          },
          {
            _id: "649e792a64e7dba29b726700",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=3862151565410304",
          },
          {
            _id: "649e792a64e7dba29b726701",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6567648261308416",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b726702",
        category: "649e792a64e7dba29b7265fd",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        mainImage: {
          _id: "649e792a64e7dba29b726703",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=606640741023744",
        },
        name: "Ergonomic Bronze Bike",
        owner: "649e792964e7dba29b72635c",
        price: 307,
        stock: 191,
        subImages: [
          {
            _id: "649e792a64e7dba29b726704",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6442862795292672",
          },
          {
            _id: "649e792a64e7dba29b726705",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=2371933953851392",
          },
          {
            _id: "649e792a64e7dba29b726706",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=4393796584341504",
          },
          {
            _id: "649e792a64e7dba29b726707",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5321613016825856",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b726708",
        category: "649e792a64e7dba29b726604",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        mainImage: {
          _id: "649e792a64e7dba29b726709",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=5380877301317632",
        },
        name: "Bespoke Steel Bacon",
        owner: "649e792964e7dba29b726350",
        price: 388,
        stock: 173,
        subImages: [
          {
            _id: "649e792a64e7dba29b72670a",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=2848776649703424",
          },
          {
            _id: "649e792a64e7dba29b72670b",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6466610193760256",
          },
          {
            _id: "649e792a64e7dba29b72670c",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=1743350378004480",
          },
          {
            _id: "649e792a64e7dba29b72670d",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=2921780706541568",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b72670e",
        category: "649e792a64e7dba29b726608",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        mainImage: {
          _id: "649e792a64e7dba29b72670f",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=7766081066237952",
        },
        name: "Unbranded Bronze Tuna",
        owner: "649e792964e7dba29b72635c",
        price: 297,
        stock: 153,
        subImages: [
          {
            _id: "649e792a64e7dba29b726710",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5685355403542528",
          },
          {
            _id: "649e792a64e7dba29b726711",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=1859170695380992",
          },
          {
            _id: "649e792a64e7dba29b726712",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=8693214848483328",
          },
          {
            _id: "649e792a64e7dba29b726713",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=2093119717769216",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b726714",
        category: "649e792a64e7dba29b726606",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        mainImage: {
          _id: "649e792a64e7dba29b726715",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=8709180300984320",
        },
        name: "Elegant Wooden Shoes",
        owner: "649e792964e7dba29b7263bf",
        price: 221,
        stock: 160,
        subImages: [
          {
            _id: "649e792a64e7dba29b726716",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5432495300411392",
          },
          {
            _id: "649e792a64e7dba29b726717",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5885583557656576",
          },
          {
            _id: "649e792a64e7dba29b726718",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=5222836027260928",
          },
          {
            _id: "649e792a64e7dba29b726719",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6634133918842880",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b72671a",
        category: "649e792a64e7dba29b72660d",
        createdAt: "2023-06-30T06:41:46.446Z",
        description:
          "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        mainImage: {
          _id: "649e792a64e7dba29b72671b",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=3673276010201088",
        },
        name: "Practical Bronze Computer",
        owner: "649e792964e7dba29b7263a4",
        price: 361,
        stock: 137,
        subImages: [
          {
            _id: "649e792a64e7dba29b72671c",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=516012931809280",
          },
          {
            _id: "649e792a64e7dba29b72671d",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=7868442717716480",
          },
          {
            _id: "649e792a64e7dba29b72671e",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=8064180544339968",
          },
          {
            _id: "649e792a64e7dba29b72671f",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=8879073333870592",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.446Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b726720",
        category: "649e792a64e7dba29b726607",
        createdAt: "2023-06-30T06:41:46.447Z",
        description:
          "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        mainImage: {
          _id: "649e792a64e7dba29b726721",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=1989480753922048",
        },
        name: "Luxurious Soft Towels",
        owner: "649e792964e7dba29b7263c5",
        price: 302,
        stock: 133,
        subImages: [
          {
            _id: "649e792a64e7dba29b726722",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=3067061530001408",
          },
          {
            _id: "649e792a64e7dba29b726723",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=7932942139523072",
          },
          {
            _id: "649e792a64e7dba29b726724",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=7902888368013312",
          },
          {
            _id: "649e792a64e7dba29b726725",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6054974914035712",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.447Z",
      },
      {
        __v: 0,
        _id: "649e792a64e7dba29b726726",
        category: "649e792a64e7dba29b726608",
        createdAt: "2023-06-30T06:41:46.447Z",
        description:
          "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        mainImage: {
          _id: "649e792a64e7dba29b726727",
          localPath: "",
          url: "https://loremflickr.com/640/480/product?lock=6117651933822976",
        },
        name: "Awesome Wooden Gloves",
        owner: "649e792964e7dba29b726368",
        price: 452,
        stock: 55,
        subImages: [
          {
            _id: "649e792a64e7dba29b726728",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=4436856554913792",
          },
          {
            _id: "649e792a64e7dba29b726729",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=6838954552721408",
          },
          {
            _id: "649e792a64e7dba29b72672a",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=2487662105591808",
          },
          {
            _id: "649e792a64e7dba29b72672b",
            localPath: "",
            url: "https://loremflickr.com/640/480/product?lock=1152004617404416",
          },
        ],
        updatedAt: "2023-06-30T06:41:46.447Z",
      },
    ],
    serialNumberStartFrom: 1,
    totalPages: 5,
    totalProducts: 50,
  },
  message: "Products fetched successfully",
  statusCode: 200,
  success: true,
};

app.use(cors());
app.use(express.json());

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
  const onlyProduct = products.data.products;
  const product = onlyProduct.find((p) => p._id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running at :${PORT}`);
});
