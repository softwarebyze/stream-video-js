import { BaseApi } from '../../../coordinator/connection/base-api';
import { StreamResponse } from '../../../coordinator/connection/types';
import {
  BlockUsersRequest,
  BlockUsersResponse,
  CreateDeviceRequest,
  CreateGuestRequest,
  CreateGuestResponse,
  GetApplicationResponse,
  GetBlockedUsersResponse,
  GetOGResponse,
  ListDevicesResponse,
  QueryUsersPayload,
  QueryUsersResponse,
  Response,
  UnblockUsersRequest,
  UnblockUsersResponse,
  UpdateUsersPartialRequest,
  UpdateUsersRequest,
  UpdateUsersResponse,
  WSAuthMessage,
} from '../models';
import { decoders } from '../model-decoders';

export class CommonApi extends BaseApi {
  getApp = async (): Promise<StreamResponse<GetApplicationResponse>> => {
    const response = await this.sendRequest<GetApplicationResponse>(
      'GET',
      '/api/v2/app',
      undefined,
      undefined,
    );

    decoders['GetApplicationResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  deleteDevice = async (request: {
    id: string;
  }): Promise<StreamResponse<Response>> => {
    const queryParams = {
      id: request?.id,
    };

    const response = await this.sendRequest<Response>(
      'DELETE',
      '/api/v2/devices',
      undefined,
      queryParams,
    );

    decoders['Response']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  listDevices = async (): Promise<StreamResponse<ListDevicesResponse>> => {
    const response = await this.sendRequest<ListDevicesResponse>(
      'GET',
      '/api/v2/devices',
      undefined,
      undefined,
    );

    decoders['ListDevicesResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  createDevice = async (
    request: CreateDeviceRequest,
  ): Promise<StreamResponse<Response>> => {
    const body = {
      id: request?.id,
      push_provider: request?.push_provider,
      push_provider_name: request?.push_provider_name,
      voip_token: request?.voip_token,
    };

    const response = await this.sendRequest<Response>(
      'POST',
      '/api/v2/devices',
      undefined,
      undefined,
      body,
    );

    decoders['Response']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  createGuest = async (
    request: CreateGuestRequest,
  ): Promise<StreamResponse<CreateGuestResponse>> => {
    const body = {
      user: request?.user,
    };

    const response = await this.sendRequest<CreateGuestResponse>(
      'POST',
      '/api/v2/guest',
      undefined,
      undefined,
      body,
    );

    decoders['CreateGuestResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  longPoll = async (request?: {
    connection_id?: string;
    json?: WSAuthMessage;
  }): Promise<StreamResponse<null>> => {
    const queryParams = {
      connection_id: request?.connection_id,
      json: request?.json,
    };

    const response = await this.sendRequest<null>(
      'GET',
      '/api/v2/longpoll',
      undefined,
      queryParams,
    );

    decoders['null']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  getOG = async (request: {
    url: string;
  }): Promise<StreamResponse<GetOGResponse>> => {
    const queryParams = {
      url: request?.url,
    };

    const response = await this.sendRequest<GetOGResponse>(
      'GET',
      '/api/v2/og',
      undefined,
      queryParams,
    );

    decoders['GetOGResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  queryUsers = async (request?: {
    payload?: QueryUsersPayload;
  }): Promise<StreamResponse<QueryUsersResponse>> => {
    const queryParams = {
      payload: request?.payload,
    };

    const response = await this.sendRequest<QueryUsersResponse>(
      'GET',
      '/api/v2/users',
      undefined,
      queryParams,
    );

    decoders['QueryUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  updateUsersPartial = async (
    request: UpdateUsersPartialRequest,
  ): Promise<StreamResponse<UpdateUsersResponse>> => {
    const body = {
      users: request?.users,
    };

    const response = await this.sendRequest<UpdateUsersResponse>(
      'PATCH',
      '/api/v2/users',
      undefined,
      undefined,
      body,
    );

    decoders['UpdateUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  updateUsers = async (
    request: UpdateUsersRequest,
  ): Promise<StreamResponse<UpdateUsersResponse>> => {
    const body = {
      users: request?.users,
    };

    const response = await this.sendRequest<UpdateUsersResponse>(
      'POST',
      '/api/v2/users',
      undefined,
      undefined,
      body,
    );

    decoders['UpdateUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  getBlockedUsers = async (): Promise<
    StreamResponse<GetBlockedUsersResponse>
  > => {
    const response = await this.sendRequest<GetBlockedUsersResponse>(
      'GET',
      '/api/v2/users/block',
      undefined,
      undefined,
    );

    decoders['GetBlockedUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  blockUsers = async (
    request: BlockUsersRequest,
  ): Promise<StreamResponse<BlockUsersResponse>> => {
    const body = {
      blocked_user_id: request?.blocked_user_id,
    };

    const response = await this.sendRequest<BlockUsersResponse>(
      'POST',
      '/api/v2/users/block',
      undefined,
      undefined,
      body,
    );

    decoders['BlockUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  unblockUsers = async (
    request: UnblockUsersRequest,
  ): Promise<StreamResponse<UnblockUsersResponse>> => {
    const body = {
      blocked_user_id: request?.blocked_user_id,
    };

    const response = await this.sendRequest<UnblockUsersResponse>(
      'POST',
      '/api/v2/users/unblock',
      undefined,
      undefined,
      body,
    );

    decoders['UnblockUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };
}
