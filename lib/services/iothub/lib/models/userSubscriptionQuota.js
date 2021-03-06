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
 * User subscription quota response
 *
 */
class UserSubscriptionQuota {
  /**
   * Create a UserSubscriptionQuota.
   * @member {string} [id] IotHub type id
   * @member {string} [type] Response type
   * @member {string} [unit] Unit of IotHub type
   * @member {number} [currentValue] Current number of IotHub type
   * @member {number} [limit] Numerical limit on IotHub type
   * @member {object} [name] IotHub type
   * @member {string} [name.value] IotHub type
   * @member {string} [name.localizedValue] Localized value of name
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserSubscriptionQuota
   *
   * @returns {object} metadata of UserSubscriptionQuota
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserSubscriptionQuota',
      type: {
        name: 'Composite',
        className: 'UserSubscriptionQuota',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          },
          currentValue: {
            required: false,
            serializedName: 'currentValue',
            type: {
              name: 'Number'
            }
          },
          limit: {
            required: false,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'Name'
            }
          }
        }
      }
    };
  }
}

module.exports = UserSubscriptionQuota;
