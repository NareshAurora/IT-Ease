// import RootLayout from "@/app/layout";
// import React, { useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Cisco Catalyst 2960 Series Switches",
//     description: "High-performance router for enterprise networking.",
//     price: 1250,
//     brand: "Cisco",
//     condition: "Refurbished",
//     availability: "In stock",
//     image: "/images/products/Cisco Catalyst 2960 Series Switches.jpeg",
//   },
//   {
//     id: 2,
//     name: "Cisco Catalyst 3750 Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 300,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco Catalyst 3750 Series Switches.jpeg",
//   },
//   {
//     id: 3,
//     name: "Cisco Catalyst 3850 Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 900,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco Catalyst 3850 Series Switches.jpeg",
//   },
//   {
//     id: 4,
//     name: "Cisco Catalyst 4500 Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 980,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco Catalyst 4500 Series Switches.jpeg",
//   },
//   {
//     id: 5,
//     name: "Cisco Catalyst 4900 Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 1460,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco Catalyst 4900 Series Switches.jpeg",
//   },
//   {
//     id: 6,
//     name: "Cisco Catalyst 6500 Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 1140,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco Catalyst 6500 Series Switches.jpeg",
//   },
//   {
//     id: 7,
//     name: "Cisco UCS C220 M4 server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 320,
//     brand: "Cisco",
//     condition: "Refurbished",
//     availability: "Pre-order",
//     image: "/images/products/Cisco UCS C220 M4 server.jpeg",
//   },
//   {
//     id: 8,
//     name: "Cisco UCS C220 M6 server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 432,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco UCS C220 M6 server.jpeg",
//   },
//   {
//     id: 9,
//     name: "Cisco UCS C240 M6 server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 500,
//     brand: "Cisco",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Cisco UCS C240 M6 server.jpeg",
//   },
//   {
//     id: 10,
//     name: "Dell PowerEdge M820 Server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 570,
//     brand: "Dell",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Dell PowerEdge M820 Server.jpeg",
//   },
//   {
//     id: 11,
//     name: "Dell PowerEdge M830 Server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 750,
//     brand: "Dell",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Dell PowerEdge M830 Server.jpeg",
//   },
//   {
//     id: 12,
//     name: "Dell PowerEdge R530 Server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 690,
//     brand: "Dell",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Dell PowerEdge R530 Server.jpeg",
//   },
//   {
//     id: 13,
//     name: "Dell PowerEdge R640 Server",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 1230,
//     brand: "Dell",
//     condition: "Refurbished",
//     availability: "Pre-order",
//     image: "/images/products/Dell PowerEdge R640 Server.jpeg",
//   },
//   {
//     id: 14,
//     name: "Huawei CE6851-Series SwitcheS",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 1760,
//     brand: "Huawei",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Huawei CE6851-Series SwitcheS.jpeg",
//   },
//   {
//     id: 15,
//     name: "Huawei S6700-Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 1900,
//     brand: "Huawei",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Huawei S6700-Series Switches.jpeg",
//   },
//   {
//     id: 16,
//     name: "Huawei S6720-Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 150,
//     brand: "Huawei",
//     condition: "Refurbished",
//     availability: "Pre-order",
//     image: "/images/products/Huawei S6720-Series Switches.jpeg",
//   },
//   {
//     id: 17,
//     name: "Huawei S6730-Series Switches",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 200,
//     brand: "Huawei",
//     condition: "New",
//     availability: "Pre-order",
//     image: "/images/products/Huawei S6730-Series Switches.jpeg",
//   },
//   {
//     id: 18,
//     name: "S5700 Series Switches.jpeg",
//     description: "Reliable switch for seamless data connectivity.",
//     price: 1800,
//     brand: "Huawei",
//     condition: "Refurbished",
//     availability: "Pre-order",
//     image: "/images/products/S5700 Series Switches.jpeg",
//   },
// ];

// const categories = [
//   "Routers",
//   "Switches",
//   "Firewalls",
//   "VoIP Systems",
//   "Enterprise Servers",
//   "Storage Solutions",
//   "Wireless Equipment",
// ];

