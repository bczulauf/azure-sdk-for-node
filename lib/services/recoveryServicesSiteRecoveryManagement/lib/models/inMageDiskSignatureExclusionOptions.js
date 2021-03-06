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
 * Guest disk signature based disk exclusion option when doing enable
 * protection of virtual machine in InMage provider.
 *
 */
class InMageDiskSignatureExclusionOptions {
  /**
   * Create a InMageDiskSignatureExclusionOptions.
   * @member {string} [diskSignature] The guest signature of disk to be
   * excluded from replication.
   */
  constructor() {
  }

  /**
   * Defines the metadata of InMageDiskSignatureExclusionOptions
   *
   * @returns {object} metadata of InMageDiskSignatureExclusionOptions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InMageDiskSignatureExclusionOptions',
      type: {
        name: 'Composite',
        className: 'InMageDiskSignatureExclusionOptions',
        modelProperties: {
          diskSignature: {
            required: false,
            serializedName: 'diskSignature',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = InMageDiskSignatureExclusionOptions;
