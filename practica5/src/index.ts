import { Router, Request, Response, Application }   from 'express';
import server from 'express'

import { PrismaClient  } from '@prisma/client'

import { equipoRouter, torneoRouter, partidoRouter, entornoRouter } from './routes'

import { AxiosHttpClient, GotHttpClient, HttpClient } from './services/httpClient';

import { GitHubRoutes } from './routes/github.routes';


const app : Application = server();
const prisma = new PrismaClient();

app.use(server.json()); // Middleware para parsear JSON

// Rutas
app.use('/equipos', equipoRouter);
app.use('/torneos', torneoRouter);
app.use('/partidos', partidoRouter);
app.use('/entornos', entornoRouter);
app.use('/github', GitHubRoutes.routes);

const PORT = process.env.PORT || 3000; // Puerto en el que corre el servidor

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




const cors = require('cors');



// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3005'
}));


// Elige el cliente HTTP que deseas usar
// Puedes cambiar entre AxiosHttpClient y GotHttpClient para probar ambos
const httpClient: HttpClient = new AxiosHttpClient();
// const httpClient: HttpClient = new GotHttpClient();

app.get('/data', async (req, res) => {
  try {
    const url = 'http://localhost:3005/clientes'; // URL del servicio REST de tu compañero
    const data = await httpClient.get<any[]>(url);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos del servicio externo' });
  }
});

