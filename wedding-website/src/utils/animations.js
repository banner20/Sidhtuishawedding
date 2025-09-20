// Animation utilities for the wedding website

export class AnimationController {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    // Initialize Intersection Observer for scroll animations
    this.setupScrollAnimations();
    
    // Add staggered animations
    this.setupStaggeredAnimations();
    
    // Setup page load animations
    this.setupPageLoadAnimations();
  }

  setupScrollAnimations() {
    const options = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation to children if they exist
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, options);

    // Observe elements with scroll animation classes
    const animateElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale'
    );
    
    animateElements.forEach(el => {
      this.observer.observe(el);
    });
  }

  setupStaggeredAnimations() {
    const staggerGroups = document.querySelectorAll('[data-stagger]');
    
    staggerGroups.forEach(group => {
      const delay = parseInt(group.dataset.stagger) || 100;
      const children = group.children;
      
      Array.from(children).forEach((child, index) => {
        child.style.animationDelay = `${index * delay}ms`;
        child.classList.add('animate-fade-in-up');
      });
    });
  }

  setupPageLoadAnimations() {
    // Animate hero section on page load
    const heroElements = document.querySelectorAll('.hero .animate-hero');
    heroElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 200}ms`;
    });

    // Animate navigation on page load
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 100}ms`;
      item.classList.add('animate-fade-in-down');
    });
  }

  // Utility method to add entrance animation to new elements
  animateIn(element, animationType = 'fadeInUp', delay = 0) {
    element.style.animationDelay = `${delay}ms`;
    element.classList.add(`animate-${animationType}`);
  }

  // Method to animate elements out
  animateOut(element, callback = null) {
    element.style.animation = 'fadeOut 0.3s ease-out forwards';
    
    if (callback) {
      setTimeout(callback, 300);
    }
  }

  // Toggle animations for collapsible sections
  toggleSection(element, isOpening) {
    if (isOpening) {
      element.style.animation = 'slideDown 0.3s ease-out forwards';
      element.style.display = 'block';
    } else {
      element.style.animation = 'slideUp 0.3s ease-out forwards';
      setTimeout(() => {
        element.style.display = 'none';
      }, 300);
    }
  }

  // Animate timeline items
  animateTimeline(timelineContainer) {
    const items = timelineContainer.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 100}ms`;
      item.classList.add('animate-fade-in-left');
    });
  }

  // Button click animation
  animateButtonClick(button) {
    button.classList.add('animate-button');
    
    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Polaroid image animations
  animatePolaroids() {
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach((polaroid, index) => {
      // Add random rotation
      const rotation = (Math.random() - 0.5) * 10; // Random rotation between -5 and 5 degrees
      polaroid.style.transform = `rotate(${rotation}deg)`;
      
      // Add hover animation class
      polaroid.classList.add('animate-polaroid');
      
      // Stagger the entrance animation
      polaroid.style.animationDelay = `${index * 200}ms`;
      polaroid.classList.add('animate-scale-in');
    });
  }

  // Text typing effect
  typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }

  // Parallax effect for backgrounds
  setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
          const rate = scrolled * -0.5;
          element.style.transform = `translateY(${rate}px)`;
        });
      });
    }
  }

  // Cleanup method
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Utility functions for direct use
export const animationUtils = {
  // Add entrance animation to element
  fadeIn: (element, delay = 0) => {
    element.style.animationDelay = `${delay}ms`;
    element.classList.add('animate-fade-in');
  },

  // Add slide in animation
  slideIn: (element, direction = 'up', delay = 0) => {
    element.style.animationDelay = `${delay}ms`;
    element.classList.add(`animate-fade-in-${direction}`);
  },

  // Add scale animation
  scaleIn: (element, delay = 0) => {
    element.style.animationDelay = `${delay}ms`;
    element.classList.add('animate-scale-in');
  },

  // Smooth scroll to element
  scrollTo: (element, offset = 0) => {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  },

  // Add loading animation
  showLoading: (element) => {
    element.classList.add('animate-loading');
  },

  // Remove loading animation
  hideLoading: (element) => {
    element.classList.remove('animate-loading');
  },

  // Bounce animation for attention
  bounce: (element) => {
    element.classList.add('animate-wiggle');
    setTimeout(() => {
      element.classList.remove('animate-wiggle');
    }, 2000);
  }
};

// Initialize animations when DOM is ready
export const initAnimations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new AnimationController();
    });
  } else {
    new AnimationController();
  }
};

// Export for React components
export default AnimationController;