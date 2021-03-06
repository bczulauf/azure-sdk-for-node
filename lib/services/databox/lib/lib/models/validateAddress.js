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

const models = require('./index');

/**
 * The requirements to validate customer address where the device needs to be
 * shipped.
 *
 */
class ValidateAddress {
  /**
   * Create a ValidateAddress.
   * @member {object} [shippingAddress] Shipping address of the customer.
   * @member {string} [shippingAddress.streetAddress1] Street Address line 1.
   * @member {string} [shippingAddress.streetAddress2] Street Address line 2.
   * @member {string} [shippingAddress.streetAddress3] Street Address line 3.
   * @member {string} [shippingAddress.city] Name of the City.
   * @member {string} [shippingAddress.stateOrProvince] Name of the State or
   * Province.
   * @member {string} [shippingAddress.country] Name of the Country.
   * @member {string} [shippingAddress.postalCode] Postal code.
   * @member {string} [shippingAddress.zipExtendedCode] Extended Zip Code.
   * @member {string} [shippingAddress.companyName] Name of the company.
   * @member {string} [shippingAddress.addressType] Type of address. Possible
   * values include: 'None', 'Residential', 'Commercial'
   * @member {string} [deviceType] Device type to be used for the job. Possible
   * values include: 'Pod', 'Disk', 'Cabinet'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ValidateAddress
   *
   * @returns {object} metadata of ValidateAddress
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValidateAddress',
      type: {
        name: 'Composite',
        className: 'ValidateAddress',
        modelProperties: {
          shippingAddress: {
            required: false,
            serializedName: 'shippingAddress',
            type: {
              name: 'Composite',
              className: 'ShippingAddress'
            }
          },
          deviceType: {
            required: false,
            serializedName: 'deviceType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Pod', 'Disk', 'Cabinet' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ValidateAddress;
