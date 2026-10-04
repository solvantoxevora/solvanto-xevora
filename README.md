# Solvanto Xevora Website

This package is designed for GitHub Pages + Supabase.

## Included
- Responsive Home / Software / News / About / Support site
- Clickable Retail Management software card
- Horizontal touch carousel with arrows, dots and click-to-expand previews
- Signup/sign-in with unique username
- Guest download protection; signed-in users receive the private download link below the Download button
- Private support/feedback architecture
- User, download and visitor analytics
- Owner-only Website Control Panel (`admin.html`)
- Maintenance mode with an editable maintenance message
- Editable website text, news, software capabilities/requirements, floating badges and floating buttons
- Advanced full JSON configuration editor
- Mobile-responsive layout

## Owner Control Panel
Open `admin.html` after deployment. Sign in with the owner email configured in `assets/site-config.js` and the SQL policy (`solvantoxevora@gmail.com`).

The control panel lets you:
- Turn maintenance mode on/off
- Change the maintenance message
- Edit hero, About and Support text
- Add/delete/edit floating badges and floating buttons
- Change badge/button type, text, icon, position, link and enabled state
- Add/delete/edit News items
- Edit Retail Management name, version, description and tags
- Add/delete/edit capabilities and requirements
- Edit the complete configuration with the JSON editor
- View registered users, download events, unique downloaders and unique visitors

If a floating position contains one element, it is automatically centered within that group.

## Supabase setup
1. Create a Supabase project.
2. Run `supabase_setup.sql` in Supabase SQL Editor.
3. In `assets/site-config.js`, replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY` with the project's public client values.
4. Upload `apps/Retail Management_0.1.0_x64-setup.exe` to the private Storage bucket named `software`.
5. Deploy the folder to GitHub Pages.

Never put a Supabase service-role/secret key in this website.

## Maintenance
When maintenance mode is enabled, public pages display the maintenance screen. The owner can still open `admin.html` directly and turn maintenance mode off.

## Previews
The five supplied Retail Management images are displayed in one horizontal carousel. Each uses a consistent 16:9 presentation frame with `object-fit: contain`, so the original interface is not stretched or cropped.
