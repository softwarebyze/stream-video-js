/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter long_type_string,client_generic,server_none,eslint_disable
// @generated from protobuf file "video/coordinator/stat_v1/stat.proto" (package "stream.video.coordinator.stat_v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
/**
 * ParticipantConnected is fired when a user joins a call
 *
 * @generated from protobuf message stream.video.coordinator.stat_v1.ParticipantConnected
 */
export interface ParticipantConnected {
}
/**
 * ParticipantDisconnected is fired when a user leaves a call
 *
 * @generated from protobuf message stream.video.coordinator.stat_v1.ParticipantDisconnected
 */
export interface ParticipantDisconnected {
}
/**
 * MuteStateChanged is fired when a user mutes/unmutes their audio/video
 *
 * @generated from protobuf message stream.video.coordinator.stat_v1.MuteStateChanged
 */
export interface MuteStateChanged {
    /**
     * @generated from protobuf field: stream.video.coordinator.stat_v1.MediaType media_type = 1;
     */
    mediaType: MediaType;
    /**
     * @generated from protobuf field: bool muted = 2;
     */
    muted: boolean;
}
/**
 * The participant experienced a significant amount of audio/video freeze when observing a given peer
 *
 * @generated from protobuf message stream.video.coordinator.stat_v1.Freeze
 */
export interface Freeze {
    /**
     * @generated from protobuf field: stream.video.coordinator.stat_v1.MediaType media_type = 1;
     */
    mediaType: MediaType;
    /**
     * Sender of the media stream
     *
     * @generated from protobuf field: string peer_id = 2;
     */
    peerId: string;
    /**
     * @generated from protobuf field: google.protobuf.Duration duration = 3;
     */
    duration?: Duration;
}
/**
 * A stat event from the perspective of a particular participant
 *
 * @generated from protobuf message stream.video.coordinator.stat_v1.TelemetryEvent
 */
