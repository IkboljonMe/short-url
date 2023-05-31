export type urlData = {
  id: number;
  urlId: string;
  shortUrl: string;
  origUrl: string;
  clicks: number;
  date: number;
};
export interface AxiosResponseUrl {
  data: urlData;
}
