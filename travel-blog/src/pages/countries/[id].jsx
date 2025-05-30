// import { useParams } from "react-router-dom";
// import Nav from "../../components/Nav";
// import { useEffect, useState } from "react";

// const data = {
//   Germany: {
//     heading: "Germany: Innovation, Heritage, and Natural Beauty",
//     placeImage:
//       "https://miro.medium.com/v2/resize:fit:1400/1*gFSrsTPJjO9oe9uW8HdXlw.jpeg",
//     about: `Germany stands at the crossroads of tradition and modernity, offering a unique blend of historic charm and cutting-edge innovation. From the cobbled streets of medieval towns like Rothenburg ob der Tauber to the high-tech corridors of Berlin’s startup hubs, the country encapsulates a fascinating duality.

// Its cultural heritage is rich and multifaceted—home to composers like Beethoven and Bach, thinkers like Kant and Hegel, and architectural marvels like Cologne Cathedral and Neuschwanstein Castle. Meanwhile, Germany continues to lead in global engineering, green energy, and automotive design, exemplified by companies like BMW, Siemens, and Volkswagen.

// The country's diverse landscapes—ranging from the rugged Bavarian Alps to the serene banks of the Rhine—offer endless opportunities for exploration. Visitors can enjoy Oktoberfest in Munich, take a boat cruise through the castles of the Middle Rhine Valley, or wander the vibrant art scenes of cities like Hamburg and Dresden.

// Socially and politically, Germany plays a central role in the European Union, championing policies around sustainability, digital transformation, and humanitarian responsibility. Its commitment to remembrance and reconciliation is seen in institutions like the Berlin Holocaust Memorial and the many museums dedicated to World War II and the Cold War.

// Whether you're drawn by its storied past, its dynamic present, or its vision for the future, Germany invites the world to experience a country that honors its roots while embracing the possibilities of tomorrow.
// `,
//   },
//   Japan: {
//     heading: "Japan: Tradition Meets Innovation",
//     placeImage:
//       "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS5vkKlL-pkE1Ec2F79OYNANTPuGz6zlZeYTD9H-9RN8I6FvGGGjIxz-SOctY6a21E8U482r3JYkFsSBOfAEXyxSwlS4Wy4waY0mVgbuAE",
//     about: `Japan is a captivating island nation where centuries-old traditions coexist seamlessly with futuristic cities. From the tranquil temples of Kyoto to the neon-lit skyline of Tokyo, Japan offers a mesmerizing contrast that reflects its deep cultural heritage and relentless innovation.

// Ancient customs are woven into everyday life—tea ceremonies, seasonal festivals, and the art of calligraphy continue to thrive alongside a society known for robotics, bullet trains, and avant-garde fashion. In rural areas, you'll find serene landscapes dotted with rice paddies, Shinto shrines, and historic ryokans, offering a glimpse into the country's timeless spirit. Meanwhile, urban centers pulse with energy, boasting cutting-edge technology, world-class cuisine, and unmatched efficiency.

// Japan’s natural beauty is equally captivating. The cherry blossoms of spring, fiery autumn foliage, snow-capped mountains, and pristine coastlines present an ever-changing canvas of scenic wonder. Mount Fuji, a national symbol, rises with majestic grace, attracting climbers, artists, and spiritual seekers alike.

// Culturally, Japan is a global powerhouse—its influence visible in everything from anime and manga to architecture and minimalism. The Japanese philosophy of *wabi-sabi*—finding beauty in imperfection—can be felt in everything from traditional pottery to Zen gardens.

// Despite its rapid modernization, Japan remains deeply respectful of its past. It’s a place where ancient shrines stand beside skyscrapers, where quiet contemplation meets fast-paced innovation, and where hospitality (*omotenashi*) ensures that every visitor feels both welcomed and inspired.

// Whether you're exploring the historic streets of Nara, marveling at the technology in Akihabara, or soaking in an onsen beneath the stars, Japan invites you into a world where tradition and tomorrow live side by side.
// `,
//   },
//   China: {
//     heading: "China: Ancient Roots, Modern Heights",
//     placeImage:
//       "https://lp-cms-production.imgix.net/2025-02/shutterstock565801309.jpg?auto=compress&amp;format=auto&amp;fit=crop&amp;q=50&amp;w=1200&amp;h=800",
//     about: `China is a vast and dynamic nation where ancient civilization meets rapid modernization on an awe-inspiring scale. With over 5,000 years of recorded history, it is home to some of humanity’s oldest and most enduring cultural traditions—yet it is also at the forefront of technological innovation and urban development.

