import React from "react"
import { formatDistanceToNow } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

interface ListItemProps {
  fileName: string
  fileType: string
  fileSize: number
  uploadedTimestamp: Date
  onDownload: () => void
  onShow: () => void
  onRemove: () => void
}

export function ListItem({
  fileName,
  fileType,
  fileSize,
  uploadedTimestamp,
  onDownload,
  onShow,
  onRemove,
}: ListItemProps) {
  const formattedFileSize = `${(fileSize / 1024).toFixed(2)} KB`
  const formattedTimestamp = formatDistanceToNow(uploadedTimestamp, { addSuffix: true })

  return (
    <Card className="mb-4">
      <CardContent className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{fileName}</h3>
          <p className="text-sm text-muted-foreground">
            {fileType} • {formattedFileSize} • {formattedTimestamp}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onDownload}>Download</DropdownMenuItem>
            <DropdownMenuItem onClick={onShow}>Show</DropdownMenuItem>
            <DropdownMenuItem onClick={onRemove}>Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  )
}