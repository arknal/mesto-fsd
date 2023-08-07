export function createClassName(
  classNames: (string | undefined)[],
  additional?: string,
) {
  if (additional) {
    classNames.push(additional.split(" ").join(" "));
  }
  return classNames.filter(Boolean).join(" ");
}
