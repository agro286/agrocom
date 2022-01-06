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
 * @interface FreightDto
 */
export interface FreightDto {
    /**
     * 
     * @type {string}
     * @memberof FreightDto
     */
    destination?: string;
    /**
     * 
     * @type {string}
     * @memberof FreightDto
     */
    start?: string;
    /**
     * 
     * @type {number}
     * @memberof FreightDto
     */
    volume?: number;
}

export function FreightDtoFromJSON(json: any): FreightDto {
    return FreightDtoFromJSONTyped(json, false);
}

export function FreightDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreightDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destination': !exists(json, 'destination') ? undefined : json['destination'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'volume': !exists(json, 'volume') ? undefined : json['volume'],
    };
}

export function FreightDtoToJSON(value?: FreightDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination': value.destination,
        'start': value.start,
        'volume': value.volume,
    };
}


