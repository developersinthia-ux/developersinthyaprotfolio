SINTHIA AFRIN — ADVANCED PORTFOLIO SETUP
========================================

FILES
- index.html: page structure and editable text
- style.css: black/silver visual design, responsive layout and animation
- script.js: navigation, reveal effects, project filtering, social links and email draft

RUN LOCALLY
1. Extract the ZIP file.
2. Open the extracted sinthia-afrin-portfolio folder in VS Code.
3. Double-click index.html to preview in your browser.
4. For easier editing, use VS Code and optionally the Live Server extension.

ADD YOUR SOCIAL LINKS
Open script.js and find:
const socialProfiles = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  instagram: "https://www.instagram.com/your-username/",
  facebook: "https://www.facebook.com/your-profile/"
};
Replace each example URL with your real profile URL. The links in both the hero and contact sections update automatically.

ADD YOUR OWN PORTRAIT
1. Create an images folder inside the project folder.
2. Add your photo, for example images/sinthia.jpg.
3. In index.html, find the hero-art block and replace it with:
   <img src="images/sinthia.jpg" alt="Sinthia Afrin" class="hero-photo">
4. Add this CSS to style.css:
   .hero-photo { width:100%; height:100%; object-fit:cover; display:block; }
Do the same for the about image if desired.

ADD REAL DEMO PROJECTS
- Project cards are in index.html under section id="work".
- Replace each concept card's title and description.
- Replace the project-image artwork with an image such as:
  <img src="images/project-01.jpg" alt="Screenshot of my project">
- Add a real live demo or source-code URL to the project links.
- The project filter uses data-category values: design, development, ai.
- The current cards are demo concepts and should not be represented as completed client work unless you actually made them.

UPDATE SERVICES
Edit the three service cards in index.html under id="services" so they match the services you genuinely offer.

UPDATE CONTACT EMAIL
Change hello@sinthiaafrin.com in BOTH index.html and script.js to your real email.
The contact form opens the visitor's email app with a prefilled draft. It does not send or save form submissions on a server. For a true online form, connect a form backend/service.

PUBLISH ONLINE
Upload the extracted files to a static hosting provider such as GitHub Pages or Netlify. Keep index.html, style.css and script.js together in the same folder. Google Fonts require internet access; system fallback fonts are included.


আপডেট: Sinthia-র দেওয়া দুটি ছবি যোগ করা হয়েছে।
- images/sinthia-hero.jpeg : হোম/hero section-এর ছবি
- images/sinthia-about.jpeg : About section-এর ছবি
ছবিগুলো ঠিকভাবে দেখানোর জন্য images ফোল্ডারটি index.html, style.css ও script.js-এর সঙ্গে একই মূল ফোল্ডারে রাখবে।