export interface TelemetryEvent {
    /**
     * Event timestamp as RFC3339 string.
     *
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 1;
     */
    timestamp?: Timestamp;
    /**
     * @generated from protobuf oneof: event
     */
    event: {
        oneofKind: "participantConnected";
        /**
         * @generated from protobuf field: stream.video.coordinator.stat_v1.ParticipantConnected participant_connected = 2;
         */
        participantConnected: ParticipantConnected;
    } | {
        oneofKind: "participantDisconnected";
        /**
         * @generated from protobuf field: stream.video.coordinator.stat_v1.ParticipantDisconnected participant_disconnected = 3;
         */
        participantDisconnected: ParticipantDisconnected;
    } | {
        oneofKind: "muteStateChanged";
        /**
         * @generated from protobuf field: stream.video.coordinator.stat_v1.MuteStateChanged mute_state_changed = 4;
         */
        muteStateChanged: MuteStateChanged;
    } | {
        oneofKind: "freeze";
        /**
         * @generated from protobuf field: stream.video.coordinator.stat_v1.Freeze freeze = 5;
         */
        freeze: Freeze;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message stream.video.coordinator.stat_v1.CallParticipantTimeline
 */
export interface CallParticipantTimeline {
    /**
     * The events in this timeline are from the perspective of the user with this ID
     *
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from protobuf field: string session_id = 2;
     */
    sessionId: string;
    /**
     * @generated from protobuf field: repeated stream.video.coordinator.stat_v1.TelemetryEvent events = 3;
     */
    events: TelemetryEvent[];
}
/**
 * @generated from protobuf enum stream.video.coordinator.stat_v1.MediaType
 */
export enum MediaType {
    /**
     * @generated from protobuf enum value: MEDIA_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: MEDIA_TYPE_AUDIO = 1;
     */
    AUDIO = 1,
    /**
     * @generated from protobuf enum value: MEDIA_TYPE_VIDEO = 2;
     */
    VIDEO = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class ParticipantConnected$Type extends MessageType<ParticipantConnected> {
    constructor() {
        super("stream.video.coordinator.stat_v1.ParticipantConnected", []);
    }
    create(value?: PartialMessage<ParticipantConnected>): ParticipantConnected {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ParticipantConnected>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParticipantConnected): ParticipantConnected {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ParticipantConnected, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.stat_v1.ParticipantConnected
 */
export const ParticipantConnected = new ParticipantConnected$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParticipantDisconnected$Type extends MessageType<ParticipantDisconnected> {
    constructor() {
        super("stream.video.coordinator.stat_v1.ParticipantDisconnected", []);
    }
    create(value?: PartialMessage<ParticipantDisconnected>): ParticipantDisconnected {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ParticipantDisconnected>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParticipantDisconnected): ParticipantDisconnected {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ParticipantDisconnected, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.stat_v1.ParticipantDisconnected
 */
export const ParticipantDisconnected = new ParticipantDisconnected$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MuteStateChanged$Type extends MessageType<MuteStateChanged> {
    constructor() {
        super("stream.video.coordinator.stat_v1.MuteStateChanged", [
            { no: 1, name: "media_type", kind: "enum", T: () => ["stream.video.coordinator.stat_v1.MediaType", MediaType, "MEDIA_TYPE_"] },
            { no: 2, name: "muted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MuteStateChanged>): MuteStateChanged {
        const message = { mediaType: 0, muted: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MuteStateChanged>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MuteStateChanged): MuteStateChanged {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* stream.video.coordinator.stat_v1.MediaType media_type */ 1:
                    message.mediaType = reader.int32();
                    break;
                case /* bool muted */ 2:
                    message.muted = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MuteStateChanged, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* stream.video.coordinator.stat_v1.MediaType media_type = 1; */
        if (message.mediaType !== 0)
            writer.tag(1, WireType.Varint).int32(message.mediaType);
        /* bool muted = 2; */
        if (message.muted !== false)
            writer.tag(2, WireType.Varint).bool(message.muted);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.stat_v1.MuteStateChanged
 */
export const MuteStateChanged = new MuteStateChanged$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Freeze$Type extends MessageType<Freeze> {
    constructor() {
        super("stream.video.coordinator.stat_v1.Freeze", [
            { no: 1, name: "media_type", kind: "enum", T: () => ["stream.video.coordinator.stat_v1.MediaType", MediaType, "MEDIA_TYPE_"] },
            { no: 2, name: "peer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 3, name: "duration", kind: "message", T: () => Duration }
        ]);
    }
    create(value?: PartialMessage<Freeze>): Freeze {
        const message = { mediaType: 0, peerId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Freeze>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Freeze): Freeze {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* stream.video.coordinator.stat_v1.MediaType media_type */ 1:
                    message.mediaType = reader.int32();
                    break;
                case /* string peer_id */ 2:
                    message.peerId = reader.string();
                    break;
                case /* google.protobuf.Duration duration */ 3:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Freeze, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* stream.video.coordinator.stat_v1.MediaType media_type = 1; */
        if (message.mediaType !== 0)
            writer.tag(1, WireType.Varint).int32(message.mediaType);
        /* string peer_id = 2; */
        if (message.peerId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.peerId);
        /* google.protobuf.Duration duration = 3; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.stat_v1.Freeze
 */
export const Freeze = new Freeze$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TelemetryEvent$Type extends MessageType<TelemetryEvent> {
    constructor() {
        super("stream.video.coordinator.stat_v1.TelemetryEvent", [
            { no: 1, name: "timestamp", kind: "message", T: () => Timestamp },
            { no: 2, name: "participant_connected", kind: "message", oneof: "event", T: () => ParticipantConnected },
            { no: 3, name: "participant_disconnected", kind: "message", oneof: "event", T: () => ParticipantDisconnected },
            { no: 4, name: "mute_state_changed", kind: "message", oneof: "event", T: () => MuteStateChanged },
            { no: 5, name: "freeze", kind: "message", oneof: "event", T: () => Freeze }
        ]);
    }
    create(value?: PartialMessage<TelemetryEvent>): TelemetryEvent {
        const message = { event: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TelemetryEvent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TelemetryEvent): TelemetryEvent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Timestamp timestamp */ 1:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* stream.video.coordinator.stat_v1.ParticipantConnected participant_connected */ 2:
                    message.event = {
                        oneofKind: "participantConnected",
                        participantConnected: ParticipantConnected.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).participantConnected)
                    };
                    break;
                case /* stream.video.coordinator.stat_v1.ParticipantDisconnected participant_disconnected */ 3:
                    message.event = {
                        oneofKind: "participantDisconnected",
                        participantDisconnected: ParticipantDisconnected.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).participantDisconnected)
                    };
                    break;
                case /* stream.video.coordinator.stat_v1.MuteStateChanged mute_state_changed */ 4:
                    message.event = {
                        oneofKind: "muteStateChanged",
                        muteStateChanged: MuteStateChanged.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).muteStateChanged)
                    };
                    break;
                case /* stream.video.coordinator.stat_v1.Freeze freeze */ 5:
                    message.event = {
                        oneofKind: "freeze",
                        freeze: Freeze.internalBinaryRead(reader, reader.uint32(), options, (message.event as any).freeze)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TelemetryEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Timestamp timestamp = 1; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.stat_v1.ParticipantConnected participant_connected = 2; */
        if (message.event.oneofKind === "participantConnected")
            ParticipantConnected.internalBinaryWrite(message.event.participantConnected, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.stat_v1.ParticipantDisconnected participant_disconnected = 3; */
        if (message.event.oneofKind === "participantDisconnected")
            ParticipantDisconnected.internalBinaryWrite(message.event.participantDisconnected, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.stat_v1.MuteStateChanged mute_state_changed = 4; */
        if (message.event.oneofKind === "muteStateChanged")
            MuteStateChanged.internalBinaryWrite(message.event.muteStateChanged, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* stream.video.coordinator.stat_v1.Freeze freeze = 5; */
        if (message.event.oneofKind === "freeze")
            Freeze.internalBinaryWrite(message.event.freeze, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.stat_v1.TelemetryEvent
 */
export const TelemetryEvent = new TelemetryEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CallParticipantTimeline$Type extends MessageType<CallParticipantTimeline> {
    constructor() {
        super("stream.video.coordinator.stat_v1.CallParticipantTimeline", [
            { no: 1, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "session_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 3, name: "events", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TelemetryEvent }
        ]);
    }
    create(value?: PartialMessage<CallParticipantTimeline>): CallParticipantTimeline {
        const message = { userId: "", sessionId: "", events: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CallParticipantTimeline>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CallParticipantTimeline): CallParticipantTimeline {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user_id */ 1:
                    message.userId = reader.string();
                    break;
                case /* string session_id */ 2:
                    message.sessionId = reader.string();
                    break;
                case /* repeated stream.video.coordinator.stat_v1.TelemetryEvent events */ 3:
                    message.events.push(TelemetryEvent.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CallParticipantTimeline, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string user_id = 1; */
        if (message.userId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userId);
        /* string session_id = 2; */
        if (message.sessionId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.sessionId);
        /* repeated stream.video.coordinator.stat_v1.TelemetryEvent events = 3; */
        for (let i = 0; i < message.events.length; i++)
            TelemetryEvent.internalBinaryWrite(message.events[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stream.video.coordinator.stat_v1.CallParticipantTimeline
 */
export const CallParticipantTimeline = new CallParticipantTimeline$Type();
