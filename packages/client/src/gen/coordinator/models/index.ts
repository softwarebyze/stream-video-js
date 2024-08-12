export interface APIError {
  code: number;

  duration: string;

  message: string;

  more_info: string;

  status_code: number;

  details: Array<number>;

  exception_fields?: Record<string, string>;
}

export interface AcceptCallRequest {}

export interface AcceptCallResponse {
  duration: string;
}

export interface Action {
  name: string;

  text: string;

  type: string;

  style?: string;

  value?: string;
}

export interface ActionLog {
  created_at: Date;

  id: string;

  reason: string;

  review_queue_item_id: string;

  target_user_id: string;

  type: string;

  custom: Record<string, any>;

  review_queue_item?: ReviewQueueItem;

  target_user?: UserObject;

  user?: UserObject;
}

export interface AggregatedStats {
  countrywise_aggregate_stats?: Record<string, CountrywiseAggregateStats>;

  publisher_aggregate_stats?: PublisherAggregateStats;

  turn?: TURNAggregatedStats;
}

export interface AppResponseFields {
  async_url_enrich_enabled: boolean;

  auto_translation_enabled: boolean;

  moderation_enabled: boolean;

  name: string;

  video_provider: string;

  file_upload_config: FileUploadConfig;

  image_upload_config: FileUploadConfig;
}

export interface Attachment {
  custom: Record<string, any>;

  asset_url?: string;

  author_icon?: string;

  author_link?: string;

  author_name?: string;

  color?: string;

  fallback?: string;

  footer?: string;

  footer_icon?: string;

  image_url?: string;

  og_scrape_url?: string;

  original_height?: number;

  original_width?: number;

  pretext?: string;

  text?: string;

  thumb_url?: string;

  title?: string;

  title_link?: string;

  type?: string;

  actions?: Array<Action>;

  fields?: Array<Field>;

  giphy?: Images;
}

export interface AudioSettingsRequest {
  default_device: 'speaker' | 'earpiece';

  access_request_enabled?: boolean;

  mic_default_on?: boolean;

  opus_dtx_enabled?: boolean;

  redundant_coding_enabled?: boolean;

  speaker_default_on?: boolean;

  noise_cancellation?: NoiseCancellationSettings;
}

export interface AudioSettingsResponse {
  access_request_enabled: boolean;

  default_device: 'speaker' | 'earpiece';

  mic_default_on: boolean;

  opus_dtx_enabled: boolean;

  redundant_coding_enabled: boolean;

  speaker_default_on: boolean;

  noise_cancellation?: NoiseCancellationSettings;
}

export interface BackstageSettingsRequest {
  enabled?: boolean;

  join_ahead_time_seconds?: number;
}

export interface BackstageSettingsResponse {
  enabled: boolean;

  join_ahead_time_seconds?: number;
}

export interface Ban {
  created_at: Date;

  shadow: boolean;

  expires?: Date;

  reason?: string;

  channel?: Channel;

  created_by?: UserObject;

  target?: UserObject;
}

export interface BanRequest {
  target_user_id: string;

  banned_by_id?: string;

  channel_cid?: string;

  ip_ban?: boolean;

  reason?: string;

  shadow?: boolean;

  timeout?: number;

  banned_by?: UserRequest;
}

export interface BanResponse {
  duration: string;
}

export interface BlockListOptions {
  behavior: 'flag' | 'block' | 'shadow_block';

  blocklist: string;
}

export interface BlockUserRequest {
  user_id: string;
}

export interface BlockUserResponse {
  duration: string;
}

export interface BlockUsersRequest {
  blocked_user_id: string;
}

export interface BlockUsersResponse {
  blocked_by_user_id: string;

  blocked_user_id: string;

  created_at: Date;

  duration: string;
}

export interface BlockedUserEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  user: UserResponse;

  blocked_by_user?: UserResponse;
}

export interface BlockedUserResponse {
  blocked_user_id: string;

  created_at: Date;

  user_id: string;

  blocked_user: UserResponse;

  user: UserResponse;
}

export interface BroadcastSettingsRequest {
  enabled?: boolean;

  hls?: HLSSettingsRequest;

  rtmp?: RTMPSettingsRequest;
}

export interface BroadcastSettingsResponse {
  enabled: boolean;

  hls: HLSSettingsResponse;

  rtmp: RTMPSettingsResponse;
}

export interface CallAcceptedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call: CallResponse;

  user: UserResponse;
}

export interface CallClosedCaption {
  end_time: Date;

  speaker_id: string;

  start_time: Date;

  text: string;
}

export interface CallCreatedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  members: Array<MemberResponse>;

  call: CallResponse;
}

export interface CallDeletedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call: CallResponse;
}

export interface CallEndedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call: CallResponse;

  user?: UserResponse;
}

export interface CallEvent {
  description: string;

  end_timestamp: number;

  severity: number;

  timestamp: number;

  type: string;

  component?: string;

  additional?: Record<string, any>;
}

export interface CallHLSBroadcastingFailedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallHLSBroadcastingStartedEvent {
  call_cid: string;

  created_at: Date;

  hls_playlist_url: string;

  type: string;
}

export interface CallHLSBroadcastingStoppedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallIngressResponse {
  rtmp: RTMPIngress;
}

export interface CallLiveStartedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call: CallResponse;
}

export interface CallMemberAddedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  members: Array<MemberResponse>;

  call: CallResponse;
}

export interface CallMemberRemovedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  members: Array<string>;

  call: CallResponse;
}

export interface CallMemberUpdatedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  members: Array<MemberResponse>;

  call: CallResponse;
}

export interface CallMemberUpdatedPermissionEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  members: Array<MemberResponse>;

  call: CallResponse;

  capabilities_by_role: Record<string, Array<string>>;
}

export interface CallMissedEvent {
  call_cid: string;

  created_at: Date;

  notify_user: boolean;

  session_id: string;

  type: string;

  members: Array<MemberResponse>;

  call: CallResponse;

  user: UserResponse;
}

export interface CallNotificationEvent {
  call_cid: string;

  created_at: Date;

  session_id: string;

  type: string;

  members: Array<MemberResponse>;

  call: CallResponse;

  user: UserResponse;
}

export interface CallParticipantResponse {
  joined_at: Date;

  role: string;

  user_session_id: string;

  user: UserResponse;
}

export interface CallReactionEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  reaction: ReactionResponse;
}

export interface CallRecording {
  end_time: Date;

  filename: string;

  start_time: Date;

