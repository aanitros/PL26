import { Button } from "@/components/ui/button";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">ProLeague</h1>
        <p className="text-muted-foreground">Build Your Legacy. Rule the League.</p>
      </header>
      <div className="text-center">
        <h2 className="text-2xl mb-4">Welcome to the Dashboard</h2>
        <p className="mb-6">The foundation is set. The journey begins now.</p>
        <Button>Continue</Button>
      </div>
    </div>
  );
}
