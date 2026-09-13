# Spicetify Marketplace publishing draft

Status: published from `main` with a genuine privacy-safe client screenshot from the public Lateralus album view.

Spicetify Marketplace currently discovers themes from public GitHub repositories carrying the `spicetify-themes` topic. The root `manifest.json` already supplies the required name, description, preview, README, CSS, scheme, author, and tag metadata.

## Final checks

- [x] Apply Catthode in the installed Spotify client.
- [x] Inspect Home cards and play-button hover states.
- [x] Inspect playback controls, progress and volume indicators.
- [x] Inspect full lyrics and the mini-player.
- [x] Keep theme behavior inside supported CSS, color-scheme, and theme-JavaScript boundaries.
- [x] Replace the initial repository-native SVG with a genuine PNG from a public album page; the library rail, account avatar, device name, recommendations, and notifications are outside the frame.
- [x] Verify `catthode/spicetify` is public and uses `main` as its default branch.
- [x] Push the final theme files and approved preview to `main` and verify CI.
- [x] Add the GitHub topic `spicetify-themes` to publish it to Marketplace discovery.

## Listing copy

**Name:** Catthode

**Description:** A warm, true-black Spotify theme built from Catthode's wheat, tan, gold, amber, and clay palette.

**Tags:** dark, oled, warm

## Known boundary

Spotify-generated artwork and promotional components can retain Spotify's dynamic colors. Addressing those surfaces would require changes beyond a normal Spicetify theme and is intentionally out of scope.
