import { Handle, Position } from "reactflow";

const ResultNode = ({ data }) => {
  return (
    <div style={node}>
      <div style={heading}>AI Result</div>

      <div style={output}>
        {data.answer || "AI response will appear here"}
      </div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default ResultNode;

/* ===== styles ===== */

const node = {
  width: "180px",
  padding: "6px",
  background: "#020617",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.45)",
};

const heading = {
  color: "#ff007a",
  fontSize: "10px",      // 🔥 half size
  fontWeight: "600",
  marginBottom: "3px",
};

const output = {
  background: "#0f172a",
  color: "#ffffff",
  padding: "5px",
  borderRadius: "5px",
  fontSize: "9px",       // 🔥 half size
  minHeight: "28px",
  maxHeight: "70px",
  overflowY: "auto",
  whiteSpace: "pre-wrap",
};
