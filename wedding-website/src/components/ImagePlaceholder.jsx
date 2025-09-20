const ImagePlaceholder = ({ src, alt, className, style, placeholder }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <div className={className} style={style}>
      {src && (
        <img 
          src={src.startsWith('/') ? src : `/images/${src}`} 
          alt={alt}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '4px'
          }}
        />
      )}
      <div 
        className="placeholder-img" 
        style={{
          ...style,
          display: src ? 'none' : 'flex',
          width: '100%',
          height: '100%'
        }}
      >
        {placeholder || '[Image Placeholder]'}
      </div>
    </div>
  );
};

export default ImagePlaceholder;