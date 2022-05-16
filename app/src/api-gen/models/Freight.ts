/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Freight
 */
export interface Freight {
    /**
     * 
     * @type {number}
     * @memberof Freight
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Freight
     */
    volume?: number;
    /**
     * 
     * @type {string}
     * @memberof Freight
     */
    start?: string;
    /**
     * 
     * @type {string}
     * @memberof Freight
     */
    destination?: string;
    /**
     * 
     * @type {Date}
     * @memberof Freight
     */
    creationDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Freight
     */
    lastModified?: Date;
}

export function FreightFromJSON(json: any): Freight {
    return FreightFromJSONTyped(json, false);
}

export function FreightFromJSONTyped(json: any, ignoreDiscriminator: boolean): Freight {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'volume': !exists(json, 'volume') ? undefined : json['volume'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'destination': !exists(json, 'destination') ? undefined : json['destination'],
        'creationDate': !exists(json, 'creationDate') ? undefined : (new Date(json['creationDate'])),
        'lastModified': !exists(json, 'lastModified') ? undefined : (new Date(json['lastModified'])),
    };
}

export function FreightToJSON(value?: Freight | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'volume': value.volume,
        'start': value.start,
        'destination': value.destination,
        'creationDate': value.creationDate === undefined ? undefined : (value.creationDate.toISOString()),
        'lastModified': value.lastModified === undefined ? undefined : (value.lastModified.toISOString()),
    };
}


