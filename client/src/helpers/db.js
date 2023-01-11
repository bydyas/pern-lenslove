export function parseRoles(rolesString) {
  return rolesString.split(',').map((i) => i.trim());
}
