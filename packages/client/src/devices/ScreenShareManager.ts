import { Observable, of } from 'rxjs';
import { InputMediaDeviceManager } from './InputMediaDeviceManager';
import { ScreenShareState } from './ScreenShareState';
import { Call } from '../Call';
import { TrackType } from '../gen/video/sfu/models/models';
import { getScreenShareStream } from './devices';
import { ScreenShareSettings } from '../types';
import { createSubscription } from '../store/rxUtils';

export class ScreenShareManager extends InputMediaDeviceManager<
  ScreenShareState,
  DisplayMediaStreamOptions
> {
  constructor(call: Call) {
    super(call, new ScreenShareState(), TrackType.SCREEN_SHARE);

    this.subscriptions.push(
      createSubscription(call.state.settings$, (settings) => {
        const maybeTargetResolution = settings?.screensharing.target_resolution;

        if (maybeTargetResolution) {
          this.setDefaultConstraints({
            video: {
              width: maybeTargetResolution.width,
              height: maybeTargetResolution.height,
            },
          });
        }
      }),
    );
  }

  /**
   * Will enable screen share audio options on supported platforms.
   *
   * Note: for ongoing screen share, audio won't be enabled until you
   * re-publish the screen share stream.
   */
  enableScreenShareAudio(): void {
    this.state.setAudioEnabled(true);
  }

  /**
   * Will disable screen share audio options on supported platforms.
   */
  async disableScreenShareAudio(): Promise<void> {
    this.state.setAudioEnabled(false);
    if (this.call.publisher?.isPublishing(TrackType.SCREEN_SHARE_AUDIO)) {
      await this.call.stopPublish(TrackType.SCREEN_SHARE_AUDIO, true);
    }
  }

  /**
   * Returns the current screen share settings.
   */
  getSettings(): ScreenShareSettings | undefined {
    return this.state.settings;
  }

  /**
   * Sets the current screen share settings.
   *
   * @param settings the settings to set.
   */
  setSettings(settings: ScreenShareSettings | undefined): void {
    this.state.setSettings(settings);
  }

  protected getDevices(): Observable<MediaDeviceInfo[]> {
    return of([]); // there are no devices to be listed for Screen Share
  }

  protected getConstraints(
    defaultConstraints: DisplayMediaStreamOptions,
  ): DisplayMediaStreamOptions {
    if (!this.state.audioEnabled) {
      return { ...defaultConstraints, audio: false };
    }

    return defaultConstraints;
  }

  protected getStream(
    constraints: DisplayMediaStreamOptions,
  ): Promise<MediaStream> {
    return getScreenShareStream(constraints);
  }

  protected publishStream(stream: MediaStream): Promise<void> {
    return this.call.publishScreenShareStream(stream);
  }

  protected async stopPublishStream(stopTracks: boolean): Promise<void> {
    await this.call.stopPublish(TrackType.SCREEN_SHARE, stopTracks);
    await this.call.stopPublish(TrackType.SCREEN_SHARE_AUDIO, stopTracks);
  }

  /**
   * Overrides the default `select` method to throw an error.
   *
   * @param deviceId ignored.
   */
  async select(deviceId: string | undefined): Promise<void> {
    throw new Error('This method is not supported in for Screen Share');
  }
}
