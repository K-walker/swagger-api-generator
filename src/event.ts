import { AxiosResponse } from 'axios';

export function axiosEvent(params: {
  type: 'success' | 'fail';
  response?: Partial<AxiosResponse<any>>;
}) {
  const evt: any = new Event(`__axios_event_request_${params.type}`);
  evt.response = params.response;
  window.dispatchEvent(evt);
}
