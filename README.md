# LONG100 Connectors

Serverless connectors for importing 7-day wellness data from wearables and health platforms into LONG100.

## Providers

- Google Fit: OAuth2 PKCE template (HR, steps, sleep, activity)
- Fitbit: OAuth2 PKCE template (RHR, steps, sleep, stress)
- WHOOP: Template placeholder
- Polar: Template placeholder
- Garmin: Partner webhook model (placeholder)
- COROS: Limited API (placeholder)

## Usage

Deploy this repo to Vercel/Netlify. Set env vars for each provider.

## Env Vars

- LONG100_ORIGIN
- SECRET
- Provider-specific client IDs, redirect URIs, secrets

## License

MIT
