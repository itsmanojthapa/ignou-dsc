import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="h1-bold ">HOME</h1>
        <Button variant="outline" asChild>
          <div>
            Hello World
            <Link href="/login">Click here</Link>
          </div>
        </Button>
      </div>
    </main>
  );
}
