A project rendered as a "component" on the work grid — zero-padded index, mono status tag, oversized title, description, tech chips, corner ↗ link. Hover lifts the card, wipes a lime bar down the left edge and slides the arrow.

```jsx
<ProjectCard
  index={3}
  tag="open source · observability"
  oss
  title="Claude Code Observability"
  desc="Self-hosted Grafana + OTEL stack that tracks Claude Code CLI cost and token usage."
  stack={["Grafana", "OpenTelemetry", "Prometheus", "Loki", "Docker"]}
  href="https://github.com/neeltom92/claude-code-observability"
/>
```

`oss` turns the tag + LED amber (the open-source signal). Lay cards in a 2-col grid.
