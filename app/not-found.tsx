import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] max-w-2xl flex-col items-center justify-center text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-base text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back Home
        </Button>
      </div>
    </Container>
  );
}
