import { ChatApi } from './ChatApi';

export class ChannelApi {
  constructor(
    protected chatApi: ChatApi,
    public readonly type: string,
    public id?: string,
  ) {}
}
