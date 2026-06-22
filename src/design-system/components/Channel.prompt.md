A contact row in the "reach me" console — 3-column mono grid (key · value · ↗). Hover washes faint, indents, and turns the value + arrow lime. Stack inside a ReadoutPanel.

```jsx
<ReadoutPanel title="reach me">
  <Channel label="Email" value="neeltom92@gmail.com" href="mailto:neeltom92@gmail.com" />
  <Channel label="GitHub" value="@neeltom92" href="https://github.com/neeltom92" external />
  <Channel label="Résumé" value="view online" href="/resume/" last />
</ReadoutPanel>
```

Mark the final row `last` to drop its divider.
