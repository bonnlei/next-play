// create a page to display a page list to link all pages under src/app/components

//"use client";
import Link from "next/link";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { readdir } from "fs/promises";

interface DataItem {
  name: string;
  url: string;
}

const data: DataItem[] = [
  { name: "Button", url: "/docs/components/button" },
  { name: "Input", url: "/docs/components/input" },
  // ... more data items
];

async function getDirectories(path: string) {
  const dirs = await readdir(path, { withFileTypes: true });
  return dirs
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      // split dirent.name with '-', and uppercase the first letter of each word
      // e.g. list-item -> List Item
      const name = dirent.name
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      return {
        name,
        url: `/components/${dirent.name}`,
      };
    });
}

export default async function ComponentsPage() {
  // get all folders under src/app/components
  const dirs = await getDirectories("src/app/components");
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Components</h1>
      <div className="flex flex-wrap gap-4 mt-6">
        {dirs.map((item, index) => (
          <CardContent className="p-4 bg-gray-100" key={`com-${index}`}>
            <Link href={item.url} legacyBehavior passHref>
              <a className="text-lg font-medium hover:underline">{item.name}</a>
            </Link>
          </CardContent>
        ))}
      </div>
    </div>
  );
}
