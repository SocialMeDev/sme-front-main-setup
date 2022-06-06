export default function formatDefaultImages(defaultImages = []) {
  return defaultImages.map((avatar) => {
    return {
      avatarId: avatar.id,
      url: avatar.public_url
    }
  })
}
