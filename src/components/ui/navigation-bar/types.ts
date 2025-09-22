export interface NavRoute {
  label: string;
  image?: string;
  to?: string;
  permissionId?: number;
  subnav?: NavRoute[];
}

export interface CompanyLogo {
  src: string;
  darkMode?: string;
  alt: string;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  userLevelId: number;
  userLevel: UserLevelSchema | null;
  permissions: number[] | null;
  email: string;
}

export interface UserLevelSchema {
  id: number;
  name: string;
  permissions?: UserLevelPermissionSchema[];
}

export interface UserLevelPermissionSchema {
  id: number;
  userLevelId: number;
  permissionId: number;
  permission: PermissionSchema;
}

export interface PermissionSchema {
  id: number;
  name: string;
  //degree?: number;
  //permissionGroupId?: number;
}

export interface NavigationBarProps {
  routes: NavRoute[];
  permissions?: number[];
  isAdmin?: boolean;
  logo?: CompanyLogo;
  user: User;
  className?: string;
}

export interface NavAreaProps {
  routes: NavRoute[];
  permissions: number[];
}

export interface SideNavProps {
  routes: NavRoute[];
  permissions?: number[];
}

export interface SubAccProps {
  isAdmin?: boolean;
  onSignOut?: () => void;
  onChangePassword?: () => void;
  onResetPassword?: () => void;
}
