import * as express from 'express';
import { configuration } from './config';

const app: express.Application = express();
const port = configuration.port;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Nothing at the root level.');
});

app.listen(port, () => console.log('started at ' + port));
