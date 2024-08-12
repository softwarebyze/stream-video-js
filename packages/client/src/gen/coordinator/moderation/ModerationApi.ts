import { BaseApi } from '../../../coordinator/connection/base-api';
import { StreamResponse } from '../../../coordinator/connection/types';
import {
  BanRequest,
  BanResponse,
  FlagRequest,
  FlagResponse,
  MuteRequest,
  MuteResponse,
} from '../models';
import { decoders } from '../model-decoders';

export class ModerationApi extends BaseApi {
  ban = async (request: BanRequest): Promise<StreamResponse<BanResponse>> => {
    const body = {
      target_user_id: request?.target_user_id,
      banned_by_id: request?.banned_by_id,
      channel_cid: request?.channel_cid,
      ip_ban: request?.ip_ban,
      reason: request?.reason,
      shadow: request?.shadow,
      timeout: request?.timeout,
      banned_by: request?.banned_by,
    };

    const response = await this.sendRequest<BanResponse>(
      'POST',
      '/api/v2/moderation/ban',
      undefined,
      undefined,
      body,
    );

    decoders['BanResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  flag = async (
    request: FlagRequest,
  ): Promise<StreamResponse<FlagResponse>> => {
    const body = {
      entity_id: request?.entity_id,
      entity_type: request?.entity_type,
      reason: request?.reason,
      entity_creator_id: request?.entity_creator_id,
      custom: request?.custom,
      moderation_payload: request?.moderation_payload,
    };

    const response = await this.sendRequest<FlagResponse>(
      'POST',
      '/api/v2/moderation/flag',
      undefined,
      undefined,
      body,
    );

    decoders['FlagResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  mute = async (
    request: MuteRequest,
  ): Promise<StreamResponse<MuteResponse>> => {
    const body = {
      target_ids: request?.target_ids,
      timeout: request?.timeout,
    };

    const response = await this.sendRequest<MuteResponse>(
      'POST',
      '/api/v2/moderation/mute',
      undefined,
      undefined,
      body,
    );

    decoders['MuteResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };
}
