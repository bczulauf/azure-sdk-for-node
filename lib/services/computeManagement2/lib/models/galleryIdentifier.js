/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Describes the gallery unique name.
 *
 */
class GalleryIdentifier {
  /**
   * Create a GalleryIdentifier.
   * @member {string} [uniqueName] The unique name of the gallery
   */
  constructor() {
  }

  /**
   * Defines the metadata of GalleryIdentifier
   *
   * @returns {object} metadata of GalleryIdentifier
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GalleryIdentifier',
      type: {
        name: 'Composite',
        className: 'GalleryIdentifier',
        modelProperties: {
          uniqueName: {
            required: false,
            readOnly: true,
            serializedName: 'uniqueName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GalleryIdentifier;