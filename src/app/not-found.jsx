import ButtonBack from "@/components/Utilities/ButtonBack";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid gap-4 text-center">
        <h1 className="text-4xl font-bold text-color-primary">404 Not Found</h1>
        <ButtonBack />
      </div>
    </div>
  );
}
