import express, {Application, Request, Response} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (_req: Request, res: Response) => {
  res.send({
    message: 'Wellcome to the Node.js & Typescript REST API with Azure DataBase for PostgreSQL!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})