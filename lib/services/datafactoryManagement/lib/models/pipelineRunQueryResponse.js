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
 * A list pipeline runs.
 *
 */
class PipelineRunQueryResponse {
  /**
   * Create a PipelineRunQueryResponse.
   * @member {array} value List of pipeline runs.
   * @member {string} [continuationToken] The continuation token for getting
   * the next page of results, if any remaining results exist, null otherwise.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PipelineRunQueryResponse
   *
   * @returns {object} metadata of PipelineRunQueryResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PipelineRunQueryResponse',
      type: {
        name: 'Composite',
        className: 'PipelineRunQueryResponse',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PipelineRunElementType',
                  type: {
                    name: 'Composite',
                    className: 'PipelineRun'
                  }
              }
            }
          },
          continuationToken: {
            required: false,
            serializedName: 'continuationToken',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PipelineRunQueryResponse;