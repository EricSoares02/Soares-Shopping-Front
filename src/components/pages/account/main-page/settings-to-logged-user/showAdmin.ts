export function CanAccessAdminPage(role: string) {
  switch (role) {
    case "admin":
      return true;
    case "master":
      return true;
    case "elder":
      return true;

    default:
      return false;
  }
}


