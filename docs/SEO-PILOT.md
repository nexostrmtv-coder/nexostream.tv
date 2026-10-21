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
- Open Graph metadata, including the same catalogue poster used by the main site.
- Responsive poster next to each title and synopsis, using the exact poster URL from the catalogue.
- Schema.org `Movie` or `TVSeries` JSON-LD.
- Contextual internal links between pages in this pilot.
- Sitemap includes the homepage and the ten pilot URLs.

## Validation status

This is still a review branch; nothing here has been merged into `main` or deployed to production.

Checks completed against the branch source:
- All ten pages have a unique canonical URL, a poster image and matching `og:image`.
- All ten JSON-LD blocks parse as valid JSON.
- All internal links point to one of the ten pilot pages or the homepage; no duplicate links remain.
- The sitemap is valid XML and contains the homepage plus the ten pilot URLs.

Still required before merging:
1. Deploy a preview and confirm the actual host serves nested directories and `index.html` at the clean URLs.
2. Test all ten routes in that preview, including mobile layout, image loading, canonical tags and structured data.
3. Review factual descriptions and connections editorially before indexing.
4. After deployment, submit the updated sitemap in Google Search Console and monitor indexing.

## Editorial note

Connections describe shared themes and narrative patterns; they do not assert direct influence unless supported by evidence. The pilot uses a small set of titles to test the page template before scaling to the full catalogue.
