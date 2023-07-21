import withResult from "../data/withResult.json";

export function usePodcast() {
  const podcasts = withResult.feed.entry;

  const mappedPodcasts = podcasts?.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
    description: podcast["im:name"].label,
    imageUrl: podcast["im:image"][1].label,
    artist: podcast["im:artist"].label,
  }));
  return { podcasts: mappedPodcasts };
}
