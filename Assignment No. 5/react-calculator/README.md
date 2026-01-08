React Calculator (minimal, CDN)

Files:
- index.html — single-file React app using CDN + Babel (no build step)
- style.css — styles for the calculator

Run

Option 1 — open directly:
Open `index.html` in your browser (double-click or open via browser).

Option 2 — local server (recommended for some browsers):

- Python 3:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/react-calculator/` in the browser.

Next steps

- Convert to CRA/Vite project if you want a modern build toolchain.
- Add keyboard support, history, and more operations on request.
