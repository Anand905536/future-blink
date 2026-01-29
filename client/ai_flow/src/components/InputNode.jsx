import { Handle, Position } from "reactflow";

const InputNode = ({ data }) => {
  return (
    <div style={node}>
      <div style={heading}>Prompt</div>

      <textarea
        rows={2}
        value={data.prompt}
        onChange={(e) => data.onChange(e.target.value)}
        placeholder="Type your prompt..."
        style={textarea}
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default InputNode;

/* ===== styles ===== */

const node = {
  width: "160px",
  padding: "6px",
  // background: "black",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(3, 0, 0, 0.45)",
};

const heading = {
  color: "#ff007a",
  fontSize: "10px",      // 🔥 half size
  fontWeight: "600",
  marginBottom: "3px",
};

const textarea = {
  width: "100%",
  background: "#000207",
  color: "#ffffff",
  border: "1px solid #334155",
  borderRadius: "5px",
  padding: "4px",
  fontSize: "9px",       // 🔥 half size
  resize: "none",
};