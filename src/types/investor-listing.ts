import type { ListingStatus } from "./listing-status";
import type { PropertyType } from "./property-type";
import type { Address } from "./address";
import type { FinancialSummary } from "./financial-summary";
import type { InvestorContact } from "./investor-contact";
import type { Ownership } from "./ownership";

/** Shared fields present on every investor listing status. */
export interface InvestorListingBase {
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
  financials?: FinancialSummary;
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

type CompleteInvestorListingFields = Omit<InvestorListingBase, "financials" | "contacts"> & {
  financials: FinancialSummary;
  contacts: [InvestorContact, ...InvestorContact[]];
};

export type InvestorListing =
  | (InvestorListingBase & {
      status: "draft" | "archived";
      closedAt?: never;
    })
  | (CompleteInvestorListingFields & {
      status: "active" | "under_contract";
      closedAt?: never;
    })
  | (CompleteInvestorListingFields & {
      status: "closed";
      /** ISO date string — required when the listing is closed. */
      closedAt: string;
    });

export type ClosedInvestorListing = Extract<InvestorListing, { status: "closed" }>;
export type OpenInvestorListing = Exclude<InvestorListing, { status: "closed" }>;