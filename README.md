# Build Phi · Advertisement Card

Reusable advertisement/sale-card contract for the Phi sites.

## Standard actions

- **Advertisement** is visibly disclosed on the card.
- **Buy It Now** is the primary blue commerce action.
- **Collect** copies the complete listing snapshot into the Phi Shop cart.
- **Share** uses the device share sheet and emits `infinity-starcoin-share` after a completed share/copy fallback. The event requests **0.1 StarCoin**; the unified wallet service remains the authority that validates and credits rewards.
- **Shop Phi** opens a similar-item search using the listing title.
- The Shop cart is a reusable global control intended for each Phi site's top-right chrome or hamburger menu.

## Mercury dime reference

The current reference listing is the **1936-D Mercury dime · 100 Quants** test advertisement in `www-infinity4/C13b0`. It remains a simulated checkout: no Quant debit and no physical shipment.

## Integration events

`infinity-shop-cart-updated` — emitted after cart collection/removal.

`infinity-starcoin-share` — emitted only after the share flow succeeds, with `{ source, listingId, amount: 0.1, url }`.

Do not award StarCoin merely for pressing Share. The wallet/ledger listener must validate the completed share event and prevent duplicate reward abuse.

## Shop Phi

Similar-item searches route to `https://www-infinity4.github.io/Shop-Phi/?q=<listing title>`.

## Source of truth

This repository owns the portable ad-card contract. Live Phi apps may carry synchronized copies until the shared package is imported directly.
