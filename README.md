## Running the app

### Production

```bash
npm ci
npm run build
npm start
```

### Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for both production and development mode.

### Prisma studio

To check out the database contents run `npx prisma studio`.
It will open the panel on [http://localhost:5555](http://localhost:5555).

### Testing

To run tests use `npm run test`.
