export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div>This is a navbar</div>
      {children}
    </div>
  );
}
