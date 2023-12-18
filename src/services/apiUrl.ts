export type apisTypes = {
  storeSectors: string;
  storeSectorBrands: string;
  storeOffers: string;
  additionalLoans: string;
};

export const APIS: apisTypes = {
  storeSectors: "api/v1/stores/mysectors/",
  storeSectorBrands: "api/v1/stores/mystores/",
  storeOffers: "api/v1/stores/myoffers/",
  additionalLoans: "api/v1/onetransaction/myservicetypes/",
};
