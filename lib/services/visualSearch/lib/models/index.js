/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.ResponseBase = require('./responseBase');
exports.Identifiable = require('./identifiable');
exports.Response = require('./response');
exports.Thing = require('./thing');
exports.Intangible = require('./intangible');
exports.StructuredValue = require('./structuredValue');
exports.Point2D = require('./point2D');
exports.NormalizedQuadrilateral = require('./normalizedQuadrilateral');
exports.ImageTagRegion = require('./imageTagRegion');
exports.CreativeWork = require('./creativeWork');
exports.Action = require('./action');
exports.ImageAction = require('./imageAction');
exports.ImageTag = require('./imageTag');
exports.Organization = require('./organization');
exports.PropertiesItem = require('./propertiesItem');
exports.Rating = require('./rating');
exports.AggregateRating = require('./aggregateRating');
exports.Offer = require('./offer');
exports.AggregateOffer = require('./aggregateOffer');
exports.ImagesImageMetadata = require('./imagesImageMetadata');
exports.MediaObject = require('./mediaObject');
exports.ImageObject = require('./imageObject');
exports.ImageKnowledge = require('./imageKnowledge');
exports.ErrorModel = require('./errorModel');
exports.ErrorResponse = require('./errorResponse');
exports.Person = require('./person');
exports.ImageEntityAction = require('./imageEntityAction');
exports.ImagesModule = require('./imagesModule');
exports.ImageModuleAction = require('./imageModuleAction');
exports.Recipe = require('./recipe');
exports.RecipesModule = require('./recipesModule');
exports.ImageRecipesAction = require('./imageRecipesAction');
exports.Query = require('./query');
exports.RelatedSearchesModule = require('./relatedSearchesModule');
exports.ImageRelatedSearchesAction = require('./imageRelatedSearchesAction');
exports.ImageShoppingSourcesAction = require('./imageShoppingSourcesAction');
exports.CropArea = require('./cropArea');
exports.ImageInfo = require('./imageInfo');
exports.Filters = require('./filters');
exports.KnowledgeRequest = require('./knowledgeRequest');
exports.VisualSearchRequest = require('./visualSearchRequest');
exports.discriminators = {
  'ResponseBase.Point2D' : exports.Point2D,
  'ResponseBase.NormalizedQuadrilateral' : exports.NormalizedQuadrilateral,
  'ResponseBase.ImageAction' : exports.ImageAction,
  'ResponseBase.ImageTag' : exports.ImageTag,
  'ResponseBase.Organization' : exports.Organization,
  'PropertiesItem.AggregateRating' : exports.AggregateRating,
  'ResponseBase.Offer' : exports.Offer,
  'ResponseBase.AggregateOffer' : exports.AggregateOffer,
  'ResponseBase.ImageObject' : exports.ImageObject,
  'ResponseBase.ImageKnowledge' : exports.ImageKnowledge,
  'ResponseBase.Response' : exports.Response,
  'ResponseBase.Identifiable' : exports.Identifiable,
  'ResponseBase.ErrorResponse' : exports.ErrorResponse,
  'ResponseBase.Thing' : exports.Thing,
  'ResponseBase.Action' : exports.Action,
  'ResponseBase.MediaObject' : exports.MediaObject,
  'ResponseBase' : exports.ResponseBase,
  'ResponseBase.CreativeWork' : exports.CreativeWork,
  'ResponseBase.Person' : exports.Person,
  'ResponseBase.Intangible' : exports.Intangible,
  'ResponseBase.ImageEntityAction' : exports.ImageEntityAction,
  'ResponseBase.ImageModuleAction' : exports.ImageModuleAction,
  'ResponseBase.Recipe' : exports.Recipe,
  'ResponseBase.ImageRecipesAction' : exports.ImageRecipesAction,
  'ResponseBase.ImageRelatedSearchesAction' : exports.ImageRelatedSearchesAction,
  'ResponseBase.ImageShoppingSourcesAction' : exports.ImageShoppingSourcesAction,
  'ResponseBase.StructuredValue' : exports.StructuredValue,
  'Properties/Item' : exports.PropertiesItem,
  'PropertiesItem.Rating' : exports.Rating
};