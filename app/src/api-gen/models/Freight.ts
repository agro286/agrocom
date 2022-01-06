/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
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
     * @type {Date}
     * @memberof Freight
     */
    creationDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof Freight
     */
    destination?: string;
    /**
     * 
     * @type {number}
     * @memberof Freight
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof Freight
     */
    lastModified?: Date;
    /**
     * 
     * @type {string}
     * @memberof Freight
     */
    start?: string;
    /**
     * 
     * @type {number}
     * @memberof Freight
     */
    volume?: number;
}

export function FreightFromJSON(json: any): Freight {
    return FreightFromJSONTyped(json, false);
}

export function FreightFromJSONTyped(json: any, ignoreDiscriminator: boolean): Freight {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creationDate': !exists(json, 'creationDate') ? undefined : (new Date(json['creationDate'])),
        'destination': !exists(json, 'destination') ? undefined : json['destination'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastModified': !exists(json, 'lastModified') ? undefined : (new Date(json['lastModified'])),
        'start': !exists(json, 'start') ? undefined : json['start'],
        'volume': !exists(json, 'volume') ? undefined : json['volume'],
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
        
        'creationDate': value.creationDate === undefined ? undefined : (value.creationDate.toISOString()),
        'destination': value.destination,
        'id': value.id,
        'lastModified': value.lastModified === undefined ? undefined : (value.lastModified.toISOString()),
        'start': value.start,
        'volume': value.volume,
    };
}


