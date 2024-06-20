import { BarChart, MonitorPlay } from "lucide-react";

const Sidebar = () => {
  const sidebarRoutes = [
    { icon: <MonitorPlay />, label: "Courses", path: "/instructor/courses" },
    {
      icon: <BarChart />,
      label: "Performance",
      path: "/instructor/performance",
    },
  ];

  return <div>Sidebar</div>;
};

export default Sidebar;