// const ProductsPage = () => {
//   const [selectedBrand, setSelectedBrand] = useState([]);
//   const [selectedCondition, setSelectedCondition] = useState([]);
//   const [priceRange, setPriceRange] = useState([100, 1000]);
//   const [selectedAvailability, setSelectedAvailability] = useState([]);

//   // Filtering logic based on selected filters
//   const filteredProducts = products.filter((product) => {
//     const matchesBrand =
//       selectedBrand.length === 0 || selectedBrand.includes(product.brand);
//     const matchesCondition =
//       selectedCondition.length === 0 ||
//       selectedCondition.includes(product.condition);
//     const matchesAvailability =
//       selectedAvailability.length === 0 ||
//       selectedAvailability.includes(product.availability);
//     const matchesPriceRange =
//       product.price >= priceRange[0] && product.price <= priceRange[1];

//     return (
//       matchesBrand &&
//       matchesCondition &&
//       matchesAvailability &&
//       matchesPriceRange
//     );
//   });

//   // Handle filter changes
//   const handleBrandChange = (e) => {
//     const brand = e.target.value;
//     setSelectedBrand((prev) =>
//       prev.includes(brand)
//         ? prev.filter((item) => item !== brand)
//         : [...prev, brand]
//     );
//   };

//   const handleConditionChange = (e) => {
//     const condition = e.target.value;
//     setSelectedCondition((prev) =>
//       prev.includes(condition)
//         ? prev.filter((item) => item !== condition)
//         : [...prev, condition]
//     );
//   };

//   const handleAvailabilityChange = (e) => {
//     const availability = e.target.value;
//     setSelectedAvailability((prev) =>
//       prev.includes(availability)
//         ? prev.filter((item) => item !== availability)
//         : [...prev, availability]
//     );
//   };

//   const handlePriceRangeChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     const name = e.target.name;
//     setPriceRange((prev) =>
//       name === "min" ? [value, prev[1]] : [prev[0], value]
//     );
//   };

//   return (
//     <RootLayout>
//       <div className="max-w-7xl mx-auto p-6 pt-28">
//         {/* Header */}
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-bold">
//             Explore Our Range of Refurbished Network Hardware
//           </h1>
//         </header>

//         <div className="flex space-x-8">
//           {/* Sidebar - Category Navigation */}
//           <aside className="w-1/4">
//             <h2 className="text-2xl font-semibold mb-4">Categories</h2>
//             <ul className="space-y-2">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <a
//                     href={`#${category.toLowerCase()}`}
//                     className="text-blue-500 hover:underline"
//                   >
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </aside>

//           {/* Main Content */}
//           <main className="w-3/4">
//             {/* Filters */}
//             <div className="mb-8">
//               <h2 className="text-2xl font-semibold mb-4">Filters</h2>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 {/* Brand Filter */}
//                 <div>
//                   <h3 className="font-semibold mb-2">Brand</h3>
//                   <div className="space-y-2">
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="Cisco"
//                         onChange={handleBrandChange}
//                         className="mr-2"
//                       />
//                       Cisco
//                     </label>
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="Huawei"
//                         onChange={handleBrandChange}
//                         className="mr-2"
//                       />
//                       Huawei
//                     </label>
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="HP"
//                         onChange={handleBrandChange}
//                         className="mr-2"
//                       />
//                       HP
//                     </label>
//                   </div>
//                 </div>

//                 {/* Condition Filter */}
//                 <div>
//                   <h3 className="font-semibold mb-2">Condition</h3>
//                   <div className="space-y-2">
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="Refurbished"
//                         onChange={handleConditionChange}
//                         className="mr-2"
//                       />
//                       Refurbished
//                     </label>
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="New"
//                         onChange={handleConditionChange}
//                         className="mr-2"
//                       />
//                       New
//                     </label>
//                   </div>
//                 </div>

