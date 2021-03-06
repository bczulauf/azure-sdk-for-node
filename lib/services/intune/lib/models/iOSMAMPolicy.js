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
 * @class
 * Initializes a new instance of the IOSMAMPolicy class.
 * @constructor
 * iOS Policy entity for Intune MAM.
 *
 * @member {string} friendlyName
 *
 * @member {string} [description]
 *
 * @member {string} [appSharingFromLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 *
 * @member {string} [appSharingToLevel] Possible values include: 'none',
 * 'policyManagedApps', 'allApps'. Default value: 'none' .
 *
 * @member {string} [authentication] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 *
 * @member {string} [clipboardSharingLevel] Possible values include: 'blocked',
 * 'policyManagedApps', 'policyManagedAppsWithPasteIn', 'allApps'. Default
 * value: 'blocked' .
 *
 * @member {string} [dataBackup] Possible values include: 'allow', 'block'.
 * Default value: 'allow' .
 *
 * @member {string} [fileSharingSaveAs] Possible values include: 'allow',
 * 'block'. Default value: 'allow' .
 *
 * @member {string} [pin] Possible values include: 'required', 'notRequired'.
 * Default value: 'required' .
 *
 * @member {number} [pinNumRetry]
 *
 * @member {string} [deviceCompliance] Possible values include: 'enable',
 * 'disable'. Default value: 'enable' .
 *
 * @member {string} [managedBrowser] Possible values include: 'required',
 * 'notRequired'. Default value: 'required' .
 *
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 *
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 *
 * @member {moment.duration} [offlineWipeTimeout]
 *
 * @member {number} [numOfApps]
 *
 * @member {string} [groupStatus] Possible values include: 'notTargeted',
 * 'targeted'. Default value: 'notTargeted' .
 *
 * @member {date} [lastModifiedTime]
 *
 * @member {string} [fileEncryptionLevel] Possible values include:
 * 'deviceLocked', 'deviceLockedExceptFilesOpen', 'afterDeviceRestart',
 * 'useDeviceSettings'. Default value: 'deviceLocked' .
 *
 * @member {string} [touchId] Possible values include: 'enable', 'disable'.
 * Default value: 'enable' .
 *
 */
class IOSMAMPolicy extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IOSMAMPolicy
   *
   * @returns {object} metadata of IOSMAMPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'iOSMAMPolicy',
      type: {
        name: 'Composite',
        className: 'IOSMAMPolicy',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: true,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          appSharingFromLevel: {
            required: false,
            serializedName: 'properties.appSharingFromLevel',
            defaultValue: 'none',
            type: {
              name: 'String'
            }
          },
          appSharingToLevel: {
            required: false,
            serializedName: 'properties.appSharingToLevel',
            defaultValue: 'none',
            type: {
              name: 'String'
            }
          },
          authentication: {
            required: false,
            serializedName: 'properties.authentication',
            defaultValue: 'required',
            type: {
              name: 'String'
            }
          },
          clipboardSharingLevel: {
            required: false,
            serializedName: 'properties.clipboardSharingLevel',
            defaultValue: 'blocked',
            type: {
              name: 'String'
            }
          },
          dataBackup: {
            required: false,
            serializedName: 'properties.dataBackup',
            defaultValue: 'allow',
            type: {
              name: 'String'
            }
          },
          fileSharingSaveAs: {
            required: false,
            serializedName: 'properties.fileSharingSaveAs',
            defaultValue: 'allow',
            type: {
              name: 'String'
            }
          },
          pin: {
            required: false,
            serializedName: 'properties.pin',
            defaultValue: 'required',
            type: {
              name: 'String'
            }
          },
          pinNumRetry: {
            required: false,
            serializedName: 'properties.pinNumRetry',
            type: {
              name: 'Number'
            }
          },
          deviceCompliance: {
            required: false,
            serializedName: 'properties.deviceCompliance',
            defaultValue: 'enable',
            type: {
              name: 'String'
            }
          },
          managedBrowser: {
            required: false,
            serializedName: 'properties.managedBrowser',
            defaultValue: 'required',
            type: {
              name: 'String'
            }
          },
          accessRecheckOfflineTimeout: {
            required: false,
            serializedName: 'properties.accessRecheckOfflineTimeout',
            type: {
              name: 'TimeSpan'
            }
          },
          accessRecheckOnlineTimeout: {
            required: false,
            serializedName: 'properties.accessRecheckOnlineTimeout',
            type: {
              name: 'TimeSpan'
            }
          },
          offlineWipeTimeout: {
            required: false,
            serializedName: 'properties.offlineWipeTimeout',
            type: {
              name: 'TimeSpan'
            }
          },
          numOfApps: {
            required: false,
            readOnly: true,
            serializedName: 'properties.numOfApps',
            type: {
              name: 'Number'
            }
          },
          groupStatus: {
            required: false,
            readOnly: true,
            serializedName: 'properties.groupStatus',
            defaultValue: 'notTargeted',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          fileEncryptionLevel: {
            required: false,
            serializedName: 'properties.fileEncryptionLevel',
            defaultValue: 'deviceLocked',
            type: {
              name: 'String'
            }
          },
          touchId: {
            required: false,
            serializedName: 'properties.touchId',
            defaultValue: 'enable',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IOSMAMPolicy;
