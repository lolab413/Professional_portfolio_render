export function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lola Babatunde. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with care using React
        </p>
      </div>
    </footer>
  );
}
