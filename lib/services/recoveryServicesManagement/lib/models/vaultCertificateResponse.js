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
 * Certificate corresponding to a vault that can be used by clients to register
 * themselves with the vault.
 *
 */
class VaultCertificateResponse {
  /**
   * Create a VaultCertificateResponse.
   * @member {string} [name]
   * @member {string} [type]
   * @member {string} [id]
   * @member {object} [properties]
   * @member {buffer} [properties.certificate] The base64 encoded certificate
   * raw data string.
   * @member {string} [properties.friendlyName] Certificate friendlyname.
   * @member {string} [properties.issuer] Certificate issuer.
   * @member {number} [properties.resourceId] Resource ID of the vault.
   * @member {string} [properties.subject] Certificate Subject Name.
   * @member {string} [properties.thumbprint] Certificate thumbprint.
   * @member {date} [properties.validFrom] Certificate Validity start Date
   * time.
   * @member {date} [properties.validTo] Certificate Validity End Date time.
   * @member {string} [properties.authType] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of VaultCertificateResponse
   *
   * @returns {object} metadata of VaultCertificateResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VaultCertificateResponse',
      type: {
        name: 'Composite',
        className: 'VaultCertificateResponse',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
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
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'authType',
                clientName: 'authType'
              },
              uberParent: 'ResourceCertificateDetails',
              className: 'ResourceCertificateDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = VaultCertificateResponse;
