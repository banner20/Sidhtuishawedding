# Wedding Website - Image Setup

## Adding Images

To add images to your wedding website:

1. **Place images in the `public/images/` folder**
   ```
   public/
   └── images/
       ├── couple-photo.jpg
       ├── venue-photo.jpg
       ├── engagement-photo.jpg
       └── other-photos.jpg
   ```

2. **Reference images in components using `/images/filename.jpg`**
   
   Example:
   ```jsx
   <img src=\"/images/couple-photo.jpg\" alt=\"Sidh and Trisha\" />
   ```

3. **Using the ImagePlaceholder component**
   ```jsx
   import ImagePlaceholder from './ImagePlaceholder';
   
   <ImagePlaceholder 
     src=\"/images/couple-photo.jpg\"
     alt=\"Sidh and Trisha\"
     placeholder=\"[Couple Photo]\"
     style={{height: '400px'}}
   />
   ```

## Current Image Placeholders

- **Home Page**: Couple photo, venue photos
- **About Us**: Story photos
- **Venue Section**: Tijara Fort Palace photos
- **Cards**: Wedding invitation images

## Supported Formats

- JPG/JPEG
- PNG
- WebP
- SVG

## Recommended Image Sizes

- **Hero images**: 1920x1080px
- **Story photos**: 800x600px
- **Venue photos**: 600x400px
- **Card images**: 400x600px

---

*Simply drag and drop your images into the `public/images/` folder and update the component files with the correct image paths!*