import "./App.css";

const owner = 1;

const messages = [
  {
    senderId: 1,
    name: "Sangay",
    message:
      "Hey Yeshi! I still can't get over how peaceful and beautiful Thimphu was.",
  },
  {
    senderId: 2,
    name: "Yeshi",
    message:
      "I know, right? The fresh mountain air and the calm vibe were exactly what we needed.",
  },
  {
    senderId: 1,
    name: "Sangay",
    message:
      "And that momo place we found near Clock Tower Square… I’m still dreaming about those!",
  },
  {
    senderId: 2,
    name: "Yeshi",
    message:
      "Haha yes! Best momos ever. And remember the walk up to the Buddha Dordenma? That view was breathtaking.",
  },
  {
    senderId: 1,
    name: "Sangay",
    message:
      "That was such a peaceful moment. Just standing there, looking out over the valley… it felt like time slowed down.",
  },
  {
    senderId: 2,
    name: "Yeshi",
    message:
      "Exactly. And all the little cafes we stopped by were so cozy. That place with the butter tea and books was my favorite.",
  },
  {
    senderId: 1,
    name: "Sangay",
    message:
      "Mine too. We definitely need another trip like that soon. Same place or maybe explore somewhere new?",
  },
  {
    senderId: 2,
    name: "Yeshi",
    message:
      "Let’s do both! One more round of Thimphu and then maybe Punakha next?",
  },
  {
    senderId: 1,
    name: "Sangay",
    message: "Sounds perfect. Let’s start planning this weekend!",
  },
];
const Messages = ({ senderName, message, position = "left" }) => {
  return (
    <div
      className={`${
        position === "right" ? `align-right` : `align-left`
      } card shadow`}
    >
      <p> {senderName}</p>
      <p> {message}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      {messages.map((item, index) => {
        <Messages
          key={`message -${index}`}
          senderName={item.name}
          message={item.message}
          position={item.senderId === owner ? "right" : "left"}
        />;
      })}
    </div>
  );
}

export default App;