  url: string;
}

export interface CallRecordingFailedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallRecordingReadyEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call_recording: CallRecording;
}

export interface CallRecordingStartedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallRecordingStoppedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallRejectedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call: CallResponse;

  user: UserResponse;

  reason?: string;
}

export interface CallRequest {
  starts_at?: Date;

  team?: string;

  video?: boolean;

  members?: Array<MemberRequest>;

  custom?: Record<string, any>;

  settings_override?: CallSettingsRequest;
}

export interface CallResponse {
  backstage: boolean;

  cid: string;

  created_at: Date;

  current_session_id: string;

  id: string;

  recording: boolean;

  transcribing: boolean;

  type: string;

  updated_at: Date;

  blocked_user_ids: Array<string>;

  created_by: UserResponse;

  custom: Record<string, any>;

  egress: EgressResponse;

  ingress: CallIngressResponse;

  settings: CallSettingsResponse;

  ended_at?: Date;

  join_ahead_time_seconds?: number;

  starts_at?: Date;

  team?: string;

  session?: CallSessionResponse;

  thumbnails?: ThumbnailResponse;
}

export interface CallRingEvent {
  call_cid: string;

  created_at: Date;

  session_id: string;

  type: string;

  video: boolean;

  members: Array<MemberResponse>;

  call: CallResponse;

  user: UserResponse;
}

export interface CallRtmpBroadcastStartedEvent {
  call_cid: string;

  created_at: Date;

  name: string;

  type: string;
}

export interface CallRtmpBroadcastStoppedEvent {
  call_cid: string;

  created_at: Date;

  name: string;

  type: string;
}

export interface CallSessionEndedEvent {
  call_cid: string;

  created_at: Date;

  session_id: string;

  type: string;

  call: CallResponse;
}

export interface CallSessionParticipantJoinedEvent {
  call_cid: string;

  created_at: Date;

  session_id: string;

  type: string;

  participant: CallParticipantResponse;
}

export interface CallSessionParticipantLeftEvent {
  call_cid: string;

  created_at: Date;

  session_id: string;

  type: string;

  participant: CallParticipantResponse;
}

export interface CallSessionResponse {
  id: string;

  participants: Array<CallParticipantResponse>;

  accepted_by: Record<string, Date>;

  missed_by: Record<string, Date>;

  participants_count_by_role: Record<string, number>;

  rejected_by: Record<string, Date>;

  ended_at?: Date;

  live_ended_at?: Date;

  live_started_at?: Date;

  started_at?: Date;

  timer_ends_at?: Date;
}

export interface CallSessionStartedEvent {
  call_cid: string;

  created_at: Date;

  session_id: string;

  type: string;

  call: CallResponse;
}

export interface CallSettingsRequest {
  audio?: AudioSettingsRequest;

  backstage?: BackstageSettingsRequest;

  broadcasting?: BroadcastSettingsRequest;

  geofencing?: GeofenceSettingsRequest;

  limits?: LimitsSettingsRequest;

  recording?: RecordSettingsRequest;

  ring?: RingSettingsRequest;

  screensharing?: ScreensharingSettingsRequest;

  thumbnails?: ThumbnailsSettingsRequest;

  transcription?: TranscriptionSettingsRequest;

  video?: VideoSettingsRequest;
}

export interface CallSettingsResponse {
  audio: AudioSettingsResponse;

  backstage: BackstageSettingsResponse;

  broadcasting: BroadcastSettingsResponse;

  geofencing: GeofenceSettingsResponse;

  limits: LimitsSettingsResponse;

  recording: RecordSettingsResponse;

  ring: RingSettingsResponse;

  screensharing: ScreensharingSettingsResponse;

  thumbnails: ThumbnailsSettingsResponse;

  transcription: TranscriptionSettingsResponse;

  video: VideoSettingsResponse;
}

export interface CallStateResponseFields {
  members: Array<MemberResponse>;

  own_capabilities: Array<OwnCapability>;

  call: CallResponse;

  membership?: MemberResponse;
}

export interface CallStatsReportSummaryResponse {
  call_cid: string;

  call_duration_seconds: number;

  call_session_id: string;

  call_status: string;

  first_stats_time: Date;

  created_at?: Date;

  quality_score?: number;
}

export interface CallTimeline {
  events: Array<CallEvent>;
}

export interface CallTranscription {
  end_time: Date;

  filename: string;

  start_time: Date;

  url: string;
}

export interface CallTranscriptionFailedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallTranscriptionReadyEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call_transcription: CallTranscription;
}

export interface CallTranscriptionStartedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallTranscriptionStoppedEvent {
  call_cid: string;

  created_at: Date;

  type: string;
}

export interface CallUpdatedEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  call: CallResponse;

  capabilities_by_role: Record<string, Array<string>>;
}

export interface CallUserMutedEvent {
  call_cid: string;

  created_at: Date;

  from_user_id: string;

  type: string;

  muted_user_ids: Array<string>;
}

export interface Channel {
  auto_translation_language: string;

  cid: string;

  created_at: Date;

  disabled: boolean;

  frozen: boolean;

  id: string;

  type: string;

  updated_at: Date;

  custom: Record<string, any>;

  auto_translation_enabled?: boolean;

  cooldown?: number;

  deleted_at?: Date;

  last_message_at?: Date;

  member_count?: number;

  team?: string;

  invites?: Array<ChannelMember>;

  members?: Array<ChannelMember>;

  config?: ChannelConfig;

  config_overrides?: ChannelConfig;

  created_by?: UserObject;

  truncated_by?: UserObject;
}

export interface ChannelConfig {
  automod: 'disabled' | 'simple' | 'AI';

  automod_behavior: 'flag' | 'block' | 'shadow_block';

  connect_events: boolean;

  created_at: Date;

  custom_events: boolean;

  mark_messages_pending: boolean;

  max_message_length: number;

  mutes: boolean;

  name: string;

  polls: boolean;

  push_notifications: boolean;

  quotes: boolean;

  reactions: boolean;

  read_events: boolean;

  reminders: boolean;

  replies: boolean;

  search: boolean;

  typing_events: boolean;

  updated_at: Date;

  uploads: boolean;

  url_enrichment: boolean;

  commands: Array<string>;

  blocklist?: string;

  blocklist_behavior?: 'flag' | 'block' | 'shadow_block';

  allowed_flag_reasons?: Array<string>;

  blocklists?: Array<BlockListOptions>;

  automod_thresholds?: Thresholds;
}

