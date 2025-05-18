const bgButton = document.getElementById("bg-button");
const backgrounds = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmdoMW90cDRpOGdzaDVoYjd3cXkyaWJzczg0OWEzZHEzOTllMW55dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AtHoQ9XWbpwLRxs0t/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc295N3k3aHFnYXJyZGk1dmY4aTI1dWk5eXdqbTZhYWFzeHo3bHE1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nm8hsggYNt3oqx5Elx/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2hyM2IyMTZsaGIxM21lNHo5N3B1ZDE0anp2eDFwNHAzZG12YmJjciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U5OgQSxhzjR1t4McGc/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmI5MWd6ejVpczFobXVtZWFiY2hmejN6aXh0NjRqbDlsNWpiNWoxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gfYXjXTyxDGpRkbl7d/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5hM3pqNTIybGlwcmtueHJwdGk0aGo1MmlqYzVxNjRmMzByajN5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11j5OF7BTglVkc/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHlxenMxdnFzOGtkZHR1anVhZ2J3bzJ3Z3M4a2FwMGJzMjhzenM3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LSKHkpRJySs5W81D7B/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZhN3M0a2s3OW93bnNudmdzZHRlMW40MWJhdHkzYnF3OWgxNXR0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KEATEV6uaagupaQEXW/giphy.gif",
];

let currentBgIndex = 0;

// Set default background on page load
document.documentElement.style.setProperty(
  "--bg-images",
  `url(${backgrounds[currentBgIndex]})`
);

bgButton.addEventListener("click", () => {
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  document.documentElement.style.setProperty(
    "--bg-images",
    `url(${backgrounds[currentBgIndex]})`
  );
});
