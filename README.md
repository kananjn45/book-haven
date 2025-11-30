# Book‑Haven 📚

Book‑Haven is a fictional online bookstore front‑end built with HTML, CSS, JavaScript, and Bootstrap. It focuses on a clean UI, responsive design, and basic catalogue + cart behaviour on the client side. [web:46]

## ✨ Features

- Modern landing page with hero section and featured books
- Dynamic catalogue page populated via JavaScript
- Category filter and search by title/author
- Responsive book grid layout using CSS Grid
- “Add to Cart” button with cart item counter in the navbar
- Smooth scrolling between sections
- Custom styled buttons, cards, and gradients
- Fully front‑end (no backend, no database)

## 🏗️ Tech Stack

- **HTML5**
- **CSS3** (custom styles + CSS Grid)
- **Bootstrap 5** (layout, components, utilities) [web:13]
- **Bootstrap Icons** [web:13]
- **Vanilla JavaScript** (DOM, events, filtering, cart badge)

## 📂 Project Structure
book-haven/
├─ index.html          # Home page (hero + featured books)
├─ catalogue.html      # Catalogue page (all books)
├─ about.html          # About section (optional separate page)
├─ contact.html        # Contact section (optional separate page)
├─ css/
│  └─ style.css        # Custom styles
├─ js/
│  └─ main.js          # Catalogue logic, filters, cart badge
├─ assets/
│  ├─ images/          # Logo + local book covers (if any)
│  └─ icons/           # Optional favicon, etc.
└─ README.md

> If you are using only a single HTML file, update this structure section to match your setup.

## ⚙️ Getting Started

1. **Clone the repository**
- git clone https://github.com/<your-username>/book-haven.git
- cd book-haven

2. **Open in browser**

- Option A: Open `index.html` in any modern browser.  
- Option B (recommended): Use a simple local server (e.g. VS Code Live Server extension). [web:46]

3. **Navigate**

- Use the navbar to move between **Home**, **Catalogue**, **About Us**, and **Contact**.  
- Scroll to view featured books on the home page.  
- Open the catalogue to test filters, search, and “Add to Cart” button.

## 📚 Book Data & Functionality

- Book data is stored in a JavaScript array of objects (id, title, author, price, category, rating, image URL, description).
- Cards for each book are generated dynamically and inserted into the `.book-list` grid container.
- Category dropdown and search input filter the array and re‑render the grid.
- Clicking **Add to Cart**:
- Updates a simple in‑memory `cart` array.
- Increments the cart counter badge in the navbar.

> This is a **front‑end only** demo: there is no real checkout, authentication, or database.

## 🎨 Customization

You can easily change:

- **Colors & Gradients** – in `style.css` (backgrounds, buttons, cards).
- **Featured Books** – in the “Featured Books” section of `index.html`.
- **Catalogue Data** – by editing the `books` array in `main.js`.
- **Sections** – add or remove sections like FAQ, testimonials, or a blog preview.

## 🚀 Future Improvements (Ideas)

- Detailed book page or modal with more information and reviews.
- Persistent cart using `localStorage`.
- Wishlist / favorites feature.
- Pagination or “Load more” for very large catalogues.
- Dark / light mode toggle.

## 🤝 Contributing

Feel free to fork this repo and modify it for your own learning or portfolio. Suggestions and pull requests are welcome. [web:48]

## 📄 License

This project is created for learning and demonstration purposes. You may reuse the code structure and styling, but please replace any third‑party book cover images or assets with ones you have the rights to use.