export interface ChannelConfigWithInfo {
  automod: 'disabled' | 'simple' | 'AI';

  automod_behavior: 'flag' | 'block' | 'shadow_block';

  connect_events: boolean;

  created_at: Date;

  custom_events: boolean;

  mark_messages_pending: boolean;

  max_message_length: number;

  mutes: boolean;

  name: string;

  polls: boolean;

  push_notifications: boolean;

  quotes: boolean;

  reactions: boolean;

  read_events: boolean;

  reminders: boolean;

  replies: boolean;

  search: boolean;

  typing_events: boolean;

  updated_at: Date;

  uploads: boolean;

  url_enrichment: boolean;

  commands: Array<Command>;

  blocklist?: string;

  blocklist_behavior?: 'flag' | 'block' | 'shadow_block';

  allowed_flag_reasons?: Array<string>;

  blocklists?: Array<BlockListOptions>;

  automod_thresholds?: Thresholds;

  grants?: Record<string, Array<string>>;
}

export interface ChannelMember {
  banned: boolean;

  channel_role: string;

  created_at: Date;

  notifications_muted: boolean;

  shadow_banned: boolean;

  updated_at: Date;

  ban_expires?: Date;

  deleted_at?: Date;

  invite_accepted_at?: Date;

  invite_rejected_at?: Date;

  invited?: boolean;

  is_moderator?: boolean;

  status?: string;

  user_id?: string;

  user?: UserObject;
}

export interface ChannelMute {
  created_at: Date;

  updated_at: Date;

  expires?: Date;

  channel?: ChannelResponse;

  user?: UserObject;
}

export interface ChannelResponse {
  cid: string;

  created_at: Date;

  disabled: boolean;

  frozen: boolean;

  id: string;

  type: string;

  updated_at: Date;

  custom: Record<string, any>;

  auto_translation_enabled?: boolean;

  auto_translation_language?: string;

  blocked?: boolean;

  cooldown?: number;

  deleted_at?: Date;

  hidden?: boolean;

  hide_messages_before?: Date;

  last_message_at?: Date;

  member_count?: number;

  mute_expires_at?: Date;

  muted?: boolean;

  team?: string;

  truncated_at?: Date;

  members?: Array<ChannelMember>;

  own_capabilities?: Array<string>;

  config?: ChannelConfigWithInfo;

  created_by?: UserObject;

  truncated_by?: UserObject;
}

export interface ClosedCaptionEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  closed_caption: CallClosedCaption;
}

export interface CollectUserFeedbackRequest {
  rating: number;

  sdk: string;

  sdk_version: string;

  user_session_id: string;

  reason?: string;

  custom?: Record<string, any>;
}

export interface CollectUserFeedbackResponse {
  duration: string;
}

export interface Command {
  args: string;

  description: string;

  name: string;

  set: string;

  created_at?: Date;

  updated_at?: Date;
}

export interface ConnectUserDetailsRequest {
  id: string;

  image?: string;

  invisible?: boolean;

  language?: string;

  name?: string;

  custom?: Record<string, any>;

  privacy_settings?: PrivacySettings;

  push_notifications?: PushNotificationSettingsInput;
}

export interface ConnectedEvent {
  connection_id: string;

  created_at: Date;

  type: string;

  me: OwnUserResponse;
}

export interface ConnectionErrorEvent {
  connection_id: string;

  created_at: Date;

  type: string;

  error: APIError;
}

export interface Coordinates {
  latitude: number;

  longitude: number;
}

export interface Count {
  app_roximate: boolean;

  value: number;
}

export interface CountrywiseAggregateStats {
  participant_count?: Count;

  publisher_jitter?: TimeStats;

  publisher_latency?: TimeStats;

  subscriber_jitter?: TimeStats;

  subscriber_latency?: TimeStats;
}

export interface CreateDeviceRequest {
  id: string;

  push_provider: 'firebase' | 'apn' | 'huawei' | 'xiaomi';

  push_provider_name?: string;

  voip_token?: boolean;
}

export interface CreateGuestRequest {
  user: UserRequest;
}

export interface CreateGuestResponse {
  access_token: string;

  duration: string;

  user: UserResponse;
}

export interface Credentials {
  token: string;

  ice_servers: Array<ICEServer>;

  server: SFUResponse;
}

export interface CustomVideoEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  custom: Record<string, any>;

  user: UserResponse;
}

export interface Data {
  id: string;
}

export interface DeleteCallRequest {
  hard?: boolean;
}

export interface DeleteCallResponse {
  duration: string;

  call: CallResponse;

  task_id?: string;
}

export interface DeleteRecordingResponse {
  duration: string;
}

export interface DeleteTranscriptionResponse {
  duration: string;
}

export interface Device {
  created_at: Date;

  id: string;

  push_provider: string;

  user_id: string;

  disabled?: boolean;

  disabled_reason?: string;

  push_provider_name?: string;

  voip?: boolean;
}

export interface EdgeResponse {
  continent_code: string;

  country_iso_code: string;

  green: number;

  id: string;

  latency_test_url: string;

  latitude: number;

  longitude: number;

  red: number;

  subdivision_iso_code: string;

  yellow: number;
}

export interface EgressHLSResponse {
  playlist_url: string;
}

export interface EgressRTMPResponse {
  name: string;

  stream_key: string;

  url: string;
}

export interface EgressResponse {
  broadcasting: boolean;

  rtmp_s: Array<EgressRTMPResponse>;

  hls?: EgressHLSResponse;
}

export interface EndCallRequest {}

export interface EndCallResponse {
  duration: string;
}

export interface EnrichedActivity {
  foreign_id?: string;

  id?: string;

  score?: number;

  verb?: string;

  to?: Array<string>;

  actor?: Data;

  latest_reactions?: Record<string, Array<EnrichedReaction | null>>;

  object?: Data;

  origin?: Data;

  own_reactions?: Record<string, Array<EnrichedReaction | null>>;

  reaction_counts?: Record<string, number>;

  target?: Data;

  time?: Time;
}

export interface EnrichedReaction {
  activity_id: string;

  kind: string;

  user_id: string;

  id?: string;

  parent?: string;

  target_feeds?: Array<string>;

  children_counts?: Record<string, number>;

  created_at?: Time;

  data?: Record<string, any>;

  latest_children?: Record<string, Array<EnrichedReaction | null>>;

  own_children?: Record<string, Array<EnrichedReaction | null>>;

  updated_at?: Time;

