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


import * as runtime from '../runtime';

/**
 * 
 */
export class BasicErrorControllerApi extends runtime.BaseAPI {

    /**
     * error
     */
    async errorUsingDELETERaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingDELETE(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingDELETERaw();
        return await response.value();
    }

    /**
     * error
     */
    async errorUsingGETRaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingGET(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingGETRaw();
        return await response.value();
    }

    /**
     * error
     */
    async errorUsingHEADRaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingHEAD(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingHEADRaw();
        return await response.value();
    }

    /**
     * error
     */
    async errorUsingOPTIONSRaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'OPTIONS',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingOPTIONS(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingOPTIONSRaw();
        return await response.value();
    }

    /**
     * error
     */
    async errorUsingPATCHRaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingPATCH(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingPATCHRaw();
        return await response.value();
    }

    /**
     * error
     */
    async errorUsingPOSTRaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingPOST(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingPOSTRaw();
        return await response.value();
    }

    /**
     * error
     */
    async errorUsingPUTRaw(): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agrocom/error`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * error
     */
    async errorUsingPUT(): Promise<{ [key: string]: object; }> {
        const response = await this.errorUsingPUTRaw();
        return await response.value();
    }

}
