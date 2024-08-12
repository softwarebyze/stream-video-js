import { BaseApi } from '../../../coordinator/connection/base-api';
import { StreamResponse } from '../../../coordinator/connection/types';
import {
  AcceptCallResponse,
  BlockUserRequest,
  BlockUserResponse,
  CollectUserFeedbackRequest,
  CollectUserFeedbackResponse,
  DeleteCallRequest,
  DeleteCallResponse,
  DeleteRecordingResponse,
  DeleteTranscriptionResponse,
  EndCallResponse,
  GetCallResponse,
  GetCallStatsResponse,
  GetEdgesResponse,
  GetOrCreateCallRequest,
  GetOrCreateCallResponse,
  GoLiveRequest,
  GoLiveResponse,
  JoinCallRequest,
  JoinCallResponse,
  ListRecordingsResponse,
  ListTranscriptionsResponse,
  MuteUsersRequest,
  MuteUsersResponse,
  PinRequest,
  PinResponse,
  QueryCallMembersRequest,
  QueryCallMembersResponse,
  QueryCallStatsRequest,
  QueryCallStatsResponse,
  QueryCallsRequest,
  QueryCallsResponse,
  RejectCallRequest,
  RejectCallResponse,
  RequestPermissionRequest,
  RequestPermissionResponse,
  SendCallEventRequest,
  SendCallEventResponse,
  SendReactionRequest,
  SendReactionResponse,
  StartHLSBroadcastingResponse,
  StartRecordingRequest,
  StartRecordingResponse,
  StartTranscriptionRequest,
  StartTranscriptionResponse,
  StopHLSBroadcastingResponse,
  StopLiveResponse,
  StopRecordingResponse,
  StopTranscriptionResponse,
  UnblockUserRequest,
  UnblockUserResponse,
  UnpinRequest,
  UnpinResponse,
  UpdateCallMembersRequest,
  UpdateCallMembersResponse,
  UpdateCallRequest,
  UpdateCallResponse,
  UpdateUserPermissionsRequest,
  UpdateUserPermissionsResponse,
} from '../models';
import { decoders } from '../model-decoders';

