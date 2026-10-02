# Contributing

## Compress media before adding it to `/public`

Everything in `/public` ships in every deployment, so oversized images and
videos bloat the bundle and slow the site. **Before committing any image or
video to `/public`, compress it first.**

**Images — max ~300 KB**
- Export as **WebP** or an optimized **JPG**.
- Max width **1920px** (downscale larger exports — a full-res photo is almost
  never needed, especially for backgrounds or thumbnails).

**Videos — max ~1 MB**
- **720p** (max height 720px).
- H.264, **CRF 30**, `-movflags +faststart`. Example:
  ```bash
  ffmpeg -i input.mp4 -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 30 \
    -preset slow -pix_fmt yuv420p -movflags +faststart -an output.mp4
  ```

If an asset genuinely can't fit these limits, host it externally (e.g. Vercel
Blob, Cloudinary, or a YouTube/Vimeo embed) instead of committing it.
