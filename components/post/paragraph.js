export default function Paragraph({ children }) {
  return (
    <div
      style={{
        display: "block",
        marginTop: "1em",
        marginBottom: "1em",
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      {children}
    </div>
  );
}
