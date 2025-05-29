import { format } from "date-fns";
import type { Timestamp } from "firebase/firestore";

export function formatFirestoreDate(date: unknown, dateFormat = "PPP"): string {
  if (!date) return "—";

  try {
    if (typeof date === "object" && date !== null) {
      if (
        "toDate" in date &&
        typeof (date as Timestamp).toDate === "function"
      ) {
        return format((date as Timestamp).toDate(), dateFormat);
      }
      if (date instanceof Date) {
        return format(date, dateFormat);
      }
    }
    return "—";
  } catch (error) {
    console.log("Error formatting date:", error);
    return "—";
  }
}
