export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const paddedMins = String(minutes).padStart(2, "0");
  const paddedSecs = String(secs).padStart(2, "0");
  return `${paddedMins}:${paddedSecs}`;
};