// From the Great Wall winding through rugged mountains to the ultra-modern skyline of Shanghai’s Pudong district, China showcases a landscape of striking contrasts. Historical treasures like the Terracotta Army in Xi’an, the Forbidden City in Beijing, and the sacred mountains of Huangshan stand as testaments to a rich and complex past that continues to shape its identity today.

// Culturally, China is a mosaic of diversity. With 56 recognized ethnic groups, each with their own customs, languages, and traditions, the country offers a kaleidoscope of festivals, cuisines, music, and art. The teachings of Confucius, Taoist philosophy, and the heritage of dynasties still resonate in daily life, influencing everything from family values to architecture.

// At the same time, China is propelling itself into the future with bold ambition. Its cities are global powerhouses of finance, design, and innovation. High-speed rail networks connect vast regions with remarkable efficiency, while advancements in artificial intelligence, green technology, and space exploration place China among the leaders in shaping the 21st century.

// Nature in China is equally diverse—from the karst landscapes of Guilin and the vast deserts of Xinjiang to the subtropical rainforests of Yunnan and the icy peaks of Tibet. Each region presents its own breathtaking scenery and cultural story, offering travelers an endless journey of discovery.

// China is not just a country; it is a civilization reborn in modern times, where old and new don’t simply coexist—they elevate each other. It invites the world to explore its layered legacy, dynamic present, and boundless vision for the future.
// `,
//   },
// };

// const CountryDetail = () => {
//   const { id } = useParams();
//   const [country, setCountry] = useState(null);

//   useEffect(() => {
//     const cityData = data[id];
//     setTimeout(() => {
//       setCountry(cityData);
//     }, 500);
//   }, [id]);

//   if (!country) {
//     return (
//       <>
//         <Nav />
//         <main>
//           <p>Loading country detail...</p>
//         </main>
//       </>
//     );
//   }

//   return (
//     <div>
//       <Nav />
//       <div>
//         <h2>{country.heading}</h2>
//         <img
//           src={country.placeImage}
//           alt="Landscape"
//           style={{
//             width: "100%",
//             maxWidth: "600px",
//             margin: "20px 0",
//             borderRadius: "8px",
//           }}
//         />
//         <p>{country.about}</p>
//       </div>
//     </div>
//   );
// };

// export default CountryDetail;
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect, useState } from "react";

