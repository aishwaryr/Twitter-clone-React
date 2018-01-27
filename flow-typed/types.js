// @flow

export type Tweet = {
  id: string,
  first_name: string,
  last_name: string,
  profile_picture: string,
  tweet: string,
  likes: number,
  retweets: number,
  replies: number
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