  user?: Data;
}

export interface Field {
  short: boolean;

  title: string;

  value: string;
}

export interface FileUploadConfig {
  size_limit: number;

  allowed_file_extensions: Array<string>;

  allowed_mime_types: Array<string>;

  blocked_file_extensions: Array<string>;

  blocked_mime_types: Array<string>;
}

export interface Flag2 {
  created_at: Date;

  entity_id: string;

  entity_type: string;

  updated_at: Date;

  result: Array<Record<string, any>>;

  entity_creator_id?: string;

  moderation_payload_hash?: string;

  reason?: string;

  review_queue_item_id?: string;

  type?: string;

  labels?: Array<string>;

  custom?: Record<string, any>;

  moderation_payload?: ModerationPayload;

  user?: UserObject;
}

export interface FlagRequest {
  entity_id: string;

  entity_type: string;

  reason: string;

  entity_creator_id?: string;

  custom?: Record<string, any>;

  moderation_payload?: ModerationPayload;
}

export interface FlagResponse {
  duration: string;

  item_id: string;
}

export interface FullUserResponse {
  banned: boolean;

  created_at: Date;

  id: string;

  invisible: boolean;

  language: string;

  online: boolean;

  role: string;

  shadow_banned: boolean;

  total_unread_count: number;

  unread_channels: number;

  unread_threads: number;

  updated_at: Date;

  blocked_user_ids: Array<string>;

  channel_mutes: Array<ChannelMute>;

  devices: Array<Device>;

  mutes: Array<UserMuteResponse>;

  teams: Array<string>;

  custom: Record<string, any>;

  deactivated_at?: Date;

  deleted_at?: Date;

  image?: string;

  last_active?: Date;

  name?: string;

  revoke_tokens_issued_before?: Date;

  latest_hidden_channels?: Array<string>;

  privacy_settings?: PrivacySettingsResponse;

  push_notifications?: PushNotificationSettingsResponse;
}

export interface GeofenceSettingsRequest {
  names?: Array<string>;
}

export interface GeofenceSettingsResponse {
  names: Array<string>;
}

export interface GeolocationResult {
  accuracy_radius: number;

  city: string;

  continent: string;

  continent_code: string;

  country: string;

  country_iso_code: string;

  latitude: number;

  longitude: number;

  subdivision: string;

  subdivision_iso_code: string;
}

export interface GetApplicationResponse {
  duration: string;

  app: AppResponseFields;
}

export interface GetBlockedUsersResponse {
  duration: string;

  blocks: Array<BlockedUserResponse>;
}

export interface GetCallResponse {
  duration: string;

  members: Array<MemberResponse>;

  own_capabilities: Array<OwnCapability>;

  call: CallResponse;

  membership?: MemberResponse;
}

export interface GetCallStatsResponse {
  call_duration_seconds: number;

  call_status: string;

  duration: string;

  max_freezes_duration_seconds: number;

  max_participants: number;

  max_total_quality_limitation_duration_seconds: number;

  publishing_participants: number;

  quality_score: number;

  sfu_count: number;

  participant_report: Array<UserStats>;

  sfus: Array<SFULocationResponse>;

  aggregated?: AggregatedStats;

  call_timeline?: CallTimeline;

  jitter?: TimeStats;

  latency?: TimeStats;
}

export interface GetEdgesResponse {
  duration: string;

  edges: Array<EdgeResponse>;
}

export interface GetOGResponse {
  duration: string;

  custom: Record<string, any>;

  asset_url?: string;

  author_icon?: string;

  author_link?: string;

  author_name?: string;

  color?: string;

  fallback?: string;

  footer?: string;

  footer_icon?: string;

  image_url?: string;

  og_scrape_url?: string;

  original_height?: number;

  original_width?: number;

  pretext?: string;

  text?: string;

  thumb_url?: string;

  title?: string;

  title_link?: string;

  type?: string;

  actions?: Array<Action>;

  fields?: Array<Field>;

  giphy?: Images;
}

export interface GetOrCreateCallRequest {
  members_limit?: number;

  notify?: boolean;

  ring?: boolean;

  video?: boolean;

  data?: CallRequest;
}

export interface GetOrCreateCallResponse {
  created: boolean;

  duration: string;

  members: Array<MemberResponse>;

  own_capabilities: Array<OwnCapability>;

  call: CallResponse;

  membership?: MemberResponse;
}

export interface GoLiveRequest {
  recording_storage_name?: string;

  start_hls?: boolean;

  start_recording?: boolean;

  start_transcription?: boolean;

  transcription_storage_name?: string;
}

export interface GoLiveResponse {
  duration: string;

  call: CallResponse;
}

export interface HLSSettingsRequest {
  quality_tracks: Array<string>;

  auto_on?: boolean;

  enabled?: boolean;
}

export interface HLSSettingsResponse {
  auto_on: boolean;

  enabled: boolean;

  quality_tracks: Array<string>;
}

export interface HealthCheckEvent {
  cid: string;

  connection_id: string;

  created_at: Date;

  type: string;

  me?: OwnUser;
}

export interface ICEServer {
  password: string;

  username: string;

  urls: Array<string>;
}

export interface ImageData {
  frames: string;

  height: string;

  size: string;

  url: string;

  width: string;
}

export interface Images {
  fixed_height: ImageData;

  fixed_height_downsampled: ImageData;

  fixed_height_still: ImageData;

  fixed_width: ImageData;

  fixed_width_downsampled: ImageData;

  fixed_width_still: ImageData;

  original: ImageData;
}

export interface JoinCallRequest {
  location: string;

  create?: boolean;

  members_limit?: number;

  migrating_from?: string;

  notify?: boolean;

  ring?: boolean;

  video?: boolean;

  data?: CallRequest;
}

export interface JoinCallResponse {
  created: boolean;

  duration: string;

  members: Array<MemberResponse>;

  own_capabilities: Array<OwnCapability>;

  call: CallResponse;

  credentials: Credentials;

  stats_options: StatsOptions;

  membership?: MemberResponse;
}

export interface LabelThresholds {
  block?: number;

  flag?: number;
}

export interface LimitsSettingsRequest {
  max_duration_seconds?: number;

  max_participants?: number;
}

export interface LimitsSettingsResponse {
  max_duration_seconds?: number;

  max_participants?: number;
}

export interface ListDevicesResponse {
  duration: string;

  devices: Array<Device>;
}

export interface ListRecordingsResponse {
  duration: string;

