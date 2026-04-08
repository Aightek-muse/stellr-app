# GitHub Pages Setup Instructions

**Goal:** Host privacy policy at `https://aightek-muse.github.io/stellr-app/privacy-policy`

---

## Quick Setup (5 minutes)

### Step 1: Verify Files Are in Place

Ensure these files exist in your `stellr-app` repository:

```
stellr-app/
├── docs/
│   ├── privacy-policy.md    ✅ Created
│   └── index.html           ✅ Created
└── PRIVACY_LABEL.md         ✅ Created (repo root)
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/aightek-muse/stellr-app`
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** Select `main` (or your default branch)
   - **Folder:** Select `/docs`
5. Click **Save**

### Step 3: Wait for Deployment

- GitHub will build your site (usually takes 1-2 minutes)
- You'll see a notification when deployment is complete
- Your privacy policy will be live at:
  - `https://aightek-muse.github.io/stellr-app/privacy-policy`
  - `https://aightek-muse.github.io/stellr-app/` (index page)

### Step 4: Verify the URL Works

1. Open `https://aightek-muse.github.io/stellr-app/privacy-policy` in a browser
2. Confirm the privacy policy renders correctly
3. Check that all links (Supabase, Expo privacy policies) work

### Step 5: Add URL to App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app (Stellr: Astrology & Birth Chart)
3. Go to **App Privacy** section
4. Add the privacy policy URL: `https://aightek-muse.github.io/stellr-app/privacy-policy`
5. Save

---

## Optional: Custom Domain

If you want to use a custom domain (e.g., `stellr.app/privacy`):

1. In **Settings > Pages**, under **Custom domain**, enter your domain
2. Follow GitHub's DNS configuration instructions
3. Update the privacy policy URL in App Store Connect

---

## Updating the Privacy Policy

When you need to update the privacy policy:

1. Edit `docs/privacy-policy.md`
2. Edit `docs/index.html` (update the HTML version)
3. Commit and push to `main`
4. GitHub Pages will auto-deploy (1-2 minutes)
5. No need to update App Store Connect unless the URL changes

---

## Troubleshooting

### Page Not Found (404)

- Wait 2-3 minutes after enabling GitHub Pages
- Verify the `/docs` folder is selected as the source
- Check that `index.html` exists in the `docs/` folder

### Styles Not Loading

- The HTML file has inline CSS, so no external stylesheets needed
- If you modified the HTML, ensure the `<style>` block is intact

### URL Returns Old Version

- GitHub Pages may cache for a few minutes
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Wait 5 minutes and try again

---

## Alternative: Host on Your Own Website

If you prefer to host on your own domain:

1. Upload `privacy-policy.md` or `index.html` to your web server
2. Ensure it's publicly accessible (no login required)
3. Use that URL in App Store Connect

Apple requires the privacy policy to be:
- ✅ Publicly accessible (no login)
- ✅ A working URL at all times
- ✅ Accessible from within the app (optional but recommended)

---

## Next Steps

After GitHub Pages is set up:

1. ✅ Add privacy policy URL to App Store Connect
2. ✅ Complete Privacy Nutrition Labels (see `PRIVACY_LABEL.md`)
3. ✅ Add a link to the privacy policy in your app's Settings or About screen
4. ✅ Submit your app for review

---

**Questions?** Contact: aytekgurkan@gmail.com
