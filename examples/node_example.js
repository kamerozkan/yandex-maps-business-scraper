// Run yandex-maps-business-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "searchTerms": [
    "стоматология"
  ],
  "locations": [
    "Almaty"
  ],
  "maxPlacesPerSearch": 30
};
const run = await client.actor('kamerozkan/yandex-maps-business-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