  recordings: Array<CallRecording>;
}

export interface ListTranscriptionsResponse {
  duration: string;

  transcriptions: Array<CallTranscription>;
}

export interface Location {
  continent_code: string;

  country_iso_code: string;

  subdivision_iso_code: string;
}

export interface MOSStats {
  average_score: number;

  max_score: number;

  min_score: number;

  hist_og_ram_duration_seconds: Array<number>;
}

export interface MediaPubSubHint {
  audio_published: boolean;

  audio_subscribed: boolean;

  video_published: boolean;

  video_subscribed: boolean;
}

export interface MemberRequest {
  user_id: string;

  role?: string;

  custom?: Record<string, any>;
}

export interface MemberResponse {
  created_at: Date;

  updated_at: Date;

  user_id: string;

  custom: Record<string, any>;

  user: UserResponse;

  deleted_at?: Date;

  role?: string;
}

export interface Message {
  cid: string;

  created_at: Date;

  deleted_reply_count: number;

  html: string;

  id: string;

  pinned: boolean;

  reply_count: number;

  shadowed: boolean;

  silent: boolean;

  text: string;

  type: 'regular' | 'ephemeral' | 'error' | 'reply' | 'system' | 'deleted';

  updated_at: Date;

  attachments: Array<Attachment>;

  latest_reactions: Array<Reaction>;

  mentioned_users: Array<UserObject>;

  own_reactions: Array<Reaction>;

  custom: Record<string, any>;

  reaction_counts: Record<string, number>;

  reaction_groups: Record<string, ReactionGroupResponse>;

  reaction_scores: Record<string, number>;

  before_message_send_failed?: boolean;

  command?: string;

  deleted_at?: Date;

  message_text_updated_at?: Date;

  mml?: string;

  parent_id?: string;

  pin_expires?: Date;

  pinned_at?: Date;

  poll_id?: string;

  quoted_message_id?: string;

  show_in_channel?: boolean;

  thread_participants?: Array<UserObject>;

  i18n?: Record<string, string>;

  image_labels?: Record<string, Array<string>>;

  pinned_by?: UserObject;

  poll?: Poll;

  quoted_message?: Message;

  user?: UserObject;
}

export interface ModerationCustomActionEvent {
  created_at: Date;

  type: string;

  item?: ReviewQueueItem;

  message?: Message;

  user?: UserObject;
}

export interface ModerationFlaggedEvent {
  created_at: Date;

  type: string;

  item?: string;

  object_id?: string;

  user?: UserObject;
}

export interface ModerationMarkSafeEvent {
  created_at: Date;

  type: string;

  item?: ReviewQueueItem;

  message?: Message;

  user?: UserObject;
}

export interface ModerationPayload {
  created_at?: Date;

  images?: Array<string>;

  texts?: Array<string>;

  videos?: Array<string>;

  custom?: Record<string, any>;
}

export interface MuteRequest {
  target_ids: Array<string>;

  timeout?: number;
}

export interface MuteResponse {
  duration: string;

  mutes?: Array<UserMute>;

  non_existing_users?: Array<string>;

  own_user?: OwnUser;
}

export interface MuteUsersRequest {
  audio?: boolean;

  mute_all_users?: boolean;

  screenshare?: boolean;

  screenshare_audio?: boolean;

  video?: boolean;

  user_ids?: Array<string>;
}

export interface MuteUsersResponse {
  duration: string;
}

export interface NoiseCancellationSettings {
  mode: 'available' | 'disabled' | 'auto-on';
}

export interface NullBool {
  has_value?: boolean;

  value?: boolean;
}

export interface NullTime {
  has_value?: boolean;

  value?: Date;
}

export const OwnCapability = {
  BLOCK_USERS: 'block-users',
  CHANGE_MAX_DURATION: 'change-max-duration',
  CREATE_CALL: 'create-call',
  CREATE_REACTION: 'create-reaction',
  ENABLE_NOISE_CANCELLATION: 'enable-noise-cancellation',
  END_CALL: 'end-call',
  JOIN_BACKSTAGE: 'join-backstage',
  JOIN_CALL: 'join-call',
  JOIN_ENDED_CALL: 'join-ended-call',
  MUTE_USERS: 'mute-users',
  PIN_FOR_EVERYONE: 'pin-for-everyone',
  READ_CALL: 'read-call',
  REMOVE_CALL_MEMBER: 'remove-call-member',
  SCREENSHARE: 'screenshare',
  SEND_AUDIO: 'send-audio',
  SEND_VIDEO: 'send-video',
  START_BROADCAST_CALL: 'start-broadcast-call',
  START_RECORD_CALL: 'start-record-call',
  START_TRANSCRIPTION_CALL: 'start-transcription-call',
  STOP_BROADCAST_CALL: 'stop-broadcast-call',
  STOP_RECORD_CALL: 'stop-record-call',
  STOP_TRANSCRIPTION_CALL: 'stop-transcription-call',
  UPDATE_CALL: 'update-call',
  UPDATE_CALL_MEMBER: 'update-call-member',
  UPDATE_CALL_PERMISSIONS: 'update-call-permissions',
  UPDATE_CALL_SETTINGS: 'update-call-settings',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type OwnCapability = (typeof OwnCapability)[keyof typeof OwnCapability];

export interface OwnUser {
  banned: boolean;

  created_at: Date;

  id: string;

  language: string;

  online: boolean;

  role: string;

  total_unread_count: number;

  unread_channels: number;

  unread_count: number;

  unread_threads: number;

  updated_at: Date;

  channel_mutes: Array<ChannelMute>;

  devices: Array<Device>;

  mutes: Array<UserMute>;

  custom: Record<string, any>;

  deactivated_at?: Date;

  deleted_at?: Date;

  invisible?: boolean;

  last_active?: Date;

  blocked_user_ids?: Array<string>;

  latest_hidden_channels?: Array<string>;

  teams?: Array<string>;

  privacy_settings?: PrivacySettings;

  push_notifications?: PushNotificationSettings;
}

export interface OwnUserResponse {
  banned: boolean;

  created_at: Date;

  id: string;

  invisible: boolean;

  language: string;

  online: boolean;

  role: string;

  total_unread_count: number;

  unread_channels: number;

  unread_threads: number;

  updated_at: Date;

  channel_mutes: Array<ChannelMute>;

  devices: Array<Device>;

  mutes: Array<UserMuteResponse>;

  teams: Array<string>;

  custom: Record<string, any>;

  deactivated_at?: Date;

  deleted_at?: Date;

  image?: string;

  last_active?: Date;

  name?: string;

  revoke_tokens_issued_before?: Date;

  blocked_user_ids?: Array<string>;

  latest_hidden_channels?: Array<string>;

  privacy_settings?: PrivacySettingsResponse;

  push_notifications?: PushNotificationSettingsResponse;
}

export interface PermissionRequestEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  permissions: Array<string>;

  user: UserResponse;
}

