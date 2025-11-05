"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-10">
      <Card className="max-w-md w-full text-center shadow-lg pt-5">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">Under Development 🚧</h2>
          <p className="text-foreground/70">
            This page isn't finished yet. We're working hard to bring it to
            life!
          </p>
        </CardContent>
        <CardFooter>
          <Link to="/">
            <Button className="w-full hover:cursor-pointer">Go Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
