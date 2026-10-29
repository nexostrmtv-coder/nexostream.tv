# NexoStream SEO pilot: ten approved title pages

## Scope

This branch contains the ten pages approved for the SEO pilot, using the current catalogue embedded in `index.html` (470 catalogue records). The myth, theme and character-archetype labels are copied from the corresponding catalogue record; editorial summaries and connection explanations are written for these pages.

## Approved pages and connections

### Films
- `/peliculas/star-wars/` — The Lord of the Rings; Dune; Harry Potter and the Philosopher Stone.
- `/peliculas/interstellar/` — Arrival; Doctor Who.
- `/peliculas/alien/` — Jaws; The Thing.
- `/peliculas/blade-runner/` — Dark City; The Matrix; Westworld.
- `/peliculas/the-matrix/` — Dark City; Tron; Westworld.
- `/peliculas/the-lord-of-the-rings/` — Dune; Star Wars.

### Series
- `/series/game-of-thrones/` — The Lord of the Rings: The Rings of Power; Peaky Blinders; Sons of Anarchy.
- `/series/stranger-things/` — The Goonies; From; The Leftovers.
- `/series/one-piece/` — The Mandalorian; Pirates of the Caribbean: The Curse of the Black Pearl; The Goonies.
- `/series/the-last-of-us/` — The Walking Dead; Children of men; Mad Max 2.

The two-connection pages (Interstellar, Alien and The Lord of the Rings) intentionally remain at two connections; no filler titles are added. Connection explanations describe thematic parallels and do not assert direct influence.

## Technical implementation

- Static `index.html` files under `/peliculas/<slug>/` and `/series/<slug>/`.
- Unique title and meta description, canonical URL, Open Graph and Twitter metadata.
- Schema.org `Movie` or `TVSeries` JSON-LD.
- Responsive layout and poster URLs from the current catalogue; the Star Wars SEO page uses a verified working TMDB poster URL because the registered catalogue URL did not load in the visual check.
- Catalogue myths, themes and archetypes are rendered exactly as stored.
- Sitemap contains only the homepage and the ten approved SEO routes.
- GitHub Actions validation compares each page's myths, themes and archetypes directly with `index.html`, checks exact approved connections, JSON-LD, internal links and sitemap.

## Deployment gate — identified, preview still required

Nothing in this branch has been merged into `main` or published to production. The active deployment mechanism is GitHub Pages: the repository has a `CNAME` file and GitHub Actions shows a successful `pages build and deployment` run on 19 October 2026, including the step `Deploy to GitHub Pages`. The PR validation now also runs the same GitHub Pages Jekyll builder and checks that all ten nested `index.html` route files exist in the generated `_site` output.

The repository does not provide a public preview deployment for pull requests. The generated output can be checked in CI, but the ten new URLs cannot be HTTP-tested on the production domain until they are deployed. Do not merge or publish until a separate preview/staging URL is available and all ten clean routes, images, canonical tags and structured data have been checked there. After production publication, run a second smoke test against all ten live URLs.

## Catalogue data-quality note

The current catalogue record for `Star Wars` (1977) contains a synopsis referring to the First Order and Rey, which does not match that film's period and title. This pilot uses a corrected editorial synopsis and a verified working TMDB poster URL (`6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg`); the poster URL registered in the catalogue did not load in the visual check. The underlying catalogue record and homepage remain unchanged in this PR and should be corrected separately.