//                 {/* Price Range Filter */}
//                 <div>
//                   <h3 className="font-semibold mb-2">Price Range</h3>
//                   <div className="space-y-2">
//                     <input
//                       type="range"
//                       min="0"
//                       max="2000"
//                       name="min"
//                       value={priceRange[0]}
//                       onChange={handlePriceRangeChange}
//                       className="w-full"
//                     />
//                     <input
//                       type="range"
//                       min="0"
//                       max="2000"
//                       name="max"
//                       value={priceRange[1]}
//                       onChange={handlePriceRangeChange}
//                       className="w-full"
//                     />
//                     <div className="flex justify-between text-sm">
//                       <span>${priceRange[0]}</span>
//                       <span>${priceRange[1]}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Availability Filter */}
//                 <div>
//                   <h3 className="font-semibold mb-2">Availability</h3>
//                   <div className="space-y-2">
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="In stock"
//                         onChange={handleAvailabilityChange}
//                         className="mr-2"
//                       />
//                       In stock
//                     </label>
//                     <label>
//                       <input
//                         type="checkbox"
//                         value="Pre-order"
//                         onChange={handleAvailabilityChange}
//                         className="mr-2"
//                       />
//                       Pre-order
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white p-4 shadow-lg rounded-lg"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-t-lg mb-4"
//                   />
//                   <h3 className="text-lg font-bold mb-2">{product.name}</h3>
//                   <p className="text-gray-600 mb-4">{product.description}</p>
//                   <p className="font-semibold text-blue-500 mb-4">
//                     ${product.price}
//                   </p>
//                   <button className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded">
//                     View Details
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>
//     </RootLayout>
//   );
// };

// export default ProductsPage;
// import RootLayout from "@/app/layout";
// import React, { useState } from "react";

// const ProductsPage = () => {
//   const [selectedBrand, setSelectedBrand] = useState([]);
//   const [selectedCondition, setSelectedCondition] = useState([]);
//   const [priceRange, setPriceRange] = useState([100, 1000]);
//   const [selectedAvailability, setSelectedAvailability] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   const products = [
//     {
//       id: 1,
//       name: "Cisco Catalyst 2960 Series Switches",
//       description: "High-performance router for enterprise networking.",
//       price: 1250,
//       brand: "Cisco",
//       condition: "Refurbished",
//       availability: "In stock",
//       image: "/images/products/Cisco Catalyst 2960 Series Switches.jpeg",
//     },
//     {
//       id: 2,
//       name: "Cisco Catalyst 3750 Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 300,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco Catalyst 3750 Series Switches.jpeg",
//     },
//     {
//       id: 3,
//       name: "Cisco Catalyst 3850 Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 900,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco Catalyst 3850 Series Switches.jpeg",
//     },
//     {
//       id: 4,
//       name: "Cisco Catalyst 4500 Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 980,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco Catalyst 4500 Series Switches.jpeg",
//     },
//     {
//       id: 5,
//       name: "Cisco Catalyst 4900 Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 1460,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco Catalyst 4900 Series Switches.jpeg",
//     },
//     {
//       id: 6,
//       name: "Cisco Catalyst 6500 Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 1140,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco Catalyst 6500 Series Switches.jpeg",
//     },
//     {
//       id: 7,
//       name: "Cisco UCS C220 M4 server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 320,
//       brand: "Cisco",
//       condition: "Refurbished",
//       availability: "Pre-order",
//       image: "/images/products/Cisco UCS C220 M4 server.jpeg",
//     },
//     {
//       id: 8,
//       name: "Cisco UCS C220 M6 server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 432,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco UCS C220 M6 server.jpeg",
//     },
//     {
//       id: 9,
//       name: "Cisco UCS C240 M6 server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 500,
//       brand: "Cisco",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Cisco UCS C240 M6 server.jpeg",
//     },
//     {
//       id: 10,
//       name: "Dell PowerEdge M820 Server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 570,
//       brand: "Dell",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Dell PowerEdge M820 Server.jpeg",
//     },
//     {
//       id: 11,
//       name: "Dell PowerEdge M830 Server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 750,
//       brand: "Dell",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Dell PowerEdge M830 Server.jpeg",
//     },
//     {
//       id: 12,
//       name: "Dell PowerEdge R530 Server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 690,
//       brand: "Dell",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Dell PowerEdge R530 Server.jpeg",
//     },
//     {
//       id: 13,
//       name: "Dell PowerEdge R640 Server",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 1230,
//       brand: "Dell",
//       condition: "Refurbished",
//       availability: "Pre-order",
//       image: "/images/products/Dell PowerEdge R640 Server.jpeg",
//     },
//     {
//       id: 14,
//       name: "Huawei CE6851-Series SwitcheS",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 1760,
//       brand: "Huawei",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Huawei CE6851-Series SwitcheS.jpeg",
//     },
//     {
//       id: 15,
//       name: "Huawei S6700-Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 1900,
//       brand: "Huawei",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Huawei S6700-Series Switches.jpeg",
//     },
//     {
//       id: 16,
//       name: "Huawei S6720-Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 150,
//       brand: "Huawei",
//       condition: "Refurbished",
//       availability: "Pre-order",
//       image: "/images/products/Huawei S6720-Series Switches.jpeg",
//     },
//     {
//       id: 17,
//       name: "Huawei S6730-Series Switches",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 200,
//       brand: "Huawei",
//       condition: "New",
//       availability: "Pre-order",
//       image: "/images/products/Huawei S6730-Series Switches.jpeg",
//     },
//     {
//       id: 18,
//       name: "S5700 Series Switches.jpeg",
//       description: "Reliable switch for seamless data connectivity.",
//       price: 1800,
//       brand: "Huawei",
//       condition: "Refurbished",
//       availability: "Pre-order",
//       image: "/images/products/S5700 Series Switches.jpeg",
//     },
//   ];

