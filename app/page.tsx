import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div>
      <Button>click me</Button>
      <Input />
      {JSON.stringify(session, null, 2)}
    </div>
  );
}
