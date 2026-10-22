# Triggers website

A responsive, standalone landing page for the Triggers TestFlight beta. Uses the supplied app screenshots, original app icon, and mascot GIF. The animated cream/teal background adapts the app's CalmGradientView design. No dependencies, build tools, accounts, or API keys are needed.

## Preview locally

From this folder run:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. You can also open index.html directly.

## Upload to GitHub and publish

1. Create a GitHub repository and upload the contents of this folder to its root, including `assets` and `.github`.
2. In the repository, go to **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**.
3. Open **Actions → Deploy website to GitHub Pages → Run workflow** (or push a change to `main`).
4. The completed deployment provides the website address.

Alternatively, select **Deploy from a branch**, choose your branch and **/(root)**, and save. This buildless site works with either option. All asset paths are relative, so project Pages URLs work.

The workflow assumes the main branch is named `main`; edit it if your branch has a different name. No custom domain is required. For social image previews after hosting, add an absolute `og:image` URL in index.html pointing to your hosted assets/app-icon.png.

## Files and customization

- `index.html`: page content and TestFlight links
- `styles.css`: responsive layout, brand colors, gentle motion
- `script.js`: screenshot tour, app appearance preview, automatically looping animation support
- `assets/`: all images served locally; no external image or font dependencies

All beta buttons link to https://testflight.apple.com/join/DHwRCSty. Change those links in index.html if the invitation changes. App requirements and beta availability are intentionally left to the TestFlight invitation.

The screenshot tour uses actual beta screenshots, including the sample dates and data shown in the supplied images. The site stores no visitor entries and includes no analytics. The light/dark control previews the app appearance. Motion follows the visitor's reduced-motion preference with no play button required. Three scenes are spread across the page: reading in the hero, the original adventure GIF in the middle, and a sleeping bedroom scene in the beta section. The reading SVG is a web adaptation of the app’s scene. The sleeping SVG follows BedroomScene.swift geometry, with a gently breathing quilt and twinkling stars.

The original artwork and screenshots belong to the app owner; no third-party redistribution license is implied.
