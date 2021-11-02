import { program } from 'commander';
import { AutotaskClient } from 'defender-autotask-client';
import * as fs from 'fs';

program.option('-n, --network <string>', 'Select network (Mainnet, Rinkeby, Polygon or Binance)');
program.parse(process.argv);

async function updateAutotask() {
  const autotaskId = process.env.AUTOTASK_ID;
  const handlerFile = './dist/index.js';

  const client = new AutotaskClient({
    apiKey: process.env.DEFENDER_TEAM_API_KEY,
    apiSecret: process.env.DEFENDER_TEAM_SECRET_KEY,
  });

  console.log(`Updating autotask ${autotaskId} with sourcefile ${handlerFile}`);

  await client.updateCodeFromSources(autotaskId, {
    'index.js': fs.readFileSync(handlerFile).toString(),
  });
}

updateAutotask();
