#!/usr/bin/env bash
# Run yandex-maps-business-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~yandex-maps-business-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["стоматология"], "locations": ["Almaty"], "maxPlacesPerSearch": 30}'
