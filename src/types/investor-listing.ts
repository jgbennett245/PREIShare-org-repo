import type { ListingStatus } from "./listing-status";
import type { PropertyType } from "./property-type";
import type { Address } from "./address";
import type { FinancialSummary } from "./financial-summary";
import type { InvestorContact } from "./investor-contact";
import type { Ownership } from "./ownership";
/** Core PREIshare investor listing. */
export interface InvestorListing {
  /** Stable unique id for this listing (assigned by the system). */
  readonly id: string;

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
  contacts: InvestorContact[];
  primaryContactId: string;
  ownership: Ownership;
  readonly createdAt: string;
  readonly updatedAt: string;
  

  /**
   * Asking price in whole US dollars (no currency symbol).
   * Example: 450000 means $450,000.
   */
  askingPrice: number;

  
}
export type InvestorListing =
  | (InvestorListingBase & {
      status: 'draft' | 'active' | 'under_contract' | 'archived';
      /** Not used unless the listing is closed. */
      closedAt?: undefined;
    })
  | (InvestorListingBase & {
      status: 'closed';
      /** ISO date string — required when the listing is closed. */
      closedAt: string;
    });

// Optional helper aliases (nice for fixtures later; keep only if names stay simple)
export type ClosedInvestorListing = Extract<InvestorListing, { status: 'closed' }>;
export type OpenInvestorListing = Exclude<InvestorListing, { status: 'closed' }>;