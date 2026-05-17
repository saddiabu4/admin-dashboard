export function hasPermission(user: any, perm: string) {
  return Boolean(user) && Boolean(perm)
}
