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
- Responsive layout and poster URLs from the current catalogue.
- Catalogue myths, themes and archetypes are rendered exactly as stored.
- Sitemap contains only the homepage and the ten approved SEO routes.
- GitHub Actions validation compares each page's myths, themes and archetypes directly with `index.html`, checks exact approved connections, JSON-LD, internal links and sitemap.

## Deployment gate — not yet cleared

Nothing in this branch has been merged into `main` or published to production. The repository has a `CNAME` file but no deployment workflow on `main`; those facts alone do not prove which provider currently serves `nexostream.tv`. The connected Vercel account has no matching project and the connected Railway account lists only the separate Subastas Oportunidades project. The live hosting provider and production route behavior still need independent verification. Do not merge or publish until the active host or a genuine preview deployment is confirmed and all ten routes are tested there.

## Catalogue data-quality note

The current catalogue record for `Star Wars` (1977) contains a synopsis referring to the First Order and Rey, which does not match that film's period and title. This pilot uses a corrected editorial synopsis but retains the poster URL registered in the catalogue. The catalogue record itself is not changed by this PR and the poster should be visually checked before production.
