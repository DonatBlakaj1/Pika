
// Panel switching
document.addEventListener('click', (e) => {
  const navItem = e.target.closest('.nav-item[data-panel]');
  if (navItem) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    navItem.classList.add('active');
    const panelId = navItem.dataset.panel;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const target = document.querySelector(`.panel[data-id="${panelId}"]`);
    if (target) target.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // Tab switching within a panel
  const tab = e.target.closest('.tab');
  if (tab && !tab.dataset.noToggle) {
    tab.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }

  // Chip toggle
  const chip = e.target.closest('.chip[data-toggle]');
  if (chip) chip.classList.toggle('active');

  // Checkbox toggle
  const cb = e.target.closest('.checkbox');
  if (cb) cb.classList.toggle('checked');
});
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", () => {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");


    });
});
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");

  sidebar.classList.toggle("active");
  main.classList.toggle("hide");
}

/* kur klikon menu ne sidebar */
document.querySelectorAll(".sidebar a").forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 768) {

      document.querySelector(".sidebar")
        .classList.remove("active");

      document.querySelector(".main")
        .classList.remove("hide");
    }
  });

});


