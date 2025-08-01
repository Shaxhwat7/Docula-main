import { NavBar } from "./-Componenets/NavBar";

const LandingLayout = ({
  children,  
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <NavBar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;
