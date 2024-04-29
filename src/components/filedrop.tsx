import React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function FileDrop() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    // onDrop: onFileUpload,
    // accept: ".pdf, ",
    // maxSize: 1024 * 1024 * 10,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload File</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-5">Upload File</DialogTitle>
          <DialogDescription>
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside>
                <h4 className="bold">File</h4>
                <ul>{files}</ul>
              </aside>
            </section>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
