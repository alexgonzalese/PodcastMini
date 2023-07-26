export const searchPodcast = async () => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    const data = await response.json();

    const podcasts = data.feed.entry;
   
    return podcasts?.map((podcast) => ({
      id: podcast.id.attributes["im:id"],
      title: podcast.title.label,
      imageUrl: podcast["im:image"][1].label,
      artist: podcast["im:artist"].label,
    }));
  } catch (error) {
    throw new Error("Error al obtener los datos");
    console.error("Error al obtener los datos:", error);
  }
};
