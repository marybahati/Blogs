import React, { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
