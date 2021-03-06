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
 * Detect language result.
 *
 */
class DetectedLanguage {
  /**
   * Create a DetectedLanguage.
   * @member {string} [detectedLanguage] The detected language.
   * @member {object} [status] The detect language status
   * @member {number} [status.code] Status code.
   * @member {string} [status.description] Status description.
   * @member {string} [status.exception] Exception status.
   * @member {string} [trackingId] The tracking id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DetectedLanguage
   *
   * @returns {object} metadata of DetectedLanguage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DetectedLanguage',
      type: {
        name: 'Composite',
        className: 'DetectedLanguage',
        modelProperties: {
          detectedLanguage: {
            required: false,
            serializedName: 'DetectedLanguage',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'Status',
            type: {
              name: 'Composite',
              className: 'Status'
            }
          },
          trackingId: {
            required: false,
            serializedName: 'TrackingId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DetectedLanguage;