//   const categories = ["Routers", "Switches", "Firewalls", "Servers"];

//   // Filtering logic based on selected filters
//   const filteredProducts = products
//     .filter((product) => {
//       const matchesBrand =
//         selectedBrand.length === 0 || selectedBrand.includes(product.brand);
//       const matchesCondition =
//         selectedCondition.length === 0 ||
//         selectedCondition.includes(product.condition);
//       const matchesAvailability =
//         selectedAvailability === "" ||
//         product.availability === selectedAvailability;
//       const matchesPriceRange =
//         product.price >= priceRange[0] && product.price <= priceRange[1];
//       const matchesSearchQuery =
//         product.name.toLowerCase().includes(searchQuery.toLowerCase());

//       return (
//         matchesBrand &&
//         matchesCondition &&
//         matchesAvailability &&
//         matchesPriceRange &&
//         matchesSearchQuery
//       );
//     })
//     .sort((a, b) => a.price - b.price); // Sort by price

//   // Handle filter and search changes
//   const handleBrandChange = (e) => {
//     const brand = e.target.value;
//     setSelectedBrand((prev) =>
//       prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
//     );
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <RootLayout>
//       <div className="container mx-auto p-6 pt-28">
//         {/* Header */}
//         <header className="text-center mb-12">
//           <h1 className="text-5xl font-bold mb-6">
//             Find the Perfect Network Hardware
//           </h1>
//           <p className="text-lg text-gray-600">
//             Browse our range of refurbished and new network equipment.
//           </p>
//         </header>

//         <div className="flex space-x-8">
//           {/* Sidebar */}
//           <aside className="w-1/4">
//             <h2 className="text-2xl font-semibold mb-4">Filters</h2>
//             <div className="mb-8">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             {/* Brand Filter */}
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold mb-4">Brand</h3>
//               <div className="space-y-2">
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Cisco"
//                     onChange={handleBrandChange}
//                     className="mr-2"
//                   />
//                   Cisco
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Huawei"
//                     onChange={handleBrandChange}
//                     className="mr-2"
//                   />
//                   Huawei
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Dell"
//                     onChange={handleBrandChange}
//                     className="mr-2"
//                   />
//                   Dell
//                 </label>
//               </div>
//             </div>

//             {/* Condition Filter */}
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold mb-4">Condition</h3>
//               <div className="space-y-2">
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="Refurbished"
//                     onChange={(e) =>
//                       setSelectedCondition([e.target.value])
//                     }
//                     className="mr-2"
//                   />
//                   Refurbished
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     value="New"
//                     onChange={(e) => setSelectedCondition([e.target.value])}
//                     className="mr-2"
//                   />
//                   New
//                 </label>
//               </div>
//             </div>

