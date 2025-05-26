// const http = require("node:http");

// // define the port number the server will listen on
// const PORT = 8000;

// const rooms = [101, 102, 103, 104, 105, 106];
// let roomInfo = {
//   101: {
//     table: true,
//     tv: false,
//     bed: true,
//     toilet: true,
//     name: "101",
//   },
//   102: {
//     table: true,
//     tv: true,
//     bed: true,
//     toilet: true,
//     name: "102",
//   },
//   103: {
//     table: false,
//     tv: false,
//     bed: false,
//     toilet: false,
//     name: "103",
//   },
//   104: {
//     table: true,
//     tv: false,
//     bed: true,
//     toilet: false,
//     name: "104",
//   },
//   105: {
//     table: true,
//     tv: false,
//     bed: true,
//     toilet: true,
//     name: "105",
//   },
//   106: {
//     table: true,
//     tv: false,
//     bed: false,
//     toilet: true,
//     name: "106",
//   },
// };
// // create the server
// // line no 7to 14 we are making server

// const server = http.createServer(function (req, res) {
//   console.log(`URL:: ${req.method} :: ${req.url}`);
//   const parts = req.url.split("/");

//   console.log(parts);
//   if (req.method === "GET") {
//     if (parts[0] === "") {
//       if (parts[1] === "") {
//         // set the response header

//         res.end(`Hello from Tashi Hotel`);
//       } 

//       if (parts[1] === "rooms") {
//         if (parts[2]) {
//           // let roomInfo = {
//           //   101: {
//           //     table: true,
//           //     tv: false,
//           //     bed: true,
//           //     toilet: true,
//           //     name: "101",
//           //   },
//           //   102: {
//           //     table: true,
//           //     tv: true,
//           //     bed: true,
//           //     toilet: true,
//           //     name: "102",
//           //   },
//           //   103: {
//           //     table: false,
//           //     tv: false,
//           //     bed: false,
//           //     toilet: false,
//           //     name: "103",
//           //   },
//           //   104: {
//           //     table: true,
//           //     tv: false,
//           //     bed: true,
//           //     toilet: false,
//           //     name: "104",
//           //   },
//           //   105: {
//           //     table: true,
//           //     tv: false,
//           //     bed: true,
//           //     toilet: true,
//           //     name: "105",
//           //   },
//           //   106: {
//           //     table: true,
//           //     tv: false,
//           //     bed: false,
//           //     toilet: true,
//           //     name: "106",
//           //   },
//           // };
//           res.writeHead(200, { "Content-Type": "application/json" });
//           res.end(JSON.stringify(roomInfo[parts[2]]));
//           return;
//         }
//         res.writeHead(200, { "Content-Type": "application/json" });
//         // const rooms = [101, 102, 103, 104, 105, 106];
//         res.end(JSON.stringify(rooms));
//       }
//       if (parts[1] === "kitchen") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(`Welcome to Tashi Hotel kitchen`));
//       }
//     }
//   }

//   if (req.method === "POST") {
//     if (parts[1] === "rooms") {
//       let body = "";
//       req.on("data", (chunk) => {
//         body += chunk.toString();
//       });
//       req.on("end", () => {
//         const newRoom = JSON.parse(body);
//         const roomNumber = Number(newRoom.name);

//         if (rooms.includes(roomNumber)) {
//           res.writeHead(400, { "Content-Type": "application/json" });
//           res.end(
//             JSON.stringify({
//               message: `Room with ${roomNumber} already present`,
//             })
//           );
//           return;
//         }
//         // add the new room
//         rooms.push(roomNumber);
//         roomInfo[roomNumber] = newRoom;

//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Created", room: newRoom }));
//       });
//     }
//   }
// });

// // Start listening on the specified port
// server.listen(PORT, () => {
//   console.log(`server is running at http://localhost:${PORT}`);
// });
