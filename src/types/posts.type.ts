export type InstagramPostProps = {
  id: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
  mediaUrl: string;
  timestamp: Date;
  caption?: string;
};
