# NexoStream SEO pilot: movies and series

## Scope

This branch prepares a ten-page SEO pilot based on the catalogue workbook `NexoStream_FINAL_PRO_enriched FINAL(1).xlsx` (447 records: 358 films and 89 series).

### Pages prepared

Films:
- `/peliculas/the-matrix/`
- `/peliculas/alien/`
- `/peliculas/star-wars/`
- `/peliculas/blade-runner/`
- `/peliculas/dark-city/`
- `/peliculas/inception/`

Series:
- `/series/stranger-things/`
- `/series/game-of-thrones/`
- `/series/the-last-of-us/`
- `/series/breaking-bad/`

## Technical choices

- Static `index.html` pages under `/peliculas/<slug>/` and `/series/<slug>/`.
- Unique title and meta description per page.
- Self-referencing canonical URL.
- Open Graph metadata.
- Schema.org `Movie` or `TVSeries` JSON-LD.
- Contextual internal links between pages in this pilot.
- Sitemap includes the homepage and the ten pilot URLs.

## Important validation before production

This is a review branch; nothing here has been merged into `main` or verified on the production host.

Before merging:
1. Confirm the actual hosting/deployment serves nested directories and their `index.html` files at the proposed clean URLs.
2. Test all ten URLs on the preview/deployment environment, including canonical tags and JSON-LD.
3. Check internal links for 404s and validate sitemap XML.
4. Review factual descriptions and connections against the catalogue before indexing.
5. Once deployed, submit the updated sitemap in Google Search Console and monitor indexing.

## Editorial note

Connections describe shared themes and narrative patterns; they do not assert direct influence unless supported by evidence. The pilot uses a small set of titles to test the page template before scaling to the full catalogue.
