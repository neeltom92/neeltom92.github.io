The operator-console panel — gradient module with a labelled header over key/value readout rows. Used for the hero "service summary" and contact "reach me" list.

```jsx
<ReadoutPanel title="service summary" rows={[
  { k: "status", v: "available", ok: true },
  { k: "experience", v: "10+ years" },
  { k: "scale", v: "100M+ users" },
  { k: "focus", v: "AI infra · MCP" },
]} />
```

Pass `rows` as data, or compose `<PanelRow k= v= ok last />` children for custom values (links, etc). `ok` paints a value lime with a live dot.
