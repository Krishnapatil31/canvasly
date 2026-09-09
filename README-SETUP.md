# Canvasly — Firebase connected build

Firebase is wired into the frontend with the supplied Web App configuration.

## Enable these Firebase products
1. Authentication → Sign-in method → Email/Password
2. Firestore Database
3. Storage

## Owner
The existing Canvasly owner email is used by the rules for owner-only publishing/deleting. No UID replacement is required.

## Deploy rules
Copy `firestore.rules` into Firestore Rules and `storage.rules` into Storage Rules, then publish them.

## Connected features
- Email/password signup and login
- User profiles in Firestore
- Cross-device saved wallpapers in Firestore
- Owner wallpaper uploads in Firebase Storage
- Wallpaper metadata in Firestore
- Public gallery reads from Firestore
- Per-user 1–5 star ratings in Firestore
- Owner delete support

## Important
The Firebase Web App config can be shipped in frontend code. Do not put service-account JSON or passwords in the website.


## Free Spark-plan image setup
This version does not use Firebase Storage. The Workspace accepts a public image URL and stores that URL in Firestore. This avoids requiring a Blaze billing account. The image itself must be hosted somewhere that provides a direct HTTPS image URL.
