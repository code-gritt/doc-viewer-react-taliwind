"use client";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function Home() {
  const docs = [
    // Remote file
    {
      uri: require("./files/sample.pdf"),
      fileType: "pdf",
      fileName: "sample.pdf",
    }, // Local File
  ];
  return (
    <div className="App">
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
    </div>
  );
}
