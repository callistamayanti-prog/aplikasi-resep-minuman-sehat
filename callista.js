const recipes = [
  {
    title: "Jus Detox Hijau",
    ingredients: "Bayam, apel, lemon, air",
    steps: "Blender semua bahan hingga halus lalu sajikan dingin."
  },
  {
    title: "Smoothie Pisang Oat",
    ingredients: "Pisang, oat, susu almond, madu",
    steps: "Blender hingga lembut. Cocok untuk sarapan sehat."
  },
  {
    title: "Infused Water Jeruk Mint",
    ingredients: "Jeruk, daun mint, air dingin",
    steps: "Diamkan di kulkas minimal 2 jam sebelum diminum."
  }
];

const list = document.getElementById("recipe-list");
const search = document.getElementById("search");

function display(data) {
  list.innerHTML = "";
  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${r.title}</h3><p>${r.ingredients}</p>`;
    card.onclick = () => openModal(r);
    list.appendChild(card);
  });
}

search.addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(keyword)
  );
  display(filtered);
});

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

function openModal(r) {
  modal.classList.remove("hidden");
  document.getElementById("modal-title").textContent = r.title;
  document.getElementById("modal-ingredients").textContent = "Bahan: " + r.ingredients;
  document.getElementById("modal-steps").textContent = "Cara: " + r.steps;
}

closeBtn.onclick = () => modal.classList.add("hidden");
window.onclick = e => {
  if (e.target === modal) modal.classList.add("hidden");
};

display(recipes);
