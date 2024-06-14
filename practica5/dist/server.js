"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const equipo_1 = __importDefault(require("./routes/equipo"));
const idioma_1 = __importDefault(require("./routes/idioma")); // Ruta de tu compañero
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/equipo', equipo_1.default);
app.use('/idioma', idioma_1.default); // Ruta de tu compañero
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