const data = {
  Germany: {
    heading: "Germany: Innovation, Heritage, and Natural Beauty",
    placeImage:
      "https://miro.medium.com/v2/resize:fit:1400/1*gFSrsTPJjO9oe9uW8HdXlw.jpeg",
    about: `Germany stands at the crossroads of tradition and modernity, offering a unique blend of historic charm and cutting-edge innovation. From the cobbled streets of medieval towns like Rothenburg ob der Tauber to the high-tech corridors of Berlin’s startup hubs, the country encapsulates a fascinating duality.

Its cultural heritage is rich and multifaceted—home to composers like Beethoven and Bach, thinkers like Kant and Hegel, and architectural marvels like Cologne Cathedral and Neuschwanstein Castle. Meanwhile, Germany continues to lead in global engineering, green energy, and automotive design, exemplified by companies like BMW, Siemens, and Volkswagen.

The country's diverse landscapes—ranging from the rugged Bavarian Alps to the serene banks of the Rhine—offer endless opportunities for exploration. Visitors can enjoy Oktoberfest in Munich, take a boat cruise through the castles of the Middle Rhine Valley, or wander the vibrant art scenes of cities like Hamburg and Dresden.

Socially and politically, Germany plays a central role in the European Union, championing policies around sustainability, digital transformation, and humanitarian responsibility. Its commitment to remembrance and reconciliation is seen in institutions like the Berlin Holocaust Memorial and the many museums dedicated to World War II and the Cold War.

Whether you're drawn by its storied past, its dynamic present, or its vision for the future, Germany invites the world to experience a country that honors its roots while embracing the possibilities of tomorrow.
`,
  },
  Japan: {
    heading: "Japan: Tradition Meets Innovation",
    placeImage:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS5vkKlL-pkE1Ec2F79OYNANTPuGz6zlZeYTD9H-9RN8I6FvGGGjIxz-SOctY6a21E8U482r3JYkFsSBOfAEXyxSwlS4Wy4waY0mVgbuAE",
    about: `Japan is a captivating island nation where centuries-old traditions coexist seamlessly with futuristic cities. From the tranquil temples of Kyoto to the neon-lit skyline of Tokyo, Japan offers a mesmerizing contrast that reflects its deep cultural heritage and relentless innovation.

Ancient customs are woven into everyday life—tea ceremonies, seasonal festivals, and the art of calligraphy continue to thrive alongside a society known for robotics, bullet trains, and avant-garde fashion. In rural areas, you'll find serene landscapes dotted with rice paddies, Shinto shrines, and historic ryokans, offering a glimpse into the country's timeless spirit. Meanwhile, urban centers pulse with energy, boasting cutting-edge technology, world-class cuisine, and unmatched efficiency.

Japan’s natural beauty is equally captivating. The cherry blossoms of spring, fiery autumn foliage, snow-capped mountains, and pristine coastlines present an ever-changing canvas of scenic wonder. Mount Fuji, a national symbol, rises with majestic grace, attracting climbers, artists, and spiritual seekers alike.

Culturally, Japan is a global powerhouse—its influence visible in everything from anime and manga to architecture and minimalism. The Japanese philosophy of *wabi-sabi*—finding beauty in imperfection—can be felt in everything from traditional pottery to Zen gardens.

Despite its rapid modernization, Japan remains deeply respectful of its past. It’s a place where ancient shrines stand beside skyscrapers, where quiet contemplation meets fast-paced innovation, and where hospitality (*omotenashi*) ensures that every visitor feels both welcomed and inspired.

Whether you're exploring the historic streets of Nara, marveling at the technology in Akihabara, or soaking in an onsen beneath the stars, Japan invites you into a world where tradition and tomorrow live side by side.
`,
  },
  China: {
    heading: "China: Ancient Roots, Modern Heights",
    placeImage:
      "https://lp-cms-production.imgix.net/2025-02/shutterstock565801309.jpg?auto=compress&amp;format=auto&amp;fit=crop&amp;q=50&amp;w=1200&amp;h=800",
    about: `China is a vast and dynamic nation where ancient civilization meets rapid modernization on an awe-inspiring scale. With over 5,000 years of recorded history, it is home to some of humanity’s oldest and most enduring cultural traditions—yet it is also at the forefront of technological innovation and urban development.

From the Great Wall winding through rugged mountains to the ultra-modern skyline of Shanghai’s Pudong district, China showcases a landscape of striking contrasts. Historical treasures like the Terracotta Army in Xi’an, the Forbidden City in Beijing, and the sacred mountains of Huangshan stand as testaments to a rich and complex past that continues to shape its identity today.

Culturally, China is a mosaic of diversity. With 56 recognized ethnic groups, each with their own customs, languages, and traditions, the country offers a kaleidoscope of festivals, cuisines, music, and art. The teachings of Confucius, Taoist philosophy, and the heritage of dynasties still resonate in daily life, influencing everything from family values to architecture.

At the same time, China is propelling itself into the future with bold ambition. Its cities are global powerhouses of finance, design, and innovation. High-speed rail networks connect vast regions with remarkable efficiency, while advancements in artificial intelligence, green technology, and space exploration place China among the leaders in shaping the 21st century.

Nature in China is equally diverse—from the karst landscapes of Guilin and the vast deserts of Xinjiang to the subtropical rainforests of Yunnan and the icy peaks of Tibet. Each region presents its own breathtaking scenery and cultural story, offering travelers an endless journey of discovery.

China is not just a country; it is a civilization reborn in modern times, where old and new don’t simply coexist—they elevate each other. It invites the world to explore its layered legacy, dynamic present, and boundless vision for the future.
`,
  },
};

const CountryDetail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const cityData = data[id];
    setTimeout(() => {
      setCountry(cityData);
    }, 500);
  }, [id]);

  if (!country) {
    return (
      <>
        <Nav />
        <main style={styles.loadingContainer}>
          <p style={styles.loadingText}>Loading country detail... 💫</p>
        </main>
      </>
    );
  }

  return (
    <div style={styles.page}>
      <Nav />
      <div style={styles.container}>
        <h2 style={styles.heading}>{country.heading}</h2>
        <img
          src={country.placeImage}
          alt={`${id} landscape`}
          style={styles.image}
        />
        <p style={styles.paragraph}>{country.about}</p>
      </div>
    </div>
  );
};

export default CountryDetail;

const styles = {
  page: {
    background: "linear-gradient(to bottom right, #ffe6f0, #e3f2fd, #e4f7ea)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', 'Comic Neue', sans-serif",
    color: "#444",
    paddingBottom: "4rem",
  },
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
  },
  heading: {
    fontSize: "2rem",
    color: "#ff6fa1",
    textAlign: "center",
    marginBottom: "1.5rem",
    fontFamily: "'Pacifico', cursive",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    marginBottom: "1.5rem",
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    textAlign: "justify",
    color: "#333",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  loadingText: {
    fontSize: "1.2rem",
    color: "#888",
  },
};
