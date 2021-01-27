import * as express from 'express';
import routes from './routes';
import * as cors from 'cors';
import { conectarNoBanco } from './database/connection';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(9000);

conectarNoBanco();