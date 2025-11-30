// =====================
// 1. Book data
// =====================
var books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 399,
    category: "Fiction",
    rating: 4.5,
    image: "https://tse1.mm.bing.net/th/id/OIP.eTO09xqdGYiKU913AIb0vQHaJt?pid=Api&P=0&h=180.jpg",
    description: "A classic novel exploring wealth, love, and the American Dream."
  },
  {
    id: 2,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 499,
    category: "Fiction",
    rating: 4.4,
    image: "https://tse3.mm.bing.net/th/id/OIP.sMaU8fK-ydNw9uhgUXzqMAHaKc?pid=Api&P=0&h=180",
    description: "A woman steps into a magical library that lets her explore alternate lives."
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 449,
    category: "Fiction",
    rating: 4.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.T55C4BiOVfcS3WFdCM3xdwHaK2?pid=Api&P=0&h=180",
    description: "A powerful story about justice, race, and childhood in the American South."
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    price: 349,
    category: "Fiction",
    rating: 4.7,
    image: "https://tse3.mm.bing.net/th/id/OIP.YiPEL01d-C_pyzTtev9x8AHaLh?pid=Api&P=0&h=180",
    description: "A dystopian vision of a totalitarian future under constant surveillance."
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 599,
    category: "Self-Help",
    rating: 4.9,
    image: "https://tse4.mm.bing.net/th/id/OIP.bX8mHQa4gajwX7oWCok-tQHaIk?pid=Api&P=0&h=180",
    description: "A guide to building small daily habits that lead to big, long‑term results."
  },
  {
    id: 6,
    title: "Deep Work",
    author: "Cal Newport",
    price: 549,
    category: "Non-Fiction",
    rating: 4.6,
    image: "https://tse3.mm.bing.net/th/id/OIP.SY8F9D2w6cezYkUvXig-twHaLL?pid=Api&P=0&h=180",
    description: "Explains how focused, distraction‑free work can multiply your productivity."
  },
  {
    id: 7,
    title: "Educated",
    author: "Tara Westover",
    price: 529,
    category: "Non-Fiction",
    rating: 4.6,
    image: "https://tse4.mm.bing.net/th/id/OIP.NgCUeUpmYub2s1Ob603mVwHaLX?pid=Api&P=0&h=180",
    description: "A memoir of a woman who grows up in a strict household and pursues education."
  },
  {
    id: 8,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 499,
    category: "Children",
    rating: 4.9,
    image: "https://tse3.mm.bing.net/th/id/OIP.F9lB4jT6gsONFIC71wXmtwHaLH?pid=Api&P=0&h=180",
    description: "An orphan discovers he is a wizard and begins his first year at Hogwarts."
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 459,
    category: "Fantasy",
    rating: 4.8,
    image: "https://tse3.mm.bing.net/th/id/OIP.Tn9UhPOHGaanUGwMYxFLYAHaLH?pid=Api&P=0&h=180",
    description: "Bilbo Baggins is swept into an epic quest to reclaim a lost dwarf kingdom."
  },
  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 499,
    category: "Self-Help",
    rating: 4.2,
    image: "https://tse1.mm.bing.net/th/id/OIP.ZYqBjPOQORWQNe5KPXoG5gHaLG?pid=Api&P=0&h=180",
    description: "Offers a counterintuitive approach to living a good, meaningful life."
  },
  {
    id: 11,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 699,
    category: "Non-Fiction",
    rating: 4.7,
    image: "https://tse1.mm.bing.net/th/id/OIP.9yxpeuZXBlFNCNj0MQiiigHaLH?pid=Api&P=0&h=180",
    description: "Traces the history of our species from early humans to the modern age."
  },
  {
    id: 12,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    price: 899,
    category: "Academic",
    rating: 4.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.VaRPe46wPM5m_BLXOskkDgHaJb?pid=Api&P=0&h=180",
    description: "Practical tips and philosophy for becoming a better software developer."
  },
  {
    id: 13,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 949,
    category: "Academic",
    rating: 4.8,
    image: "https://tse3.mm.bing.net/th/id/OIP.ZfYHb383Tk0kUMP-XsfWegHaJI?pid=Api&P=0&h=180",
    description: "Shows how to write code that is readable, flexible, and easy to maintain."
  },
  {
    id: 14,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 499,
    category: "Non-Fiction",
    rating: 4.6,
    image: "https://tse1.mm.bing.net/th/id/OIP.XQupldA3p9V-e34S4mV34gHaKp?pid=Api&P=0&h=180",
    description: "Stories and lessons about how people think about money and decisions."
  },
  {
    id: 15,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 399,
    category: "Self-Help",
    rating: 4.3,
    image: "https://tse4.mm.bing.net/th/id/OIP.CV7szttijwEn1x9cbs3kIgHaLH?pid=Api&P=0&h=180",
    description: "A classic book on mindset, goal setting, and building lasting success."
  }
];

var bookListEl = document.getElementById("book-list");

function getStarIcons(rating) {
  var fullStars = Math.floor(rating);
  var halfStar = rating % 1 >= 0.5;
  var starsHtml = "";

  for (var i = 0; i < fullStars; i++) {
    starsHtml += '<i class="bi bi-star-fill text-warning"></i>';
  }
  if (halfStar) {
    starsHtml += '<i class="bi bi-star-half text-warning"></i>';
  }
  var emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  for (var i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="bi bi-star text-warning"></i>';
  }
  return starsHtml;
}

function renderBooks(bookArray) {
  if (!bookListEl) return;

  if (bookArray.length === 0) {
    bookListEl.innerHTML = `
      <p class="text-center text-muted my-4">
        No books found. Try changing filters or search keywords.
      </p>
    `;
    return;
  }

  var cardsHtml = bookArray
  .map(book => {
    return `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <h5>${book.title}</h5>
        <p class="author">${book.author}</p>
        <p class="category">${book.category}</p>
        <p class="price">₹${book.price}</p>
        <br>
        <button class="btn btn-outline-light mt-2 w-100 add-to-cart-btn"
                data-id="${book.id}">
          Add to Cart
        </button>
      </div>
    `;
  })
  .join("");

bookListEl.innerHTML = cardsHtml;

}

var categorySelect = document.getElementById("category-filter");
var searchInput = document.getElementById("search-input");

function getFilteredBooks() {
  var category = categorySelect ? categorySelect.value : "all";
  var searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

  return books.filter(book => {

    var matchesCategory =
      category === "all" || book.category.toLowerCase() === category.toLowerCase();

    var matchesSearch =
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

if (categorySelect) {
  categorySelect.addEventListener("change", () => {
    renderBooks(getFilteredBooks());
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    renderBooks(getFilteredBooks());
  });
}

var cart = [];

function addToCart(id) {
  var book = books.find(b => b.id === id);
  if (!book) return;

  var existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  updateCartBadge();
}

function updateCartBadge() {
  var cartCountEl = document.getElementById("cart-count");
  if (!cartCountEl) return;

  var totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;
}

if (bookListEl) {
  bookListEl.addEventListener("click", (e) => {
    var btn = e.target.closest(".add-to-cart-btn");
    if (!btn) return;
    var id = Number(btn.dataset.id);
    addToCart(id);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderBooks(books);
  updateCartBadge();
});
