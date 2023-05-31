export const returnDashForNullOrUndefinedOrNaN = (
  value: string | undefined | null,
) => {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value === "NaN"
  ) {
    return "-"
  }

  return value
}
