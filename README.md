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


## Automatic advertisement image cleanup

Every advertisement should pass through the Build Phi media-cleanup stage before publication. The presentation contract is:
- prefer transparent PNG/WebP product cutouts when a source supplies them;
- remove flat/white product-photo backdrops when this can be done without cutting into the item;
- crop excess empty margins and center the product;
- preserve the actual product pixels, toning, condition, labels and identifying details rather than cosmetically inventing condition;
- render the cleaned asset on the advertisement card's own background rather than a white image panel;
- keep the original source URL and image-rights/provenance metadata with the cleaned derivative.

The current Mercury-dime reference card removes its white card panel and uses product-image blending as the non-destructive live fallback. A production media worker should create a transparent derivative and store it beside the ad asset.

## Collection rewards and cart

Control Phi is the StarCoin authority for advertisement actions. Collect writes the ad snapshot to `infinity_phi_shop_cart_v1`, emits `infinity-shop-cart-updated`, and calls `ControlPhi.ensureActionCredit(listingId, "collect")`. Control Phi deduplicates by listing ID. Each unique collection is one tenth of a StarCoin; every ten credits become one whole StarCoin.

Control Phi also reconciles the existing cart at startup, so saved historical collections that do not yet have ledger entries receive their owed collect credits exactly once.

The Control Phi hamburger's Unified Wallet section contains **Shopping Cart**, which opens the collected-ad view in Shop Phi.
