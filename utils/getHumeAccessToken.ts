import "server-only";
import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
  //get currnt environment production or development
  const env = process.env.NODE_ENV;

  if (env === "development") {
    const accessToken = await fetchAccessToken({
      apiKey: String(process.env.HUME_API_KEY),
      secretKey: String(process.env.HUME_CLIENT_SECRET),
    });

    if (accessToken === "undefined") {
      return null;
    }

    return accessToken ?? null;
  }

  if (env === "production") {
    const accessToken = await fetchAccessToken({
      apiKey: String(process.env.HUME_API_KEY),
      clientSecret: String(process.env.HUME_CLIENT_SECRET),
    });

    if (accessToken === "undefined") {
      return null;
    }

    return accessToken ?? null;
  }
};
