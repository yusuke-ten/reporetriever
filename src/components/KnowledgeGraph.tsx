import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

type Node = {
  id: number;
  label: string;
};

type Link = {
  source: number;
  target: number;
  label: string;
};

type GraphData = {
  nodes: Node[];
  links: Link[];
};

export default function KnowledgeGraph() {
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [error, setError] = useState<string | null>(null);

  console.log('==================================');
  console.log("graphData", graphData);
  console.log('==================================');
  useEffect(() => {
    fetch("/api/graph-data")
      .then((response) => response.json())
      .then((data) => setGraphData(data))
      .catch((err) => {
        console.error("Error fetching graph data:", err);
        setError("Failed to load graph data");
      });
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!graphData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ForceGraph2D
        graphData={graphData}
        nodeLabel="label"
        linkLabel="label"
        nodeAutoColorBy="label"
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
      />
    </div>
  );
}
