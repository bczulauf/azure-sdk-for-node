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
 * @summary The result of uploading Batch service log files from a specific
 * compute node.
  *
 */
class UploadBatchServiceLogsResult {
  /**
   * Create a UploadBatchServiceLogsResult.
   * @member {string} virtualDirectoryName The virtual directory within Azure
   * Blob Storage container to which the Batch Service log file(s) will be
   * uploaded. The virtual directory name is part of the blob name for each log
   * file uploaded, and it is built based poolId, nodeId and a unique
   * identifier.
   * @member {number} numberOfFilesUploaded The number of log files which will
   * be uploaded.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UploadBatchServiceLogsResult
   *
   * @returns {object} metadata of UploadBatchServiceLogsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UploadBatchServiceLogsResult',
      type: {
        name: 'Composite',
        className: 'UploadBatchServiceLogsResult',
        modelProperties: {
          virtualDirectoryName: {
            required: true,
            serializedName: 'virtualDirectoryName',
            type: {
              name: 'String'
            }
          },
          numberOfFilesUploaded: {
            required: true,
            serializedName: 'numberOfFilesUploaded',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = UploadBatchServiceLogsResult;