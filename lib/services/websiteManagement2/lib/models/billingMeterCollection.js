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
 * Collection of Billing Meters
 */
class BillingMeterCollection extends Array {
  /**
   * Create a BillingMeterCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BillingMeterCollection
   *
   * @returns {object} metadata of BillingMeterCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingMeterCollection',
      type: {
        name: 'Composite',
        className: 'BillingMeterCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BillingMeterElementType',
                  type: {
                    name: 'Composite',
                    className: 'BillingMeter'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingMeterCollection;
