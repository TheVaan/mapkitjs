// Type definitions for MapKit JS 5.49.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Jan van Heesch <https://github.com/thevaan>

declare namespace mapkit {
  /**
   * A filter used to determine the points of interest to include or exclude on a map or local search.
   */
  class PointOfInterestFilter {
    /**
     * Creates a point of interest filter that includes categories from a list that you provide.
     */
    static including(categoryList: mapkit.PointOfInterestCategory[]);
    /**
     * Creates a point of interest filter that excludes categories from a list that you provide.
     */
    static excluding(categoryList: mapkit.PointOfInterestCategory[]);
    /**
     * A filter that includes all point of interest categories.
     */
    readonly filterIncludingAllCategories: mapkit.PointOfInterestFilter;
    /**
     * A filter that excludes all point of interest categories.
     */
    readonly filterExcludingAllCategories: mapkit.PointOfInterestFilter;
    /**
     * Returns a Boolean value that indicates whether the filter includes the provided point of interest category.
     */
    static includesCategory(category: mapkit.PointOfInterestCategory): boolean;
    /**
     * Returns a Boolean value that indicates whether the filter excludes the provided point of interest category.
     */
    static excludesCategory(category: mapkit.PointOfInterestCategory): boolean;
  }

  interface PointOfInterestCategory {
    readonly Airport: string;
    readonly AmusementPark: string;
    readonly Aquarium: string;
    readonly ATM: string;
    readonly Bakery: string;
    readonly Bank: string;
    readonly Beach: string;
    readonly Brewery: string;
    readonly Cafe: string;
    readonly Campground: string;
    readonly CarRental: string;
    readonly EVCharger: string;
    readonly FireStation: string;
    readonly FitnessCenter: string;
    readonly FoodMarket: string;
    readonly GasStation: string;
    readonly Hospital: string;
    readonly Hotel: string;
    readonly Laundry: string;
    readonly Library: string;
    readonly Marina: string;
    readonly MovieTheater: string;
    readonly Museum: string;
    readonly NationalPark: string;
    readonly Nightlife: string;
    readonly Park: string;
    readonly Parking: string;
    readonly Pharmacy: string;
    readonly Police: string;
    readonly PostOffice: string;
    readonly PublicTransport: string;
    readonly Restaurant: string;
    readonly Restroom: string;
    readonly School: string;
    readonly Stadium: string;
    readonly Store: string;
    readonly Theater: string;
    readonly University: string;
    readonly Winery: string;
    readonly Zoo: string;
  }
}