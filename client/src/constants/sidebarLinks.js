import {
  LayoutDashboard,
  BarChart3,
  FileBarChart2,
  CalendarDays,
  FolderKanban,
  CheckSquare,
  Users,
  Building2,
  Bell,
  Settings,
  UserCircle,
  LogOut,
  Wallet,
  ClipboardList,
} from "lucide-react";

const sidebarLinks = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
      },
      {
        name: "Analytics",
        icon: BarChart3,
        path: "/dashboard/analytics",
      },
      {
        name: "Reports",
        icon: FileBarChart2,
        path: "/dashboard/reports",
      },
      {
        name: "Calendar",
        icon: CalendarDays,
        path: "/dashboard/calendar",
      },
    ],
  },

  {
    title: "WORKSPACE",
    items: [
      {
        name: "Projects",
        icon: FolderKanban,
        path: "/projects",
      },
      {
        name: "Tasks",
        icon: CheckSquare,
        path: "/tasks",
      },
      {
        name: "Departments",
        icon: Building2,
        path: "/departments",
      },
      {
        name: "Employees",
        icon: Users,
        path: "/users",
      },
    ],
  },

  {
    title: "MANAGEMENT",
    items: [
      {
        name: "Payroll",
        icon: Wallet,
        path: "/payroll",
      },
      {
        name: "Attendance",
        icon: ClipboardList,
        path: "/attendance",
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
      {
        name: "Notifications",
        icon: Bell,
        path: "/notifications",
        badge: 5,
      },
      {
        name: "Settings",
        icon: Settings,
        path: "/settings",
      },
      {
        name: "Profile",
        icon: UserCircle,
        path: "/profile",
      },
    ],
  },
];

export default sidebarLinks;