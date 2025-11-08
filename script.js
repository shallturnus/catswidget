const cat = document.getElementById("cat");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX - 50; 
  const y = e.clientY - 50;
  cat.style.transform = `translate(${x}px, ${y}px)`;
});
