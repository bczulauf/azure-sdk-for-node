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
 * Defines an image's caption.
 *
 */
class ImageInsightsImageCaption {
  /**
   * Create a ImageInsightsImageCaption.
   * @member {string} caption A caption about the image.
   * @member {string} dataSourceUrl The URL to the website where the caption
   * was found. You must attribute the caption to the source. For example, by
   * displaying the domain name from the URL next to the caption and using the
   * URL to link to the source website.
   * @member {array} relatedSearches A list of entities found in the caption.
   * Use the contents of the Query object to find the entity in the caption and
   * create a link. The link takes the user to images of the entity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageInsightsImageCaption
   *
   * @returns {object} metadata of ImageInsightsImageCaption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageInsights/ImageCaption',
      type: {
        name: 'Composite',
        className: 'ImageInsightsImageCaption',
        modelProperties: {
          caption: {
            required: true,
            serializedName: 'caption',
            type: {
              name: 'String'
            }
          },
          dataSourceUrl: {
            required: true,
            serializedName: 'dataSourceUrl',
            type: {
              name: 'String'
            }
          },
          relatedSearches: {
            required: true,
            serializedName: 'relatedSearches',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QueryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Query'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ImageInsightsImageCaption;
