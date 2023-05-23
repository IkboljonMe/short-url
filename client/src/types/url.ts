export type urlData = {
  urlId: string;
  shortUrl: string;
  origUrl: string;
  clicks: number;
};
export interface AxiosResponse {
  data: urlData;
}
