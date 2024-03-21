import React from "react";
import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust the import path as needed

import { Button } from "@/components/ui/button";

interface ListItemProps {
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedTimestamp: Date;
  onDownload: () => void;
  onShow: () => void;
  onRemove: () => void;
}

export const ListItem = ({
  fileName,
  fileType,
  fileSize,
  uploadedTimestamp,
  onDownload,
  onShow,
  onRemove,
}: ListItemProps) => {
  const formattedFileSize = `${(fileSize / 1024).toFixed(2)} KB`;
  const uploadedTimeAgo = formatDistanceToNow(uploadedTimestamp, {
    addSuffix: true,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{fileName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">{fileType}</div>
          <div className="col-span-1">{formattedFileSize}</div>
          <div>Uploaded {uploadedTimeAgo}</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onDownload}>
            Download
          </Button>
          <Button variant="outline" onClick={onShow}>
            Show
          </Button>
          <Button variant="destructive" onClick={onRemove}>
            Remove
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
