export function hasPermission(user: unknown, perm: string) {
  return Boolean(user) && Boolean(perm)
}
