document.getElementById("getPlaylist").addEventListener("click", () => {
  fetch("/js/data.json")
    .then((res) => res.json())
    .then((data) => {
      let playlist = data.PLAYLIST;
    });
});
