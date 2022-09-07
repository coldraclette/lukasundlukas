type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full max-w-screen-xl m-auto p-4">
      <div>{children}</div>
    </div>
  );
};
