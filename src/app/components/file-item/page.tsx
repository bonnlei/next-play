"use client";
import React from "react";
import { ListItem } from "@/components/FileItem"; // Adjust the path if needed

const listItems = [
  {
    fileName: "document.pdf",
    fileType: "PDF",
    fileSize: 123456,
    uploadedTimestamp: new Date(),
  },
  // ... more items
  {
    fileName: "image.png",
    fileType: "PNG",
    fileSize: 654321,
    uploadedTimestamp: new Date(),
  },
  {
    fileName: "spreadsheet.xlsx",
    fileType: "Excel",
    fileSize: 789012,
    uploadedTimestamp: new Date(),
  }
];

export default function Page() {
  return (
    <div>
      {listItems.map((item) => (
        <ListItem
          key={item.fileName}
          fileName={item.fileName}
          fileType={item.fileType}
          fileSize={item.fileSize}
          uploadedTimestamp={item.uploadedTimestamp}
          onDownload={() => console.log("Download", item.fileName)}
          onShow={() => console.log("Show", item.fileName)}
          onRemove={() => console.log("Remove", item.fileName)}
        />
      ))}
    </div>
  );
}
