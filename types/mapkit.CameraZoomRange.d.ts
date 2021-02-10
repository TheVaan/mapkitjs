// Type definitions for MapKit JS 5.49.0
// Project: https://developer.apple.com/documentation/mapkitjs
// Definitions by: Jan van Heesch <https://github.com/thevaan>

declare namespace mapkit {
  /**
   * A minimum and maximum camera distance as meters from the center of the map.
   */
  class CameraZoomRange {
    /**
     * Describes the minimum and maximum camera distance in meters.
     */
    constructor(minCameraDistance: CameraZoomRangeConstructorOptions | number, maxCameraDistance?: number);
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     */
    minCameraDistance: number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     */
    maxCameraDistance: number;
  }

  /**
   * Initialization options for the camera zoom range.
   */
  interface CameraZoomRangeConstructorOptions {
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     */
    minCameraDistance: number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     */
    maxCameraDistance: number;
  }
}