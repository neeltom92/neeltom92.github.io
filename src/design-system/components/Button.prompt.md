Terminal-style action button on the dark canvas — mono label; outline ghost by default, electric-lime fill for the primary CTA. Hovers lift 2px and wash lime.

```jsx
<Button variant="primary" href="/resume/">View résumé</Button>
<Button href="/resume.pdf">↓ Download PDF</Button>
<Button href="https://github.com/..." target="_blank">GitHub ↗</Button>
```

Use a single `primary` per group. Arrows (`↗ ↓`) are written into the label, matching the brand. Renders as `<a>` when `href` is present.
