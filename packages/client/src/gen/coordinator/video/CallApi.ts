import { VideoApi } from './VideoApi';
import { StreamResponse } from '../../types';
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

export class CallApi {
  constructor(
    protected videoApi: VideoApi,
    public readonly type: string,
    public readonly id: string,
  ) {}

  get = (request?: {
    connection_id?: string;
    members_limit?: number;
    ring?: boolean;
    notify?: boolean;
    video?: boolean;
  }): Promise<StreamResponse<GetCallResponse>> => {
    return this.videoApi.getCall({ id: this.id, type: this.type, ...request });
  };

  update = (
    request?: UpdateCallRequest,
  ): Promise<StreamResponse<UpdateCallResponse>> => {
    return this.videoApi.updateCall({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  getOrCreate = (
    request?: GetOrCreateCallRequest & { connection_id?: string },
  ): Promise<StreamResponse<GetOrCreateCallResponse>> => {
    return this.videoApi.getOrCreateCall({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  accept = (): Promise<StreamResponse<AcceptCallResponse>> => {
    return this.videoApi.acceptCall({ id: this.id, type: this.type });
  };

  blockUser = (
    request: BlockUserRequest,
  ): Promise<StreamResponse<BlockUserResponse>> => {
    return this.videoApi.blockUser({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  delete = (
    request?: DeleteCallRequest,
  ): Promise<StreamResponse<DeleteCallResponse>> => {
    return this.videoApi.deleteCall({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  sendCallEvent = (
    request?: SendCallEventRequest,
  ): Promise<StreamResponse<SendCallEventResponse>> => {
    return this.videoApi.sendCallEvent({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  collectUserFeedback = (
    request: CollectUserFeedbackRequest & { session: string },
  ): Promise<StreamResponse<CollectUserFeedbackResponse>> => {
    return this.videoApi.collectUserFeedback({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  goLive = (
    request?: GoLiveRequest,
  ): Promise<StreamResponse<GoLiveResponse>> => {
    return this.videoApi.goLive({ id: this.id, type: this.type, ...request });
  };

  join = (
    request: JoinCallRequest & { connection_id?: string },
  ): Promise<StreamResponse<JoinCallResponse>> => {
    return this.videoApi.joinCall({ id: this.id, type: this.type, ...request });
  };

  end = (): Promise<StreamResponse<EndCallResponse>> => {
    return this.videoApi.endCall({ id: this.id, type: this.type });
  };

  updateCallMembers = (
    request?: UpdateCallMembersRequest,
  ): Promise<StreamResponse<UpdateCallMembersResponse>> => {
    return this.videoApi.updateCallMembers({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  muteUsers = (
    request?: MuteUsersRequest,
  ): Promise<StreamResponse<MuteUsersResponse>> => {
    return this.videoApi.muteUsers({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  videoPin = (request: PinRequest): Promise<StreamResponse<PinResponse>> => {
    return this.videoApi.videoPin({ id: this.id, type: this.type, ...request });
  };

  sendVideoReaction = (
    request: SendReactionRequest,
  ): Promise<StreamResponse<SendReactionResponse>> => {
    return this.videoApi.sendVideoReaction({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  listRecordings = (): Promise<StreamResponse<ListRecordingsResponse>> => {
    return this.videoApi.listRecordings({ id: this.id, type: this.type });
  };

  reject = (
    request?: RejectCallRequest,
  ): Promise<StreamResponse<RejectCallResponse>> => {
    return this.videoApi.rejectCall({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  requestPermission = (
    request: RequestPermissionRequest,
  ): Promise<StreamResponse<RequestPermissionResponse>> => {
    return this.videoApi.requestPermission({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  startHLSBroadcasting = (): Promise<
    StreamResponse<StartHLSBroadcastingResponse>
  > => {
    return this.videoApi.startHLSBroadcasting({ id: this.id, type: this.type });
  };

  startRecording = (
    request?: StartRecordingRequest,
  ): Promise<StreamResponse<StartRecordingResponse>> => {
    return this.videoApi.startRecording({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  startTranscription = (
    request?: StartTranscriptionRequest,
  ): Promise<StreamResponse<StartTranscriptionResponse>> => {
    return this.videoApi.startTranscription({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  getCallStats = (request: {
    session: string;
  }): Promise<StreamResponse<GetCallStatsResponse>> => {
    return this.videoApi.getCallStats({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  stopHLSBroadcasting = (): Promise<
    StreamResponse<StopHLSBroadcastingResponse>
  > => {
    return this.videoApi.stopHLSBroadcasting({ id: this.id, type: this.type });
  };

  stopLive = (): Promise<StreamResponse<StopLiveResponse>> => {
    return this.videoApi.stopLive({ id: this.id, type: this.type });
  };

  stopRecording = (): Promise<StreamResponse<StopRecordingResponse>> => {
    return this.videoApi.stopRecording({ id: this.id, type: this.type });
  };

  stopTranscription = (): Promise<
    StreamResponse<StopTranscriptionResponse>
  > => {
    return this.videoApi.stopTranscription({ id: this.id, type: this.type });
  };

  listTranscriptions = (): Promise<
    StreamResponse<ListTranscriptionsResponse>
  > => {
    return this.videoApi.listTranscriptions({ id: this.id, type: this.type });
  };

  unblockUser = (
    request: UnblockUserRequest,
  ): Promise<StreamResponse<UnblockUserResponse>> => {
    return this.videoApi.unblockUser({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  videoUnpin = (
    request: UnpinRequest,
  ): Promise<StreamResponse<UnpinResponse>> => {
    return this.videoApi.videoUnpin({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  updateUserPermissions = (
    request: UpdateUserPermissionsRequest,
  ): Promise<StreamResponse<UpdateUserPermissionsResponse>> => {
    return this.videoApi.updateUserPermissions({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  deleteRecording = (request: {
    session: string;
    filename: string;
  }): Promise<StreamResponse<DeleteRecordingResponse>> => {
    return this.videoApi.deleteRecording({
      id: this.id,
      type: this.type,
      ...request,
    });
  };

  deleteTranscription = (request: {
    session: string;
    filename: string;
  }): Promise<StreamResponse<DeleteTranscriptionResponse>> => {
    return this.videoApi.deleteTranscription({
      id: this.id,
      type: this.type,
      ...request,
    });
  };
}
