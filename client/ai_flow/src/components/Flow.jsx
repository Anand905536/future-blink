import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "./InputNode";
import ResultNode from "./ResultNode";
import { askAI, savePrompt } from "../services/services";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

const initialNodes = [
  {
    id: "1",
    type: "inputNode",
    position: { x: 150, y: 200 },
    data: { prompt: "", onChange: () => {} },
  },
  {
    id: "2",
    type: "resultNode",
    position: { x: 550, y: 200 },
    data: { answer: "" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
];

const FlowCanvas = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const updatedNodes = nodes.map((node) => {
    if (node.id === "1") {
      return { ...node, data: { prompt, onChange: setPrompt } };
    }
    if (node.id === "2") {
      return { ...node, data: { answer } };
    }
    return node;
  });

  const runFlow = async () => {
    if (!prompt) return alert("Enter the prompt");
    try {
      setLoading(true);
      const res = await askAI(prompt);
      setAnswer(res.data.answer);
    } catch {
      alert("AI request failed");
    } finally {
      setLoading(false);
    }
  };

  const saveFlow = async () => {
    if (!prompt || !answer) return alert("Nothing to save");
    await savePrompt(prompt, answer);
    alert("Saved");
  };

  return (
    <div style={canvasWrapper}>
      {/* TOP BAR */}
      <div style={topBar}>
        <h2 style={{ color: "#fff", margin: 0 }}>AI Flow Builder</h2>
        <div>
          <button style={pinkBtn} onClick={runFlow} disabled={loading}>
            {loading ? "Running..." : "Run Flow"}
          </button>
          <button style={darkBtn} onClick={saveFlow}>
            Save
          </button>
        </div>
      </div>

      <ReactFlow
        nodes={updatedNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={{
          background: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        <Background color="#1f2933" gap={24} />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;

/* ================= STYLES ================= */

const canvasWrapper = {
  height: "100vh",
  width: "100vw",
  position: "relative",
  background: "radial-gradient(circle at top, #111, #000)",
};

const topBar = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 20px",
  background: "rgba(0,0,0,0.8)",
  backdropFilter: "blur(10px)",
};

const pinkBtn = {
  background: "#ff007a",
  color: "#fff",
  border: "none",
  padding: "10px 16px",
  borderRadius: "10px",
  fontWeight: "600",
  cursor: "pointer",
  marginRight: "10px",
};

const darkBtn = {
  background: "#020617",
  color: "#fff",
  border: "1px solid #334155",
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
};