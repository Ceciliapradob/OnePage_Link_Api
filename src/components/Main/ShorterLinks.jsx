// import React, { useState } from "react";

// export default function ShorterLinks() {
//   // Estado para almacenar la URL ingresada
//   const [url, setUrl] = useState("");
//   // Estado para almacenar la URL acortada
//   const [shortenedUrl, setShortenedUrl] = useState("");
//   // Estado para manejar mensajes de error
//   const [error, setError] = useState("");

//   // Función para manejar el envío del formulario
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

//     if (!url) {
//       setError("Please enter a URL");
//       return;
//     }

//     try {
//       // Hacemos la petición a la API pública de acortamiento de URLs
//       console.log("Enviando solicitud a la API con la URL:", url);
//       const response = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`);
      
//       if (!response.ok) throw new Error("Error al acortar la URL");
      
//       const data = await response.json();
//       console.log("Respuesta de la API:", data);

//       // Guardamos la URL acortada en el estado
//       setShortenedUrl(data.shorturl);
//       setError(""); // Limpiar errores en caso de éxito
//     } catch (err) {
//       console.error("Error acortando la URL:", err);
//       setError("Failed to shorten URL");
//     }
//   };

//   // Función para copiar la URL acortada al portapapeles
//   const handleCopy = () => {
//     navigator.clipboard.writeText(shortenedUrl);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <section className="form">
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <input
//               id="link"
//               type="text"
//               placeholder="Shorten a link here..."
//               value={url}
//               onChange={(e) => setUrl(e.target.value)} // Guardar la URL ingresada
//               style={{ backgroundColor: "white" }}
//             />
//           </div>
//           <button className="primary-btn" type="submit" disabled={!url}>
//             Shorten It!
//           </button>
//         </form>
//         {/* Mostrar mensaje de error si existe */}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {/* Mostrar la URL acortada con un botón para copiar */}
//         {shortenedUrl && (
//           <div>
//             <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
//             <button onClick={handleCopy}>Copy</button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";

export default function ShorterLinks() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      console.log("API Response:", data);
      if (data.shorturl) {
        setShortenedUrl(data.shorturl);
        setError("");
      } else {
        setError("Failed to shorten URL");
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      setError("An error occurred. Try again later.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <section className="form">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="link"
                type="text"
                placeholder="Shorten a link here..."
                style={{ backgroundColor: "white" }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button className="primary-btn" type="submit" disabled={!url}>
              Shorten It!
            </button>
          </form>
        </div>
      </section>
      {shortenedUrl && (
        <div className="shorter-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="shorter" style={{ maxWidth: "90%" }}>
            <span className="shorter-originalLink">{url}</span>
            <div className="shorter-result">
              <a href={shortenedUrl} className="shorter-fullShortLink" target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
              <button onClick={handleCopy}>Copy</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