//             {/* Price Range Filter */}
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold mb-4">Price Range</h3>
//               <div className="flex space-x-4">
//                 <input
//                   type="number"
//                   min="0"
//                   max="2000"
//                   value={priceRange[0]}
//                   onChange={(e) =>
//                     setPriceRange([parseInt(e.target.value), priceRange[1]])
//                   }
//                   className="w-1/2 px-2 py-1 border rounded"
//                 />
//                 <input
//                   type="number"
//                   min="0"
//                   max="2000"
//                   value={priceRange[1]}
//                   onChange={(e) =>
//                     setPriceRange([priceRange[0], parseInt(e.target.value)])
//                   }
//                   className="w-1/2 px-2 py-1 border rounded"
//                 />
//               </div>
//             </div>

//             {/* Availability Filter */}
//             <div className="mb-8">
//               <h3 className="text-xl font-semibold mb-4">Availability</h3>
//               <div className="space-y-2">
//                 <label>
//                   <input
//                     type="radio"
//                     value="In stock"
//                     onChange={(e) => setSelectedAvailability(e.target.value)}
//                     className="mr-2"
//                   />
//                   In Stock
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="Pre-order"
//                     onChange={(e) => setSelectedAvailability(e.target.value)}
//                     className="mr-2"
//                   />
//                   Pre-order
//                 </label>
//               </div>
//             </div>
//           </aside>

//           {/* Product Grid */}
//           <main className="w-3/4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-lg mb-4"
//                   />
//                   <h3 className="text-lg font-bold mb-2">{product.name}</h3>
//                   <p className="text-gray-600 mb-2">{product.description}</p>
//                   <p className="text-blue-500 font-semibold mb-2">
//                     ${product.price}
//                   </p>
//                   <p className="text-sm text-gray-500 mb-4">
//                     {product.condition} | {product.availability}
//                   </p>
//                   <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">
//                     View Details
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>
//     </RootLayout>
//   );
// };

// export default ProductsPage;

import RootLayout from "@/app/layout";
import React, { useState } from "react";
import Image from "next/image";

