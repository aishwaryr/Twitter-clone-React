function makeRandomId() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 16; i += 1)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

export function makeTweetObject(tweet) {
  const tweetObject = {};
  tweetObject.id = makeRandomId();
  tweetObject.first_name = "Wes";
  tweetObject.last_name = "Bos";
  tweetObject.profile_picture =
    "http://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg";
  tweetObject.tweet = tweet;
  tweetObject.likes = 0;
  tweetObject.retweets = 0;
  tweetObject.replies = 0;
  return tweetObject;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