export interface PinRequest {
  session_id: string;

  user_id: string;
}

export interface PinResponse {
  duration: string;
}

export interface Poll {
  allow_answers: boolean;

  allow_user_suggested_options: boolean;

  answers_count: number;

  created_at: Date;

  created_by_id: string;

  description: string;

  enforce_unique_vote: boolean;

  id: string;

  name: string;

  updated_at: Date;

  vote_count: number;

  latest_answers: Array<PollVote>;

  options: Array<PollOption>;

  own_votes: Array<PollVote>;

  custom: Record<string, any>;

  latest_votes_by_option: Record<string, Array<PollVote | null>>;

  vote_counts_by_option: Record<string, number>;

  is_closed?: boolean;

  max_votes_allowed?: number;

  voting_visibility?: string;

  created_by?: UserObject;
}

export interface PollOption {
  id: string;

  text: string;

  custom: Record<string, any>;
}

export interface PollVote {
  created_at: Date;

  id: string;

  option_id: string;

  poll_id: string;

  updated_at: Date;

  answer_text?: string;

  is_answer?: boolean;

  user_id?: string;

  user?: UserObject;
}

export interface PrivacySettings {
  read_receipts?: ReadReceipts;

  typing_indicators?: TypingIndicators;
}

export interface PrivacySettingsResponse {
  read_receipts?: ReadReceiptsResponse;

  typing_indicators?: TypingIndicatorsResponse;
}

export interface PublishedTrackInfo {
  codec_mime_type?: string;

  duration_seconds?: number;

  track_type?: string;
}

export interface PublisherAggregateStats {
  by_track_type?: Record<string, Count>;

  total?: Count;
}

export interface PushNotificationSettings {
  disabled?: boolean;

  disabled_until?: Date;
}

export interface PushNotificationSettingsInput {
  disabled?: NullBool;

  disabled_until?: NullTime;
}

export interface PushNotificationSettingsResponse {
  disabled?: boolean;

  disabled_until?: Date;
}

export interface QueryCallMembersRequest {
  id: string;

  type: string;

  limit?: number;

  next?: string;

  prev?: string;

  sort?: Array<SortParamRequest>;

  filter_conditions?: Record<string, any>;
}

export interface QueryCallMembersResponse {
  duration: string;

  members: Array<MemberResponse>;

  next?: string;

  prev?: string;
}

export interface QueryCallStatsRequest {
  limit?: number;

  next?: string;

  prev?: string;

  sort?: Array<SortParamRequest>;

  filter_conditions?: Record<string, any>;
}

export interface QueryCallStatsResponse {
  duration: string;

  reports: Array<CallStatsReportSummaryResponse>;

  next?: string;

  prev?: string;
}

export interface QueryCallsRequest {
  limit?: number;

  next?: string;

  prev?: string;

  watch?: boolean;

  sort?: Array<SortParamRequest>;

  filter_conditions?: Record<string, any>;
}

export interface QueryCallsResponse {
  duration: string;

  calls: Array<CallStateResponseFields>;

  next?: string;

  prev?: string;
}

export interface QueryUsersPayload {
  filter_conditions: Record<string, any>;

  include_deactivated_users?: boolean;

  limit?: number;

  offset?: number;

  presence?: boolean;

  sort?: Array<SortParamRequest>;
}

export interface QueryUsersResponse {
  duration: string;

  users: Array<FullUserResponse>;
}

export interface RTMPIngress {
  address: string;
}

export interface RTMPSettingsRequest {
  enabled?: boolean;

  max_duration_minutes?: number;

  quality?:
    | '360p'
    | '480p'
    | '720p'
    | '1080p'
    | '1440p'
    | 'portrait-360x640'
    | 'portrait-480x854'
    | 'portrait-720x1280'
    | 'portrait-1080x1920'
    | 'portrait-1440x2560';
}

export interface RTMPSettingsResponse {
  enabled: boolean;

  max_duration_minutes: number;

  quality: string;
}

export interface Reaction {
  created_at: Date;

  message_id: string;

  score: number;

  type: string;

  updated_at: Date;

  custom: Record<string, any>;

  user_id?: string;

  user?: UserObject;
}

export interface ReactionGroupResponse {
  count: number;

  first_reaction_at: Date;

  last_reaction_at: Date;

  sum_scores: number;
}

export interface ReactionResponse {
  type: string;

  user: UserResponse;

  emoji_code?: string;

  custom?: Record<string, any>;
}

export interface ReadReceipts {
  enabled: boolean;
}

export interface ReadReceiptsResponse {
  enabled: boolean;
}

export interface RecordSettingsRequest {
  mode: 'available' | 'disabled' | 'auto-on';

  audio_only?: boolean;

  quality?:
    | '360p'
    | '480p'
    | '720p'
    | '1080p'
    | '1440p'
    | 'portrait-360x640'
    | 'portrait-480x854'
    | 'portrait-720x1280'
    | 'portrait-1080x1920'
    | 'portrait-1440x2560';
}

export interface RecordSettingsResponse {
  audio_only: boolean;

  mode: string;

  quality: string;
}

export interface RejectCallRequest {
  reason?: string;
}

export interface RejectCallResponse {
  duration: string;
}

export interface RequestPermissionRequest {
  permissions: Array<string>;
}

export interface RequestPermissionResponse {
  duration: string;
}

export interface Response {
  duration: string;
}

export interface ReviewQueueItem {
  content_changed: boolean;

  created_at: Date;

  entity_id: string;

  entity_type: string;

  has_image: boolean;

  has_text: boolean;

  has_video: boolean;

  id: string;

  moderation_payload_hash: string;

  recommended_action: string;

  reviewed_by: string;

  severity: number;

  status: string;

  updated_at: Date;

  actions: Array<ActionLog>;

  bans: Array<Ban>;

  flags: Array<Flag2>;

  languages: Array<string>;

  completed_at: NullTime;

  reviewed_at: NullTime;

  assigned_to?: UserObject;

  entity_creator?: UserObject;

