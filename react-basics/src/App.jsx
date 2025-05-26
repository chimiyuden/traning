import "./App.css";

const Card = () => {
  return (
    <div class="shadow p-2 rounded-sm">
      <p>
        <span class="star">★★★★★</span>
      </p>
      <p>
        Nepalabs has streamlined our mobile and website development workflows,
        saving us countless hours of manual effort.
      </p>
      <p class="bold">Deepak K. Jain</p>
      <p>Product Manager, TravelKosh</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
