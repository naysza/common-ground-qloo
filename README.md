# Common Ground

**Common Ground is a cultural chemistry agent for real life.** It turns two people’s separate cultural signals into an unexpected shared “third thing” and a specific plan to experience it together.

## Why Qloo matters

Generic AI can invent a date idea. It cannot reliably identify the cultural territory between two people across music, film, food, and venues. Common Ground uses Qloo’s taste graph as its evidence layer: Qloo finds the bridge signal; the agent makes it human and actionable.

## Run locally

Requires Node.js 18 or newer.

```bash
npm run dev
```

Open `http://localhost:3000`, choose taste chips, then click **Find our common ground**.

The visual demo works without a key. For a deployed app with a Qloo key, add `QLOO_API_KEY` in your host’s environment-variable settings. The server keeps this secret out of the browser.

## Deploy

Deploy this folder to Render or Railway:

- Build command: leave empty
- Start command: `npm start`
- Environment variable: `QLOO_API_KEY` = your Qloo API key

## Submission description

Common Ground is a cultural chemistry agent that helps people make plans they’ll actually remember. Instead of asking what one person likes, it asks what cultural world two people could enter together. It uses Qloo’s taste graph to identify an unexpected shared signal across music, film, dining, and more, then turns that signal into a context-aware social itinerary. Qloo makes the product possible: the agent’s recommendations are grounded in real cultural affinity, not an LLM’s guess at compatibility.

## License

MIT. See [LICENSE](./LICENSE).