  feeds_v2_activity?: EnrichedActivity;

  feeds_v2_reaction?: Reaction;

  message?: Message;

  moderation_payload?: ModerationPayload;
}

export interface RingSettingsRequest {
  auto_cancel_timeout_ms: number;

  incoming_call_timeout_ms: number;

  missed_call_timeout_ms?: number;
}

export interface RingSettingsResponse {
  auto_cancel_timeout_ms: number;

  incoming_call_timeout_ms: number;

  missed_call_timeout_ms: number;
}

export interface SFULocationResponse {
  datacenter: string;

  id: string;

  coordinates: Coordinates;

  location: Location;
}

export interface SFUResponse {
  edge_name: string;

  url: string;

  ws_endpoint: string;
}

export interface ScreensharingSettingsRequest {
  access_request_enabled?: boolean;

  enabled?: boolean;

  target_resolution?: TargetResolution;
}

export interface ScreensharingSettingsResponse {
  access_request_enabled: boolean;

  enabled: boolean;

  target_resolution?: TargetResolution;
}

export interface SendCallEventRequest {
  custom?: Record<string, any>;
}

export interface SendCallEventResponse {
  duration: string;
}

export interface SendReactionRequest {
  type: string;

  emoji_code?: string;

  custom?: Record<string, any>;
}

export interface SendReactionResponse {
  duration: string;

  reaction: ReactionResponse;
}

export interface SortParamRequest {
  direction?: number;

  field?: string;
}

export interface StartHLSBroadcastingRequest {}

export interface StartHLSBroadcastingResponse {
  duration: string;

  playlist_url: string;
}

export interface StartRecordingRequest {
  recording_external_storage?: string;
}

export interface StartRecordingResponse {
  duration: string;
}

export interface StartTranscriptionRequest {
  transcription_external_storage?: string;
}

export interface StartTranscriptionResponse {
  duration: string;
}

export interface StatsOptions {
  reporting_interval_ms: number;
}

export interface StopHLSBroadcastingRequest {}

export interface StopHLSBroadcastingResponse {
  duration: string;
}

export interface StopLiveRequest {}

export interface StopLiveResponse {
  duration: string;

  call: CallResponse;
}

export interface StopRecordingRequest {}

export interface StopRecordingResponse {
  duration: string;
}

export interface StopTranscriptionRequest {}

export interface StopTranscriptionResponse {
  duration: string;
}

export interface Subsession {
  ended_at: number;

  joined_at: number;

  sfu_id: string;

  pub_sub_hint?: MediaPubSubHint;
}

export interface TURNAggregatedStats {
  tcp?: Count;

  total?: Count;
}

export interface TargetResolution {
  height: number;

  width: number;

  bitrate?: number;
}

export interface Thresholds {
  explicit?: LabelThresholds;

  spam?: LabelThresholds;

  toxic?: LabelThresholds;
}

export interface ThumbnailResponse {
  image_url: string;
}

export interface ThumbnailsSettingsRequest {
  enabled?: boolean;
}

export interface ThumbnailsSettingsResponse {
  enabled: boolean;
}

export interface Time {}

export interface TimeStats {
  average_seconds: number;

  max_seconds: number;
}

export interface TranscriptionSettingsRequest {
  mode: 'available' | 'disabled' | 'auto-on';

  closed_caption_mode?: string;

  languages?: Array<string>;
}

export interface TranscriptionSettingsResponse {
  closed_caption_mode: string;

  mode: 'available' | 'disabled' | 'auto-on';

  languages: Array<string>;
}

export interface TypingIndicators {
  enabled: boolean;
}

export interface TypingIndicatorsResponse {
  enabled: boolean;
}

export interface UnblockUserRequest {
  user_id: string;
}

export interface UnblockUserResponse {
  duration: string;
}

export interface UnblockUsersRequest {
  blocked_user_id: string;
}

export interface UnblockUsersResponse {
  duration: string;
}

export interface UnblockedUserEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  user: UserResponse;
}

export interface UnpinRequest {
  session_id: string;

  user_id: string;
}

export interface UnpinResponse {
  duration: string;
}

export interface UpdateCallMembersRequest {
  remove_members?: Array<string>;

  update_members?: Array<MemberRequest>;
}

export interface UpdateCallMembersResponse {
  duration: string;

  members: Array<MemberResponse>;
}

export interface UpdateCallRequest {
  starts_at?: Date;

  custom?: Record<string, any>;

  settings_override?: CallSettingsRequest;
}

export interface UpdateCallResponse {
  duration: string;

  members: Array<MemberResponse>;

  own_capabilities: Array<OwnCapability>;

  call: CallResponse;

  membership?: MemberResponse;
}

export interface UpdateUserPartialRequest {
  id: string;

  unset?: Array<string>;

  set?: Record<string, any>;
}

export interface UpdateUserPermissionsRequest {
  user_id: string;

  grant_permissions?: Array<string>;

  revoke_permissions?: Array<string>;
}

export interface UpdateUserPermissionsResponse {
  duration: string;
}

export interface UpdateUsersPartialRequest {
  users: Array<UpdateUserPartialRequest>;
}

export interface UpdateUsersRequest {
  users: Record<string, UserRequest>;
}

export interface UpdateUsersResponse {
  duration: string;

  membership_deletion_task_id: string;

  users: Record<string, FullUserResponse>;
}

export interface UpdatedCallPermissionsEvent {
  call_cid: string;

  created_at: Date;

  type: string;

  own_capabilities: Array<OwnCapability>;

  user: UserResponse;
}

export interface User {
  banned: boolean;

  created_at: Date;

  id: string;

  online: boolean;

  role: string;

  updated_at: Date;

  custom: Record<string, any>;

  ban_expires?: Date;

  deactivated_at?: Date;

  deleted_at?: Date;

  image?: string;

  invisible?: boolean;

  language?: string;

  last_active?: Date;

  name?: string;

  revoke_tokens_issued_before?: Date;

  teams?: Array<string>;

  privacy_settings?: PrivacySettings;

  push_notifications?: PushNotificationSettings;
}

export interface UserBannedEvent {
  channel_id: string;

  channel_type: string;

  cid: string;

  created_at: Date;

  shadow: boolean;

  type: string;

  created_by: UserObject;

  expiration?: Date;

  reason?: string;

  team?: string;

  user?: UserObject;
}

export interface UserDeactivatedEvent {
  created_at: Date;

  type: string;

  created_by: UserObject;

