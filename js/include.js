
function includeHTML() {
  const includeElements = document.querySelectorAll('[data-include]');

  includeElements.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;

      // Execute any scripts inside the loaded partial
      const scripts = el.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");

        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }

        document.body.appendChild(newScript);
        script.remove();
      });
    } catch (error) {
      el.innerHTML = "<p>Error loading component.</p>";
      console.error(`Error loading ${file}:`, error);
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);

  