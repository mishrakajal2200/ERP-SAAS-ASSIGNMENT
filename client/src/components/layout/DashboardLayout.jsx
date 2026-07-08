import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const DashboardLayout = ({
  children,
}) => {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-[#020617]
      "
    >
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;