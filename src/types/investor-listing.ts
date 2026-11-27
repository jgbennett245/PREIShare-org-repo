import type { ListingStatus } from "./listing-status";
import type { PropertyType } from "./property-type";
import type { Address } from "./address";
import type { FinancialSummary } from "./financial-summary";
/** Core PREIshare investor listing. */
export interface InvestorListing {
  /** Stable unique id for this listing (assigned by the system). */
  id: string;

  /** Short public headline shown in search results and cards. */
  title: string;

  /** Longer plain-text description of the investment opportunity. */
  summary: string;

  /** Current lifecycle status of this listing. */
  status: ListingStatus;

  /** Property category for this listing. */
  propertyType: PropertyType;

  address: Address;
  financialSummary?: FinancialSummary;

  /**
   * Asking price in whole US dollars (no currency symbol).
   * Example: 450000 means $450,000.
   */
  askingPrice: number;

  /** ISO-8601 datetime string when the listing was first created. */
  createdAt: string;

  /** ISO-8601 datetime string when the listing was last updated. */
  updatedAt: string;
}
