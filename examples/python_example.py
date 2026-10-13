"""Run yandex-maps-business-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'searchTerms': ['стоматология'], 'locations': ['Almaty'], 'maxPlacesPerSearch': 30}
run = client.actor("kamerozkan/yandex-maps-business-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