const ProductsPage = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Cisco Catalyst 2960 Series Switches",
      description: "High-performance router for enterprise networking.",
      price: 1250,
      brand: "Cisco",
      condition: "Refurbished",
      availability: "In stock",
      image: "/images/products/Cisco Catalyst 2960 Series Switches.jpeg",
    },
    {
      id: 2,
      name: "Cisco Catalyst 3750 Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 300,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco Catalyst 3750 Series Switches.jpeg",
    },
    {
      id: 3,
      name: "Cisco Catalyst 3850 Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 900,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco Catalyst 3850 Series Switches.jpeg",
    },
    {
      id: 4,
      name: "Cisco Catalyst 4500 Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 980,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco Catalyst 4500 Series Switches.jpeg",
    },
    {
      id: 5,
      name: "Cisco Catalyst 4900 Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 1460,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco Catalyst 4900 Series Switches.jpeg",
    },
    {
      id: 6,
      name: "Cisco Catalyst 6500 Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 1140,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco Catalyst 6500 Series Switches.jpeg",
    },
    {
      id: 7,
      name: "Cisco UCS C220 M4 server",
      description: "Reliable switch for seamless data connectivity.",
      price: 320,
      brand: "Cisco",
      condition: "Refurbished",
      availability: "Pre-order",
      image: "/images/products/Cisco UCS C220 M4 server.jpeg",
    },
    {
      id: 8,
      name: "Cisco UCS C220 M6 server",
      description: "Reliable switch for seamless data connectivity.",
      price: 432,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco UCS C220 M6 server.jpeg",
    },
    {
      id: 9,
      name: "Cisco UCS C240 M6 server",
      description: "Reliable switch for seamless data connectivity.",
      price: 500,
      brand: "Cisco",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Cisco UCS C240 M6 server.jpeg",
    },
    {
      id: 10,
      name: "Dell PowerEdge M820 Server",
      description: "Reliable switch for seamless data connectivity.",
      price: 570,
      brand: "Dell",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Dell PowerEdge M820 Server.jpeg",
    },
    {
      id: 11,
      name: "Dell PowerEdge M830 Server",
      description: "Reliable switch for seamless data connectivity.",
      price: 750,
      brand: "Dell",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Dell PowerEdge M830 Server.jpeg",
    },
    {
      id: 12,
      name: "Dell PowerEdge R530 Server",
      description: "Reliable switch for seamless data connectivity.",
      price: 690,
      brand: "Dell",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Dell PowerEdge R530 Server.jpeg",
    },
    {
      id: 13,
      name: "Dell PowerEdge R640 Server",
      description: "Reliable switch for seamless data connectivity.",
      price: 1230,
      brand: "Dell",
      condition: "Refurbished",
      availability: "Pre-order",
      image: "/images/products/Dell PowerEdge R640 Server.jpeg",
    },
    {
      id: 14,
      name: "Huawei CE6851-Series SwitcheS",
      description: "Reliable switch for seamless data connectivity.",
      price: 1760,
      brand: "Huawei",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Huawei CE6851-Series SwitcheS.jpeg",
    },
    {
      id: 15,
      name: "Huawei S6700-Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 1900,
      brand: "Huawei",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Huawei S6700-Series Switches.jpeg",
    },
    {
      id: 16,
      name: "Huawei S6720-Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 150,
      brand: "Huawei",
      condition: "Refurbished",
      availability: "Pre-order",
      image: "/images/products/Huawei S6720-Series Switches.jpeg",
    },
    {
      id: 17,
      name: "Huawei S6730-Series Switches",
      description: "Reliable switch for seamless data connectivity.",
      price: 200,
      brand: "Huawei",
      condition: "New",
      availability: "Pre-order",
      image: "/images/products/Huawei S6730-Series Switches.jpeg",
    },
    {
      id: 18,
      name: "S5700 Series Switches.jpeg",
      description: "Reliable switch for seamless data connectivity.",
      price: 1800,
      brand: "Huawei",
      condition: "Refurbished",
      availability: "Pre-order",
      image: "/images/products/S5700 Series Switches.jpeg",
    },
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesBrand =
        selectedBrand.length === 0 || selectedBrand.includes(product.brand);
      const matchesCondition =
        selectedCondition.length === 0 ||
        selectedCondition.includes(product.condition);
      const matchesAvailability =
        selectedAvailability === "" ||
        product.availability === selectedAvailability;
      const matchesPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearchQuery =
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      return (
        matchesBrand &&
        matchesCondition &&
        matchesAvailability &&
        matchesPriceRange &&
        matchesSearchQuery
      );
    })
    .sort((a, b) => a.price - b.price);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <RootLayout>
      <div className="mx-auto p-6 pt-28 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Find the Perfect Network Hardware
          </h1>
          <p className="text-lg text-gray-500">
            Browse our range of refurbished and new network equipment.
          </p>
        </header>

        <div className="flex space-x-8 justify-center">
          {/* Sidebar */}
          <aside className="w-1/4 hidden md:block">
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filters</h2>

              {/* Search */}
              <div className="mb-8 w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-[87%] px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Brand Filter */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Brand</h3>
                <div className="space-y-2">
                  {["Cisco", "Huawei", "Dell"].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        value={brand}
                        onChange={handleBrandChange}
                        className="mr-2 text-blue-600 focus:ring-0"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Condition</h3>
                <div className="space-y-2">
                  {["Refurbished", "New"].map((condition) => (
                    <label key={condition} className="flex items-center">
                      <input
                        type="checkbox"
                        value={condition}
                        onChange={(e) =>
                          setSelectedCondition([e.target.value])
                        }
                        className="mr-2 text-blue-600 focus:ring-0"
                      />
                      {condition}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Price Range</h3>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([parseInt(e.target.value), priceRange[1]])
                    }
                    className="w-1/2 px-2 py-1 border rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-1/2 px-2 py-1 border rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Availability Filter */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Availability</h3>
                <div className="space-y-2">
                  {["In stock", "Pre-order"].map((status) => (
                    <label key={status} className="flex items-center">
                      <input
                        type="radio"
                        value={status}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                        className="mr-2 text-blue-600 focus:ring-0"
                      />
                      {status}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  {/* <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-blue-500 font-semibold mb-2">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {product.condition} | {product.availability}
                  </p>
                  <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">
                    View Details
                  </button> */}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProductsPage;
