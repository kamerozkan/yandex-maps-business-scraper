# Yandex Maps Leads Scraper - Business Phones, Websites, Ratings

Yandex Maps business scraper for lead lists: search any category in any city (Russia, Kazakhstan, Belarus, Uzbekistan, Turkey and more) and get name, categories, address, coordinates, phones, website, social links, opening hours and rating. Pay per place.

**[Run it on Apify Store](https://apify.com/kamerozkan/yandex-maps-business-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/yandex-maps-business-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/yandex-maps-business-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/yandex-maps-business-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "searchTerms": [
    "стоматология"
  ],
  "locations": [
    "Almaty"
  ],
  "maxPlacesPerSearch": 30
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "placeId": "156198469277",
    "name": "Abozor Service",
    "categories": [
      "Car service, auto repair"
    ],
    "address": "Tashkent, Yashnabad District, Mahtumquli Street, 75/1",
    "fullAddress": "Tashkent, Yashnabad District, Mahtumquli Street, 75/1",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "postalCode": null,
    "latitude": 41.304347,
    "longitude": 69.319563,
    "phones": [
      "+1 555 0100"
    ],
    "website": "https://abozorservice.uz/warranty/service-centers",
    "otherWebsites": [],
    "socialLinks": [
      {
        "type": "instagram",
        "url": "https://www.instagram.com/avtoritet.uzbekistan"
      },
      {
        "type": "facebook",
        "url": "https://www.facebook.com/avtoritet.uzbekistan/"
      },
      {
        "type": "telegram",
        "url": "https://t.me/avtoritetbot"
      },
      {
        "type": "telegram",
        "url": "https://t.me/Avtoritetbot"
      }
    ],
    "rating": 5,
    "ratingCount": 581,
    "reviewCount": 156,
    "workingHours": "daily, 9:00 AM–9:00 PM",
    "businessStatus": "open",
    "isAdvertised": false,
    "chain": null,
    "nearestMetro": "Mashinasozlar",
    "yandexMapsUrl": "https://yandex.com/maps/org/abozor_service/156198469277/",
    "searchTerm": "автосервис",
    "location": "Tashkent",
    "scrapedAt": "2026-10-13T09:57:35+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/yandex-maps-business-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
