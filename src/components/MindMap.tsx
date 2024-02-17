import { useState, useCallback } from "react";
import ReactFlow, {
    MiniMap,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import "./MindMap.css";

import './textupdater.css';
import TextUpdaterNode from "./TextUpdater";

const initialNodes = [
    {
        id: "1",
        type: "input",
        data: { label: "Mind Map" },
        position: { x: 0, y: 0 },
    },
];
const initialEdges = [];
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
};

const nodeTypes = { textUpdater: TextUpdaterNode };

export default function MindMap() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [name, setName] = useState("");

    const addNode = (x: number, y: number) => {
        setNodes((e) =>
            e.concat({
                id: (e.length + 1).toString(),
                data: { label: name === "" ? "Empty" : name },
                position: {
                    x,
                    y,
                },
            })
        );

        setName("");
    };

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div id="container">
            <div>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    name="title"
                    value={name}
                    placeholder="Enter node title"
                />
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={(e) => {
                    onNodesChange(e);
                }}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onLoad={onLoad}
                onNodeClick={(node_event) => {
                    node_event.target.remove();
                }}
                onDoubleClick={(e) => {
                    addNode(e.clientX, e.clientY);
                }}
                zoomOnDoubleClick={false}
                nodeTypes={nodeTypes}
            >
                <Controls />

                <MiniMap
                    nodeColor={(n) => {
                        if (n.type === "input") return "blue";

                        return "#FFCC00";
                    }}
                />
            </ReactFlow>
        </div>
    );
}
