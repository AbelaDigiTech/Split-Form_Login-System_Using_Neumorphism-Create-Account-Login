This is a frontend-backend project demo of a user creating account and using 
the account credentials to login to the site and get welcomed to access the site
resources.

The project files are logically organized, linked correctly, and ready to run on 
Render (or locally). I also made the frontend resilient so it works both:

1.  when served from the same origin (recommended — i.e. you open the Render URL and 
    the static files are served by Express), and

2.  when served locally (development with localhost:3000) or via Live Server.

Important note: 

data/users.json is currently used as a tiny test DB — Render's filesystem is 
ephemeral (i.e. not persistent across deploys). This is OK for testing but not 
production. Later I can build a project to migrate to a real DB (Postgres) and 
add password hashing, rate limits, etc.

3.  Below is the organization of the folder structure:

Split-Form1_Login-System_Using_Neumorphism-Create-Account+Login/
├─ public/
│  ├─ assets/Abela-DigiTech Logo2.png
│  ├─ index.html
│  ├─ register.html
│  ├─ welcome.html
│  └─ activities.html
├─ data/
│  └─ users.json   ← initial content: []
└─ server.js

4.  The package.json has these:
{
  "name": "abela-auth-api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}

HOW TO RUN LOCALLY (DEPLOYMENT):

1.  From project root run:

2.  node server.js

3.  Open browser:

    http://localhost:3000/register.html (create account)

    http://localhost:3000/index.html (login)

    - Because server serves public/ statics, relative fetch calls (/register) work.


HOW TO RUN ON RENDER (PRODUCTION) — STEP-BY-STEP:

(A) Turn the Project into a local Git Repository and push the repo to GitHub (include 
public/, server.js, data/users.json):

TURNING THE PROJECT TO LOCAL GIT REPO AND DEPLOYING THE PROJECT ON GITHUB AND RENDER:

Step-by-step:

(a) Firstly, Project Copy needed to be created on GitHub:

Here is the Step-by-Step Guide on Creating the Project Copy on Github and then
Push the Project to Github:

Step 1: Create the Remote Repository (Project Copy) on Github:

(i)	Create a GitHub Account (if you don't have one):
    - Go to GitHub and sign up for a free account.

(ii)	Create a New Repository:
o	Sign in to GitHub.
o	Click the + icon in the top-right corner and select New repository.
o	Name your repository (Give it the same name that you give your project).
o	Optionally, add a description.
o	Choose to make the repository public or private.
o	Do not initialize the repository with a README.
o	Click Create repository.
o	Once created, scroll down to copy the repository link/url

- This is the Repository link/url after creating the Remote Repository:

https://github.com/AbelaDigiTech/Split-Form1_Login-System_Using_Neumorphism-Create-Account-Login.git

You would need to use this link/url to push the local repo to the remote repo by
doing something like this:

git remote add origin https://github.com/AbelaDigiTech/Split-Form1_Login-System_Using_Neumorphism-Create-Account-Login.git

Step 2: Create the Local Repository (i.e.Turn the Project into a Local Git Repository):

(i)	Install Git (if not already installed):
    - Download and install Git from git-scm.com.

(ii)	Open Your Terminal/Command Prompt:
      -	On Windows, you can use Git Bash or Command Prompt.
      - On macOS or Linux, use the Terminal.

(iii) Navigate to Your Project Directory:
      - Use the cd command to navigate to the directory where your HTML files are located.
      - cd path/to/your/project

(iv) Alternatively, use your VSCode to load the project folder, do ctrl+J or ctr+` to
      open CLI.

(iv)  Initialize the Git Repository:
      - Initialize Git:
      - Run the following command to initialize a new Git repository in your project 
        directory:

      git init

(v)	  Add Your Files:
      - Add all your project files to the staging area:

    git add .

(vi)	Commit Your Files:
      - Commit the files with a descriptive message:

    git commit -m "This is a frontend-backend create-account/login system using 
    split form."

Step 3: Push Your Project to GitHub:

(i)	To do so, ensure you have already created your remote repository which should 
    now have a link/url to it.  Go copy that link of your remote repository on 
    Github (if you have not done so alreay).  Come back here and write:

    git remote add origin https://github.com/your-username/your-repo-name.git

    o	Replace your-username and your-repo-name with your GitHub username and the 
      repository name i.e. in place of the above link, paste the remote repository 
      url/link that you copied.

(ii)	Push the Project Files:

    o	Push your committed files to the master branch on GitHub using the command:

		git push -u origin master

Step 4: Enable GitHub Pages:

(i)	  Go to Your GitHub Repository:
      o	Navigate to the repository page on GitHub.

(ii)	Open the Settings Tab:
      o	Click on the Settings tab at the top of the repository page.

(iii) Scroll Down to GitHub Pages Section:
      o	Scroll down to the GitHub Pages section.

(iv)	Select the Source:
      o	Under Source, select main branch (or master branch if you haven't renamed it).

(v)	  Save:
      o	Click Save or Save changes.

(vi)	Wait for Deployment:
      o	GitHub will automatically build and deploy your site. This may take a few minutes.

(vii) Access Your Live Site:
      o	Once deployed, you will see a link to your live site in the GitHub Pages section. 
      It will look something like https://your-username.github.io/your-repo-name/.

SUMMARY:

Let's assume your GitHub username is john-doe and your repository name is 
personal-profile.  Let this repository name also be your project (local repository) 
name.

Upload this project (local repository) or if not there yet at the root of your prompt,
change directory to this project folder (local repository) and do as follows:

1.	Initialize Git:

    git init

2.	Add and Commit Files:

    git add .

3.  Include commit message:

    git commit -m "commit-message"

4.	Get Remote Repository Link and Push Local Repository to GitHub like so:

git remote add origin https://github.com/john-doe/personal-profile.git

git push -u origin master

5.	Enable GitHub Pages:

o	Go to https://github.com/john-doe/personal-profile/settings.
o	Scroll down to the GitHub Pages section.
o	Select main branch under Source and click Save.
5.	Access Your Live Site:
o	Visit https://john-doe.github.io/personal-profile/.

ONCE YOU HAVE PUSHED YOUR PROJECT/FILES TO GITHUB, NOW, CONNECT YOUR GITHUB
TO RENDER:

(a) Begin with Creating a Render Account:
(b) Connect your render account to Github account

Go to:
👉 https://render.com

(i)     Click New → Web Service
(ii)    Connect your GitHub repository
        - Render will show your repositories → choose the one containing server.js.

THE SUMMARY:

- On Render → create New → Web Service and connect to your GitHub repo branch.

(c) Configure Render Deployment Settings

Set:

Setting:        	    Value
Environment:        	Node
Build Command:	        npm install
Start Command:	        npm start (or node server.js)
Free Tier:	            OK
Then click              Create Web Service.

(d) Set environment variables on Render (Service → Environment):

  1.  NODE_ENV = production

  2.  (optional) FRONTEND_ORIGIN = (if you host frontend separately, set it here, 
                                    e.g. https://yourfrontend.com).

(e) Deploy:

  - Once deployed, Render will show the service URL, for example:

    https://split-form-login-system-using.onrender.com

(f) Open https://<your-render-url>/register.html — fill form, click sign up. 
    - The browser will POST to https://<your-render-url>/register (same origin) and 
      the server will create the user (into data/users.json on that instance).


(g) Login at https://<your-render-url>/index.html.


NEXT MILESTONE (WHAT TO DO NEXT):

- Add password hashing + rate-limiting + helmet to server.js (minimal changes)

- Migrate from data/users.json → managed Postgres (imperative for production).  We 
  would learn about migration steps and the code using Postgres.
  Write a migration script + Postgres implementation and show how to move existing 
  users.json entries into Postgres (recommended).

- Walk through mapping a custom domain api.abeladigitech.com to our Render service 
  (get a registrar or get instructions for Cloudflare/Namecheap).

- We would also learn about Hash passwords with bcrypt — currently passwords are 
  stored plain text (unsafe).

- We would also add security middlewares: helmet, express-rate-limit, express-validator.

- Use HTTPS & custom domain: Render auto-provisions TLS; so we can map 
  api.abeladigitech.com via Render Custom Domains.

- Add Sentry or similar for error monitoring.

- Use session tokens / JWT for authentication and protect the activities.html 
  route if needed.

QUICK TESTS & DEBUG TIPS:

(A) If you get Network error in browser:

1.  Check the Network tab in DevTools to see POST URL 
    (must be https://your-render-url/register or http://localhost:3000/register).

2.  Check Render logs (Render service → Logs) to see request receipts and server 
    console output.

(B) To inspect users saved on Render instance: 

    Use Render Shell / Console or download the users.json from the instance 
    (not persistent across redeploys).

