(A) How to run locally (development)

From project root run:

node server.js


Open browser:

http://localhost:3000/register.html (create account)

http://localhost:3000/index.html (login)

Because server serves public/ statics, relative fetch calls (/register) work.


(B) How to run on Render (production) — step-by-step

1.  Push the repo to GitHub (include public/, server.js, data/users.json).

2.  (a)  On Render → create New → Web Service and connect to your GitHub repo branch.

    (b) Build command:      npm install

    (c) Start command:      node server.js

    (d) Set environment variables on Render (Service → Environment):

        NODE_ENV = production

        (optional) FRONTEND_ORIGIN = (if you host frontend separately, 
        set it here, e.g. https://yourfrontend.com).

    (e) Deploy. Once deployed, Render will show the service URL, for example:

        https://split-form-login-system-using.onrender.com


3.  Open https://<your-render-url>/register.html — fill form, click sign up. 
    The browser will POST to https://<your-render-url>/register (same origin) and 
    the server will create the user (into data/users.json on that instance).

4.  Login at https://<your-render-url>/index.html.


(C) Important Production Recommendations (what to do next)

    -   Migrate from data/users.json → managed Postgres (imperative for production; 
        I can provide migration steps and code).

    -   Hash passwords with bcrypt — currently passwords are stored plain 
        text (unsafe).

    -   Add security middlewares: helmet, express-rate-limit, express-validator.

    -   Use HTTPS & custom domain: Render auto-provisions TLS; you can map 
        api.abeladigitech.com via Render Custom Domains.

    -   Add Sentry or similar for error monitoring.

    -   Use session tokens / JWT for authentication and protect the activities.html 
        route if needed.

(D) Quick tests & debug tips:

    If you get Network error in browser:

    1.  Check the Network tab in DevTools to see POST URL 
        (must be https://your-render-url/register or http://localhost:3000/register).

    2.  Check Render logs (Render service → Logs) to see request receipts and 
        server console output.

    3.  To inspect users saved on Render instance: use Render Shell / Console or 
        download the users.json from the instance (not persistent across redeploys).

If you’d like, I can continue and:

Add password hashing + rate-limiting + helmet to server.js (minimal changes), or

Write a migration script + Postgres implementation and show how to move existing users.json entries into Postgres (recommended), or

Walk through mapping a custom domain api.abeladigitech.com to your Render service 
(give me your registrar or tell me you want instructions for Cloudflare/Namecheap).

Which one do you want me to implement next?