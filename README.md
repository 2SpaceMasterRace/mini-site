# varsha.lol
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Deployment**: [Vercel](https://vercel.com)

## Running Locally

This application requires Node.js v18.17+.

```bash
bun install
bun dev
```

Optional: Create a `.env.local` file with your `POSTGRES_URL` environment variable to store redirects.

## Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);
```
## Misc
