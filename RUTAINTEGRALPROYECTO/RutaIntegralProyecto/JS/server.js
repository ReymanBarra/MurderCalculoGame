import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir todo el proyecto como estático
app.use(express.static(__dirname));

// Ruta principal → tu juego
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Pages/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor activo en puerto", PORT);
});
