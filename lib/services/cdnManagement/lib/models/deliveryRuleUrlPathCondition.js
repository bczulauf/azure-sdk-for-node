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
 * Defines the URL path condition for the delivery rule.
 *
 * @extends models['DeliveryRuleCondition']
 */
class DeliveryRuleUrlPathCondition extends models['DeliveryRuleCondition'] {
  /**
   * Create a DeliveryRuleUrlPathCondition.
   * @member {object} parameters Defines the parameters for the condition.
   * @member {string} [parameters.path] A URL path for the condition of the
   * delivery rule
   * @member {string} [parameters.matchType] The match type for the condition
   * of the delivery rule. Possible values include: 'Literal', 'Wildcard'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeliveryRuleUrlPathCondition
   *
   * @returns {object} metadata of DeliveryRuleUrlPathCondition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UrlPath',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'name',
          clientName: 'name'
        },
        uberParent: 'DeliveryRuleCondition',
        className: 'DeliveryRuleUrlPathCondition',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: true,
            serializedName: 'parameters',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'UrlPathConditionParameters'
            }
          }
        }
      }
    };
  }
}

module.exports = DeliveryRuleUrlPathCondition;