  user?: UserObject;
}

export interface UserDeletedEvent {
  created_at: Date;

  delete_conversation_channels: boolean;

  hard_delete: boolean;

  mark_messages_deleted: boolean;

  type: string;

  user?: UserObject;
}

export interface UserEventPayload {
  banned: boolean;

  created_at: Date;

  id: string;

  language: string;

  online: boolean;

  role: string;

  updated_at: Date;

  blocked_user_ids: Array<string>;

  teams: Array<string>;

  custom: Record<string, any>;

  deactivated_at?: Date;

  deleted_at?: Date;

  image?: string;

  invisible?: boolean;

  last_active?: Date;

  name?: string;

  revoke_tokens_issued_before?: Date;

  privacy_settings?: PrivacySettingsResponse;
}

export interface UserFlaggedEvent {
  created_at: Date;

  type: string;

  target_user?: string;

  target_users?: Array<string>;

  user?: UserObject;
}

export interface UserInfoResponse {
  image: string;

  name: string;

  roles: Array<string>;

  custom: Record<string, any>;
}

export interface UserMute {
  created_at: Date;

  updated_at: Date;

  expires?: Date;

  target?: UserObject;

  user?: UserObject;
}

export interface UserMuteResponse {
  created_at: Date;

  updated_at: Date;

  expires?: Date;

  target?: User;

  user?: User;
}

export interface UserMutedEvent {
  created_at: Date;

  type: string;

  target_user?: string;

  target_users?: Array<string>;

  user?: UserObject;
}

export interface UserObject {
  banned: boolean;

  id: string;

  online: boolean;

  role: string;

  custom: Record<string, any>;

  ban_expires?: Date;

  created_at?: Date;

  deactivated_at?: Date;

  deleted_at?: Date;

  invisible?: boolean;

  language?: string;

  last_active?: Date;

  revoke_tokens_issued_before?: Date;

  updated_at?: Date;

  teams?: Array<string>;

  privacy_settings?: PrivacySettings;

  push_notifications?: PushNotificationSettings;
}

export interface UserPresenceChangedEvent {
  created_at: Date;

  type: string;

  user?: UserObject;
}

export interface UserReactivatedEvent {
  created_at: Date;

  type: string;

  user?: UserObject;
}

export interface UserRequest {
  id: string;

  image?: string;

  invisible?: boolean;

  language?: string;

  name?: string;

  custom?: Record<string, any>;

  privacy_settings?: PrivacySettings;

  push_notifications?: PushNotificationSettingsInput;
}

export interface UserResponse {
  banned: boolean;

  created_at: Date;

  id: string;

  language: string;

  online: boolean;

  role: string;

  updated_at: Date;

  blocked_user_ids: Array<string>;

  teams: Array<string>;

  custom: Record<string, any>;

  deactivated_at?: Date;

  deleted_at?: Date;

  image?: string;

  last_active?: Date;

  name?: string;

  revoke_tokens_issued_before?: Date;
}

export interface UserSessionStats {
  freeze_duration_seconds: number;

  max_freeze_fraction: number;

  max_freezes_duration_seconds: number;

  packet_loss_fraction: number;

  publisher_packet_loss_fraction: number;

  publishing_duration_seconds: number;

  quality_score: number;

  receiving_duration_seconds: number;

  session_id: string;

  total_pixels_in: number;

  total_pixels_out: number;

  bro_ws_er?: string;

  browser_version?: string;

  current_ip?: string;

  current_sfu?: string;

  device_model?: string;

  device_version?: string;

  distance_to_sfu_kilometers?: number;

  max_fir_per_second?: number;

  max_freezes_per_second?: number;

  max_nack_per_second?: number;

  max_pli_per_second?: number;

  os?: string;

  os_version?: string;

  publisher_noise_cancellation_seconds?: number;

  publisher_quality_limitation_fraction?: number;

  publishing_audio_codec?: string;

  publishing_video_codec?: string;

  receiving_audio_codec?: string;

  receiving_video_codec?: string;

  sdk?: string;

  sdk_version?: string;

  subscriber_video_quality_throttled_duration_seconds?: number;

  truncated?: boolean;

  webrtc_version?: string;

  published_tracks?: Array<PublishedTrackInfo>;

  subsessions?: Array<Subsession>;

  geolocation?: GeolocationResult;

  jitter?: TimeStats;

  latency?: TimeStats;

  max_publishing_video_quality?: VideoQuality;

  max_receiving_video_quality?: VideoQuality;

  pub_sub_hints?: MediaPubSubHint;

  publisher_audio_mos?: MOSStats;

  publisher_jitter?: TimeStats;

  publisher_latency?: TimeStats;

  publisher_video_quality_limitation_duration_seconds?: Record<string, number>;

  subscriber_audio_mos?: MOSStats;

  subscriber_jitter?: TimeStats;

  subscriber_latency?: TimeStats;

  timeline?: CallTimeline;
}

export interface UserStats {
  min_event_ts: number;

  session_stats: Array<UserSessionStats>;

  info: UserInfoResponse;

  rating?: number;
}

export interface UserUnbannedEvent {
  channel_id: string;

  channel_type: string;

  cid: string;

  created_at: Date;

  shadow: boolean;

  type: string;

  team?: string;

  user?: UserObject;
}

export interface UserUnmutedEvent {
  created_at: Date;

  type: string;

  target_user?: string;

  target_users?: Array<string>;

  user?: UserObject;
}

export interface UserUpdatedEvent {
  created_at: Date;

  type: string;

  user: UserEventPayload;

  received_at?: Date;
}

export interface VideoQuality {
  usage_type?: string;

  resolution?: VideoResolution;
}

export interface VideoResolution {
  height: number;

  width: number;
}

export interface VideoSettingsRequest {
  access_request_enabled?: boolean;

  camera_default_on?: boolean;

  camera_facing?: 'front' | 'back' | 'external';

  enabled?: boolean;

  target_resolution?: TargetResolution;
}

export interface VideoSettingsResponse {
  access_request_enabled: boolean;

  camera_default_on: boolean;

  camera_facing: 'front' | 'back' | 'external';

  enabled: boolean;

  target_resolution: TargetResolution;
}

export interface WSAuthMessage {
  token: string;

  user_details: ConnectUserDetailsRequest;

  products?: Array<string>;
}

export interface WSClientEvent {
  type: string;
}

export interface WSEvent {
  type: string;
}

export interface WebhookEvent {
  type: string;
}