export class VideoApi extends BaseApi {
  queryCallMembers = async (
    request: QueryCallMembersRequest,
  ): Promise<StreamResponse<QueryCallMembersResponse>> => {
    const body = {
      id: request?.id,
      type: request?.type,
      limit: request?.limit,
      next: request?.next,
      prev: request?.prev,
      sort: request?.sort,
      filter_conditions: request?.filter_conditions,
    };

    const response = await this.sendRequest<QueryCallMembersResponse>(
      'POST',
      '/api/v2/video/call/members',
      undefined,
      undefined,
      body,
    );

    decoders['QueryCallMembersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  queryCallStats = async (
    request?: QueryCallStatsRequest,
  ): Promise<StreamResponse<QueryCallStatsResponse>> => {
    const body = {
      limit: request?.limit,
      next: request?.next,
      prev: request?.prev,
      sort: request?.sort,
      filter_conditions: request?.filter_conditions,
    };

    const response = await this.sendRequest<QueryCallStatsResponse>(
      'POST',
      '/api/v2/video/call/stats',
      undefined,
      undefined,
      body,
    );

    decoders['QueryCallStatsResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  getCall = async (request: {
    type: string;
    id: string;
    connection_id?: string;
    members_limit?: number;
    ring?: boolean;
    notify?: boolean;
    video?: boolean;
  }): Promise<StreamResponse<GetCallResponse>> => {
    const queryParams = {
      connection_id: request?.connection_id,
      members_limit: request?.members_limit,
      ring: request?.ring,
      notify: request?.notify,
      video: request?.video,
    };
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<GetCallResponse>(
      'GET',
      '/api/v2/video/call/{type}/{id}',
      pathParams,
      queryParams,
    );

    decoders['GetCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  updateCall = async (
    request: UpdateCallRequest & { type: string; id: string },
  ): Promise<StreamResponse<UpdateCallResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      starts_at: request?.starts_at,
      custom: request?.custom,
      settings_override: request?.settings_override,
    };

    const response = await this.sendRequest<UpdateCallResponse>(
      'PATCH',
      '/api/v2/video/call/{type}/{id}',
      pathParams,
      undefined,
      body,
    );

    decoders['UpdateCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  getOrCreateCall = async (
    request: GetOrCreateCallRequest & {
      type: string;
      id: string;
      connection_id?: string;
    },
  ): Promise<StreamResponse<GetOrCreateCallResponse>> => {
    const queryParams = {
      connection_id: request?.connection_id,
    };
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      members_limit: request?.members_limit,
      notify: request?.notify,
      ring: request?.ring,
      video: request?.video,
      data: request?.data,
    };

    const response = await this.sendRequest<GetOrCreateCallResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}',
      pathParams,
      queryParams,
      body,
    );

    decoders['GetOrCreateCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  acceptCall = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<AcceptCallResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<AcceptCallResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/accept',
      pathParams,
      undefined,
    );

    decoders['AcceptCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  blockUser = async (
    request: BlockUserRequest & { type: string; id: string },
  ): Promise<StreamResponse<BlockUserResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      user_id: request?.user_id,
    };

    const response = await this.sendRequest<BlockUserResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/block',
      pathParams,
      undefined,
      body,
    );

    decoders['BlockUserResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  deleteCall = async (
    request: DeleteCallRequest & { type: string; id: string },
  ): Promise<StreamResponse<DeleteCallResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      hard: request?.hard,
    };

    const response = await this.sendRequest<DeleteCallResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/delete',
      pathParams,
      undefined,
      body,
    );

    decoders['DeleteCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  sendCallEvent = async (
    request: SendCallEventRequest & { type: string; id: string },
  ): Promise<StreamResponse<SendCallEventResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      custom: request?.custom,
    };

    const response = await this.sendRequest<SendCallEventResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/event',
      pathParams,
      undefined,
      body,
    );

    decoders['SendCallEventResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  collectUserFeedback = async (
    request: CollectUserFeedbackRequest & {
      type: string;
      id: string;
      session: string;
    },
  ): Promise<StreamResponse<CollectUserFeedbackResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
      session: request?.session,
    };
    const body = {
      rating: request?.rating,
      sdk: request?.sdk,
      sdk_version: request?.sdk_version,
      user_session_id: request?.user_session_id,
      reason: request?.reason,
      custom: request?.custom,
    };

    const response = await this.sendRequest<CollectUserFeedbackResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/feedback/{session}',
      pathParams,
      undefined,
      body,
    );

    decoders['CollectUserFeedbackResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  goLive = async (
    request: GoLiveRequest & { type: string; id: string },
  ): Promise<StreamResponse<GoLiveResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      recording_storage_name: request?.recording_storage_name,
      start_hls: request?.start_hls,
      start_recording: request?.start_recording,
      start_transcription: request?.start_transcription,
      transcription_storage_name: request?.transcription_storage_name,
    };

    const response = await this.sendRequest<GoLiveResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/go_live',
      pathParams,
      undefined,
      body,
    );

    decoders['GoLiveResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  joinCall = async (
    request: JoinCallRequest & {
      type: string;
      id: string;
      connection_id?: string;
    },
  ): Promise<StreamResponse<JoinCallResponse>> => {
    const queryParams = {
      connection_id: request?.connection_id,
    };
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      location: request?.location,
      create: request?.create,
      members_limit: request?.members_limit,
      migrating_from: request?.migrating_from,
      notify: request?.notify,
      ring: request?.ring,
      video: request?.video,
      data: request?.data,
    };

    const response = await this.sendRequest<JoinCallResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/join',
      pathParams,
      queryParams,
      body,
    );

    decoders['JoinCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  endCall = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<EndCallResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<EndCallResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/mark_ended',
      pathParams,
      undefined,
    );

    decoders['EndCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  updateCallMembers = async (
    request: UpdateCallMembersRequest & { type: string; id: string },
  ): Promise<StreamResponse<UpdateCallMembersResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      remove_members: request?.remove_members,
      update_members: request?.update_members,
    };

    const response = await this.sendRequest<UpdateCallMembersResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/members',
      pathParams,
      undefined,
      body,
    );

    decoders['UpdateCallMembersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  muteUsers = async (
    request: MuteUsersRequest & { type: string; id: string },
  ): Promise<StreamResponse<MuteUsersResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      audio: request?.audio,
      mute_all_users: request?.mute_all_users,
      screenshare: request?.screenshare,
      screenshare_audio: request?.screenshare_audio,
      video: request?.video,
      user_ids: request?.user_ids,
    };

    const response = await this.sendRequest<MuteUsersResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/mute_users',
      pathParams,
      undefined,
      body,
    );

    decoders['MuteUsersResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  videoPin = async (
    request: PinRequest & { type: string; id: string },
  ): Promise<StreamResponse<PinResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      session_id: request?.session_id,
      user_id: request?.user_id,
    };

    const response = await this.sendRequest<PinResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/pin',
      pathParams,
      undefined,
      body,
    );

    decoders['PinResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  sendVideoReaction = async (
    request: SendReactionRequest & { type: string; id: string },
  ): Promise<StreamResponse<SendReactionResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      type: request?.type,
      emoji_code: request?.emoji_code,
      custom: request?.custom,
    };

    const response = await this.sendRequest<SendReactionResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/reaction',
      pathParams,
      undefined,
      body,
    );

    decoders['SendReactionResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  listRecordings = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<ListRecordingsResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<ListRecordingsResponse>(
      'GET',
      '/api/v2/video/call/{type}/{id}/recordings',
      pathParams,
      undefined,
    );

    decoders['ListRecordingsResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  rejectCall = async (
    request: RejectCallRequest & { type: string; id: string },
  ): Promise<StreamResponse<RejectCallResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      reason: request?.reason,
    };

    const response = await this.sendRequest<RejectCallResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/reject',
      pathParams,
      undefined,
      body,
    );

    decoders['RejectCallResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  requestPermission = async (
    request: RequestPermissionRequest & { type: string; id: string },
  ): Promise<StreamResponse<RequestPermissionResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      permissions: request?.permissions,
    };

    const response = await this.sendRequest<RequestPermissionResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/request_permission',
      pathParams,
      undefined,
      body,
    );

    decoders['RequestPermissionResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  startHLSBroadcasting = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<StartHLSBroadcastingResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<StartHLSBroadcastingResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/start_broadcasting',
      pathParams,
      undefined,
    );

    decoders['StartHLSBroadcastingResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  startRecording = async (
    request: StartRecordingRequest & { type: string; id: string },
  ): Promise<StreamResponse<StartRecordingResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      recording_external_storage: request?.recording_external_storage,
    };

    const response = await this.sendRequest<StartRecordingResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/start_recording',
      pathParams,
      undefined,
      body,
    );

    decoders['StartRecordingResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  startTranscription = async (
    request: StartTranscriptionRequest & { type: string; id: string },
  ): Promise<StreamResponse<StartTranscriptionResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      transcription_external_storage: request?.transcription_external_storage,
    };

    const response = await this.sendRequest<StartTranscriptionResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/start_transcription',
      pathParams,
      undefined,
      body,
    );

    decoders['StartTranscriptionResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  getCallStats = async (request: {
    type: string;
    id: string;
    session: string;
  }): Promise<StreamResponse<GetCallStatsResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
      session: request?.session,
    };

    const response = await this.sendRequest<GetCallStatsResponse>(
      'GET',
      '/api/v2/video/call/{type}/{id}/stats/{session}',
      pathParams,
      undefined,
    );

    decoders['GetCallStatsResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  stopHLSBroadcasting = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<StopHLSBroadcastingResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<StopHLSBroadcastingResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/stop_broadcasting',
      pathParams,
      undefined,
    );

    decoders['StopHLSBroadcastingResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  stopLive = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<StopLiveResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<StopLiveResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/stop_live',
      pathParams,
      undefined,
    );

    decoders['StopLiveResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  stopRecording = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<StopRecordingResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<StopRecordingResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/stop_recording',
      pathParams,
      undefined,
    );

    decoders['StopRecordingResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  stopTranscription = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<StopTranscriptionResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<StopTranscriptionResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/stop_transcription',
      pathParams,
      undefined,
    );

    decoders['StopTranscriptionResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  listTranscriptions = async (request: {
    type: string;
    id: string;
  }): Promise<StreamResponse<ListTranscriptionsResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };

    const response = await this.sendRequest<ListTranscriptionsResponse>(
      'GET',
      '/api/v2/video/call/{type}/{id}/transcriptions',
      pathParams,
      undefined,
    );

    decoders['ListTranscriptionsResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  unblockUser = async (
    request: UnblockUserRequest & { type: string; id: string },
  ): Promise<StreamResponse<UnblockUserResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      user_id: request?.user_id,
    };

    const response = await this.sendRequest<UnblockUserResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/unblock',
      pathParams,
      undefined,
      body,
    );

    decoders['UnblockUserResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  videoUnpin = async (
    request: UnpinRequest & { type: string; id: string },
  ): Promise<StreamResponse<UnpinResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      session_id: request?.session_id,
      user_id: request?.user_id,
    };

    const response = await this.sendRequest<UnpinResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/unpin',
      pathParams,
      undefined,
      body,
    );

    decoders['UnpinResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  updateUserPermissions = async (
    request: UpdateUserPermissionsRequest & { type: string; id: string },
  ): Promise<StreamResponse<UpdateUserPermissionsResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
    };
    const body = {
      user_id: request?.user_id,
      grant_permissions: request?.grant_permissions,
      revoke_permissions: request?.revoke_permissions,
    };

    const response = await this.sendRequest<UpdateUserPermissionsResponse>(
      'POST',
      '/api/v2/video/call/{type}/{id}/user_permissions',
      pathParams,
      undefined,
      body,
    );

    decoders['UpdateUserPermissionsResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  deleteRecording = async (request: {
    type: string;
    id: string;
    session: string;
    filename: string;
  }): Promise<StreamResponse<DeleteRecordingResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
      session: request?.session,
      filename: request?.filename,
    };

    const response = await this.sendRequest<DeleteRecordingResponse>(
      'DELETE',
      '/api/v2/video/call/{type}/{id}/{session}/recordings/{filename}',
      pathParams,
      undefined,
    );

    decoders['DeleteRecordingResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  deleteTranscription = async (request: {
    type: string;
    id: string;
    session: string;
    filename: string;
  }): Promise<StreamResponse<DeleteTranscriptionResponse>> => {
    const pathParams = {
      type: request?.type,
      id: request?.id,
      session: request?.session,
      filename: request?.filename,
    };

    const response = await this.sendRequest<DeleteTranscriptionResponse>(
      'DELETE',
      '/api/v2/video/call/{type}/{id}/{session}/transcriptions/{filename}',
      pathParams,
      undefined,
    );

    decoders['DeleteTranscriptionResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  queryCalls = async (
    request?: QueryCallsRequest & { connection_id?: string },
  ): Promise<StreamResponse<QueryCallsResponse>> => {
    const queryParams = {
      connection_id: request?.connection_id,
    };
    const body = {
      limit: request?.limit,
      next: request?.next,
      prev: request?.prev,
      watch: request?.watch,
      sort: request?.sort,
      filter_conditions: request?.filter_conditions,
    };

    const response = await this.sendRequest<QueryCallsResponse>(
      'POST',
      '/api/v2/video/calls',
      undefined,
      queryParams,
      body,
    );

    decoders['QueryCallsResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };

  getEdges = async (): Promise<StreamResponse<GetEdgesResponse>> => {
    const response = await this.sendRequest<GetEdgesResponse>(
      'GET',
      '/api/v2/video/edges',
      undefined,
      undefined,
    );

    decoders['GetEdgesResponse']?.(response.body);

    return { ...response.body, metadata: response.metadata };
  };
}
