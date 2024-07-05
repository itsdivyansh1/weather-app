import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  MagnetIcon,
  SearchCodeIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import * as React from "react";

export default async function Home({ params }: any) {
  return (
    <main className="w-full">
      <div className="md:w-[60vw] md:m-8 m-2">
        <div className="flex items-center justify-between space-y-2 max-w-full my-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Weather App</h2>
            <p className="text-muted-foreground">Get current weather easily</p>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"} variant={"link"}>
                  <SearchIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue="https://ui.shadcn.com/docs/installation"
                      readOnly
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Card className="max-w-full my-4 bg-secondary rounded-2xl flex  justify-between items-center p-8">
          <CardHeader>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-muted-foreground lg:text-5xl">
              Mumbai
            </h1>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              India
            </h3>

            <CardTitle className="text-[6rem]">24</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <SunIcon className="w-[10rem] h-[10rem]" />
          </CardContent>
        </Card>

        <Separator />

        <div className="my-4">
          <h2 className="text-2xl font-bold tracking-tight">Week</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 my-4 gap-4">
            <Card className="max-w-full bg-secondary rounded-2xl">
              <CardHeader>
                <SunIcon className="w-[5rem] h-[5rem]" />
              </CardHeader>
              <CardContent className="pt-4"></CardContent>
            </Card>

            <Card className="max-w-full bg-secondary rounded-2xl">
              <CardHeader>
                <SunIcon className="w-[5rem] h-[5rem]" />
              </CardHeader>
              <CardContent className="pt-4"></CardContent>
            </Card>

            <Card className="max-w-full bg-secondary rounded-2xl">
              <CardHeader>
                <SunIcon className="w-[5rem] h-[5rem]" />
              </CardHeader>
              <CardContent className="pt-4"></CardContent>
            </Card>
            <Card className="max-w-full bg-secondary rounded-2xl">
              <CardHeader>
                <SunIcon className="w-[5rem] h-[5rem]" />
              </CardHeader>
              <CardContent className="pt-4"></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
