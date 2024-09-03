import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="w-full py-2 px-4 flex justify-between items-center">
        <h1 className="text-4xl text-gray-700 font-bold">
          Auth
        </h1>
        <div>
          <Button asChild className="flex justify-center items-center gap-2">
            <Link href="/signin">
              <Avatar>
                <User />
              </Avatar>
              サインイン
            </Link>
          </Button>
        </div>
      </header>
      <hr />
    </div>
  );
}
