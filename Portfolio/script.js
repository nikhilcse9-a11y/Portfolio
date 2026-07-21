document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-link');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking links
    navLinksItems.forEach(item => {
      item.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Header scroll class
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Typewriter effect
  const typeTarget = document.querySelector('.typing-text');
  if (typeTarget) {
    const words = JSON.parse(typeTarget.getAttribute('data-words'));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentWord = '';

    function type() {
      const fullWord = words[wordIndex];
      
      if (isDeleting) {
        currentWord = fullWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentWord = fullWord.substring(0, charIndex + 1);
        charIndex++;
      }

      typeTarget.textContent = currentWord;

      let typeSpeed = isDeleting ? 40 : 100;

      if (!isDeleting && currentWord === fullWord) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && currentWord === '') {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before next word
      }

      setTimeout(type, typeSpeed);
    }
    type();
  }

  // Skills filter interaction
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          const categories = card.getAttribute('data-categories').split(' ');
          if (categories.includes(filterValue)) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            // Delay hide to allow animation
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        }
      });
    });
  });

  const certDetails = {
    gcapf: {
      title: 'Google Cloud Arcade Facilitator Program',
      issuer: 'Google Cloud',
      date: '2024',
      badge: 'Ultimate Milestone (50+ badges)',
      desc: 'Completed multiple Google Cloud hands-on labs and quests, covering cloud foundations, infrastructure, Kubernetes, BigQuery, databases, security, and GenAI tools, achieving the highest milestone tier with over 50 skill badges.',
      link: '#',
      image: 'assets/certificates/google_cloud.pdf'
    },
    ehcert: {
      title: 'Ethical Hacking Certification',
      issuer: 'IIIT Bhubaneswar (ISEA Project)',
      date: 'January 2025',
      badge: 'Certified Ethical Hacker (Project level)',
      desc: 'In-depth training on network security, web penetration testing, system vulnerability assessments, and mitigation strategies under the Information Security Education and Awareness (ISEA) project.',
      link: '#',
      image: 'assets/certificates/ethical_hacking.jpg'
    },
    pqc: {
      title: 'Post-Quantum Cryptography Short Course',
      issuer: 'IIIT Bhubaneswar & MeitY (Govt. of India)',
      date: 'March 2025',
      badge: 'Short-Term Academic Completion',
      desc: 'Studied modern cryptographic algorithms resilient to quantum attacks, lattice-based cryptography, hash-based signatures, and the standardizations driven by NIST and MeitY.',
      link: '#',
      image: 'assets/certificates/post_quantum_cryptography.pdf'
    },
    cyberdeloitte: {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte (Forage)',
      date: 'June 2025',
      badge: 'Simulation Certificate',
      desc: 'Completed interactive modules replicating a Deloitte cybersecurity consulting analyst role. Conducted network assessments, threat modeling, security incident reports, and recommended architectural enhancements.',
      link: '#',
      image: 'assets/certificates/deloitte_cyber.pdf'
    },
    dataanalytics: {
      title: 'GenAI-Powered Data Analytics Job Simulation',
      issuer: 'Tata (Forage)',
      date: 'July 2025',
      badge: 'Simulation Certificate',
      desc: 'Applied Generative AI techniques to data analytics workflows. Conducted Python-based data cleaning, predictive modeling, prompted LLMs for code generation, and created dynamic reporting dashboards.',
      link: '#',
      image: 'assets/certificates/tata_data_analytics.pdf'
    },
    panw: {
      title: 'Palo Alto Networks Cybersecurity Professional Certificate',
      issuer: 'Palo Alto Networks (Coursera)',
      date: 'October 2025',
      badge: 'Professional Certificate',
      desc: 'Comprehensive training path spanning network security, cloud security, and security operations. Configured firewalls, defined threat prevention profiles, and analyzed SIEM logs.',
      link: 'https://coursera.org/verify/professional-cert/VC7DUI5QM24X',
      image: 'assets/certificates/palo_alto.jpg'
    },
    tatacyber: {
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Tata Group (Forage)',
      date: 'July 2025',
      badge: 'Simulation Certificate',
      desc: 'Simulated real-world tasks of a Cybersecurity Analyst. Investigated system intrusions, identified vulnerabilities in enterprise software, and formulated security patches and incident response documentation.',
      link: '#',
      image: 'assets/certificates/tata_cybersecurity.pdf'
    },
    jpmorgan: {
      title: 'Investment Banking Job Simulation',
      issuer: 'J.P. Morgan (Forage)',
      date: 'April 2026',
      badge: 'Simulation Certificate',
      desc: 'Completed interactive modules replicating a J.P. Morgan investment banking analyst role. Tasks included M&A target identification, target company profiling, financial analysis/modeling, and delivering strategic investment recommendations.',
      link: '#',
      image: 'assets/certificates/jpmorgan_investment_banking.pdf'
    },
    gclaileader: {
      title: 'Google Cloud Career Launchpad - Generative AI Leader track',
      issuer: 'Google Cloud',
      date: 'April 2026',
      badge: 'Generative AI Leader track',
      desc: 'Successfully completed all required courses and hands-on labs in the Google Cloud Career Launchpad Generative AI Leader track, demonstrating understanding of Generative AI principles, Large Language Models (LLMs), Responsible AI guidelines, and Google Cloud AI tools.',
      link: '#',
      image: 'assets/certificates/gclaileader.pdf'
    }
  };

  const certOrder = ['panw', 'ehcert', 'gclaileader', 'gcapf', 'pqc', 'cyberdeloitte', 'dataanalytics', 'tatacyber', 'jpmorgan'];
  let currentCertIndex = 0;

  const modal = document.getElementById('cert-modal');
  const closeButtons = document.querySelectorAll('.modal-close');
  const certCards = document.querySelectorAll('.cert-card');

  if (modal && closeButtons.length > 0) {
    const fillModal = (certId) => {
      const info = certDetails[certId];
      if (!info) return;

      const modalContent = document.querySelector('.modal-content');
      modalContent.style.opacity = '0.3';
      modalContent.style.transform = 'scale(0.98)';

      setTimeout(() => {
        // Details pane updates
        document.getElementById('modal-issuer').textContent = info.issuer;
        document.getElementById('modal-title').textContent = info.title;
        document.getElementById('modal-date').textContent = info.date;
        document.getElementById('modal-badge').textContent = info.badge;
        document.getElementById('modal-desc').textContent = info.desc;

        // Placeholder updates
        document.getElementById('cert-placeholder-title').textContent = info.title;
        document.getElementById('cert-placeholder-issuer').textContent = info.issuer;

        const modalLink = document.getElementById('modal-link');
        if (modalLink) {
          if (info.link && info.link !== '#') {
            modalLink.href = info.link;
            modalLink.style.display = 'inline-flex';
          } else {
            modalLink.style.display = 'none';
          }
        }

        // Update custom actions toolbar (Download / Fullscreen)
        const downloadBtn = document.getElementById('modal-download-btn');
        const fullscreenBtn = document.getElementById('modal-fullscreen-btn');
        const actionsToolbar = document.querySelector('.cert-actions-toolbar');

        if (info.image && info.image !== '#') {
          if (actionsToolbar) actionsToolbar.style.display = 'flex';
          if (downloadBtn) downloadBtn.href = info.image;
          if (fullscreenBtn) {
            fullscreenBtn.href = info.image;
            fullscreenBtn.onclick = (e) => {
              e.preventDefault();
              window.location.href = info.image;
            };
          }
        } else {
          if (actionsToolbar) actionsToolbar.style.display = 'none';
        }

        // Image / PDF handling with automatic fallback loading
        const img = document.getElementById('cert-modal-image');
        const iframe = document.getElementById('cert-modal-pdf');
        const placeholder = document.querySelector('#cert-modal .cert-placeholder');

        // Reset all elements
        img.style.display = 'none';
        if (iframe) iframe.style.display = 'none';
        placeholder.style.display = 'flex';

        if (info.image && info.image !== '#') {
          if (info.image.endsWith('.pdf')) {
            if (iframe) {
              iframe.src = info.image + '#toolbar=0';
              iframe.style.display = 'block';
              placeholder.style.display = 'none';
            }
          } else {
            const tempImg = new Image();
            tempImg.onload = () => {
              img.src = info.image;
              img.style.display = 'block';
              placeholder.style.display = 'none';
            };
            tempImg.onerror = () => {
              img.style.display = 'none';
              placeholder.style.display = 'flex';
            };
            tempImg.src = info.image;
          }
        } else {
          img.style.display = 'none';
          placeholder.style.display = 'flex';
        }

        // Update counter and slide controls
        const index = certOrder.indexOf(certId);
        if (index !== -1) {
          currentCertIndex = index;
        }
        document.getElementById('modal-cert-counter').textContent = `${currentCertIndex + 1} of ${certOrder.length}`;

        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
      }, 150);
    };

    certCards.forEach(card => {
      card.addEventListener('click', () => {
        const certId = card.getAttribute('data-id');
        fillModal(certId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
      });
    });

    // Modal Arrow Controls (Slideshow functionality)
    const prevBtn = document.getElementById('modal-prev-cert');
    const nextBtn = document.getElementById('modal-next-cert');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCertIndex = (currentCertIndex - 1 + certOrder.length) % certOrder.length;
        fillModal(certOrder[currentCertIndex]);
      });

      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCertIndex = (currentCertIndex + 1) % certOrder.length;
        fillModal(certOrder[currentCertIndex]);
      });
    }

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Unlock scroll
    };

    closeButtons.forEach(btn => {
      btn.addEventListener('click', closeModal);
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100; // Trigger when element is 100px visible

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  // Initial run to reveal elements already in viewport
  revealOnScroll();

  // Scroll spy active links in navigation
  const sections = document.querySelectorAll('section[id]');
  const scrollSpy = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // offset header
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollSpy);

  // Form Validation & Interactive Feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      // simple validate
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill out all required fields.');
        return;
      }

      // Visual feedback loading
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

      // Simulate network request
      setTimeout(() => {
        // Success view
        contactForm.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; justify-content: center; height: 100%;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(0, 255, 170, 0.1); border: 2px solid var(--cyber-green); display: flex; justify-content: center; align-items: center; font-size: 2.2rem; color: var(--cyber-green); box-shadow: 0 0 20px rgba(0, 255, 170, 0.2); animation: scaleIn 0.4s ease;">
              ✓
            </div>
            <h3 style="font-size: 1.6rem; color: var(--text-main);">Message Sent</h3>
            <p style="color: var(--text-muted); max-width: 320px; font-size: 0.95rem; line-height: 1.5;">
              Thank you, <span style="color: var(--primary-glow); font-weight: 600;">${nameInput.value}</span>! Your message has been sent successfully. I will get back to you shortly.
            </p>
          </div>
        `;
      }, 1500);
    });
  }
});
