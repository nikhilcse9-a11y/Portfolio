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

      // Form Validation & Interactive Feedback & Database Integration
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const nameInput = document.getElementById('form-name');
          const emailInput = document.getElementById('form-email');
          const subjectInput = document.getElementById('form-subject');
          const messageInput = document.getElementById('form-message');

          const nameVal = nameInput.value.trim();
          const emailVal = emailInput.value.trim();
          const subjectVal = subjectInput.value.trim();
          const messageVal = messageInput.value.trim();

          // simple validate
          if (!nameVal || !emailVal || !messageVal) {
            alert('Please fill out all required fields.');
            return;
          }

          // Save to Database
          const newMsg = MessageDB.saveMessage({
            name: nameVal,
            email: emailVal,
            subject: subjectVal || 'Portfolio Contact Inquiry',
            message: messageVal
          });

          // Visual feedback loading
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Sending & Saving... <i class="fas fa-spinner fa-spin"></i>';

          // Simulate network request & save to database
          setTimeout(() => {
            // Update unread badge on footer
            MessageDB.updateBadges();

            // Success view with direct Database Link option
            contactForm.innerHTML = `
              <div style="text-align: center; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; justify-content: center; height: 100%;">
                <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(0, 255, 170, 0.1); border: 2px solid var(--cyber-green); display: flex; justify-content: center; align-items: center; font-size: 2.2rem; color: var(--cyber-green); box-shadow: 0 0 20px rgba(0, 255, 170, 0.2); animation: scaleIn 0.4s ease;">
                  ✓
                </div>
                <h3 style="font-size: 1.6rem; color: var(--text-main);">Message Sent & Saved</h3>
                <p style="color: var(--text-muted); max-width: 340px; font-size: 0.95rem; line-height: 1.5;">
                  Thank you, <span style="color: var(--primary-glow); font-weight: 600;">${nameVal}</span>! Your message has been saved to the database. I will get back to you shortly.
                </p>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                  <button id="view-sent-in-db-btn" class="btn btn-primary" style="font-size: 0.85rem; padding: 8px 16px;">
                    <i class="fa-solid fa-database"></i> View in Database
                  </button>
                </div>
              </div>
            `;

            const viewBtn = document.getElementById('view-sent-in-db-btn');
            if (viewBtn) {
              viewBtn.addEventListener('click', () => {
                MessageDB.openAdminModal();
              });
            }
          }, 1200);
        });
      }

      // Initialize Message Database Controller
      MessageDB.init();
    });

    /* ==========================================================================
       Persistent Contact Messages Database Engine & Admin Dashboard Controller
       ========================================================================== */
    const MessageDB = {
      STORAGE_KEY: 'PORTFOLIO_CONTACT_MESSAGES_DB_V1',
      PASSWORD_KEY: 'PORTFOLIO_ADMIN_PASSWORD_V1',
      DEFAULT_PIN: 'Nikhil#@541',
      currentFilter: 'all',
      searchQuery: '',

      init() {
        this.seedSampleDataIfEmpty();
        this.updateBadges();
        this.bindEvents();
      },

      getAdminPassword() {
        return localStorage.getItem(this.PASSWORD_KEY) || this.DEFAULT_PIN;
      },

      setAdminPassword(newPassword) {
        localStorage.setItem(this.PASSWORD_KEY, newPassword);
      },

      getMessages() {
        try {
          const raw = localStorage.getItem(this.STORAGE_KEY);
          return raw ? JSON.parse(raw) : [];
        } catch (e) {
          console.error('Failed to parse messages from localStorage:', e);
          return [];
        }
      },

      saveMessagesToStorage(messages) {
        try {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
          this.updateBadges();
          this.updateSystemMetrics();
        } catch (e) {
          console.error('Failed to save messages to localStorage:', e);
        }
      },

      seedSampleDataIfEmpty() {
        const existing = this.getMessages();
        if (existing.length === 0) {
          const now = new Date();
          const sampleMessages = [
            {
              id: 'msg_demo_001',
              name: 'Sarah Jenkins',
              email: 'sarah.jenkins@techrecruiters.io',
              subject: 'Cybersecurity Analyst Opportunity',
              message: 'Hi Nikhil, I came across your portfolio and was thoroughly impressed by your certifications in Palo Alto Networks and Ethical Hacking. We have a Lead Cybersecurity Analyst role at our client in Bangalore. Would you be open for a quick discovery call?',
              timestamp: new Date(now.getTime() - 3600000 * 5).toISOString(),
              formattedDate: new Date(now.getTime() - 3600000 * 5).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
              status: 'unread',
              starred: true
            },
            {
              id: 'msg_demo_002',
              name: 'Dr. Aris Thorne',
              email: 'athorne@quantumsec.org',
              subject: 'Collaboration on Post-Quantum Cryptography',
              message: 'Hello Nikhil, noticed your short course certification in Post-Quantum Cryptography from MeitY & IIIT Bhubaneswar. Our research team is publishing a paper on lattice-based signature implementation and would love your perspective.',
              timestamp: new Date(now.getTime() - 3600000 * 24).toISOString(),
              formattedDate: new Date(now.getTime() - 3600000 * 24).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
              status: 'read',
              starred: false
            }
          ];
          this.saveMessagesToStorage(sampleMessages);
        }
      },

      saveMessage(data) {
        const messages = this.getMessages();
        const now = new Date();
        const newMsg = {
          id: 'msg_' + now.getTime() + '_' + Math.random().toString(36).substr(2, 4),
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          timestamp: now.toISOString(),
          formattedDate: now.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
          status: 'unread',
          starred: false
        };
        messages.unshift(newMsg);
        this.saveMessagesToStorage(messages);
        return newMsg;
      },

      deleteMessage(id) {
        let messages = this.getMessages();
        messages = messages.filter(m => m.id !== id);
        this.saveMessagesToStorage(messages);
        this.renderMessagesList();
        this.showToast('Message deleted from database');
      },

      toggleStar(id) {
        const messages = this.getMessages();
        const msg = messages.find(m => m.id === id);
        if (msg) {
          msg.starred = !msg.starred;
          this.saveMessagesToStorage(messages);
          this.renderMessagesList();
          this.showToast(msg.starred ? 'Starred message' : 'Unstarred message');
        }
      },

      toggleReadStatus(id) {
        const messages = this.getMessages();
        const msg = messages.find(m => m.id === id);
        if (msg) {
          msg.status = (msg.status === 'unread') ? 'read' : 'unread';
          this.saveMessagesToStorage(messages);
          this.renderMessagesList();
        }
      },

      clearAllMessages() {
        if (confirm('Are you sure you want to delete ALL messages in the database? This action cannot be undone.')) {
          this.saveMessagesToStorage([]);
          this.renderMessagesList();
          this.showToast('Database cleared successfully');
        }
      },

      updateBadges() {
        const messages = this.getMessages();
        const unreadCount = messages.filter(m => m.status === 'unread').length;
        const totalCount = messages.length;
        const starredCount = messages.filter(m => m.starred).length;

        // Footer badge
        const footerBadge = document.getElementById('db-unread-badge');
        if (footerBadge) {
          if (unreadCount > 0) {
            footerBadge.textContent = unreadCount;
            footerBadge.style.display = 'inline-block';
          } else {
            footerBadge.style.display = 'none';
          }
        }

        // Stats in Admin Modal
        const statTotal = document.getElementById('stat-total-count');
        const statUnread = document.getElementById('stat-unread-count');
        const tabAll = document.getElementById('tab-count-all');
        const tabUnread = document.getElementById('tab-count-unread');
        const tabStarred = document.getElementById('tab-count-starred');

        if (statTotal) statTotal.textContent = totalCount;
        if (statUnread) statUnread.textContent = unreadCount;
        if (tabAll) tabAll.textContent = totalCount;
        if (tabUnread) tabUnread.textContent = unreadCount;
        if (tabStarred) tabStarred.textContent = starredCount;
      },

      updateSystemMetrics() {
        const messages = this.getMessages();
        const totalMsgs = messages.length;
        const unreadMsgs = messages.filter(m => m.status === 'unread').length;
        const rawData = localStorage.getItem(this.STORAGE_KEY) || '';
        const sizeInKB = (new Blob([rawData]).size / 1024).toFixed(2);

        const sysTotal = document.getElementById('sys-total-msgs');
        const sysUnread = document.getElementById('sys-unread-msgs');
        const sysKb = document.getElementById('sys-storage-kb');
        const storagePercent = document.getElementById('storage-bar-percentage');
        const storageFill = document.getElementById('storage-progress-fill');

        if (sysTotal) sysTotal.textContent = totalMsgs;
        if (sysUnread) sysUnread.textContent = unreadMsgs;
        if (sysKb) sysKb.textContent = `${sizeInKB} KB`;

        const percentage = Math.min(Math.max((sizeInKB / 5000) * 100, 1), 100).toFixed(1);
        if (storagePercent) storagePercent.textContent = `${percentage}% used of 5 MB limit`;
        if (storageFill) storageFill.style.width = `${percentage}%`;
      },

      openAdminModal() {
        if (sessionStorage.getItem('db_authenticated') === 'true') {
          const adminModal = document.getElementById('db-admin-modal');
          if (adminModal) {
            adminModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.renderMessagesList();
            this.updateSystemMetrics();
          }
        } else {
          const pinModal = document.getElementById('db-pin-modal');
          if (pinModal) {
            pinModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            const pinInput = document.getElementById('db-pin-input');
            if (pinInput) {
              pinInput.value = '';
              setTimeout(() => pinInput.focus(), 150);
            }
          }
        }
      },

      closeModals() {
        const pinModal = document.getElementById('db-pin-modal');
        const adminModal = document.getElementById('db-admin-modal');
        if (pinModal) pinModal.classList.remove('active');
        if (adminModal) adminModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      },

      lockSession() {
        sessionStorage.removeItem('db_authenticated');
        this.closeModals();
        this.showToast('Admin session locked');
      },

      bindEvents() {
        // Trigger button in footer
        const openBtn = document.getElementById('open-db-modal-btn');
        if (openBtn) {
          openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.openAdminModal();
          });
        }

        // Keyboard Shortcut: Ctrl + Shift + M
        window.addEventListener('keydown', (e) => {
          if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'M' || e.key === 'm')) {
            e.preventDefault();
            this.openAdminModal();
          }
        });

        // PIN Submission Form
        const pinForm = document.getElementById('db-pin-form');
        if (pinForm) {
          pinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pinInput = document.getElementById('db-pin-input');
            const errorMsg = document.getElementById('pin-error-msg');
            
            if (pinInput && pinInput.value.trim() === this.getAdminPassword()) {
              sessionStorage.setItem('db_authenticated', 'true');
              if (errorMsg) errorMsg.style.display = 'none';
              const pinModal = document.getElementById('db-pin-modal');
              if (pinModal) pinModal.classList.remove('active');
              this.openAdminModal();
              this.showToast('Admin Authenticated');
            } else {
              if (errorMsg) errorMsg.style.display = 'block';
              pinInput.value = '';
              pinInput.focus();
            }
          });
        }

        // Admin Top Navigation Panels Switcher (Inbox / Security / System)
        const adminNavTabs = document.querySelectorAll('.admin-nav-tab');
        adminNavTabs.forEach(tab => {
          tab.addEventListener('click', () => {
            adminNavTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetPanelId = 'admin-panel-' + tab.getAttribute('data-panel');
            const panels = document.querySelectorAll('.admin-panel-view');
            panels.forEach(p => {
              if (p.id === targetPanelId) {
                p.style.display = 'flex';
                p.classList.add('active');
              } else {
                p.style.display = 'none';
                p.classList.remove('active');
              }
            });

            if (targetPanelId === 'admin-panel-system') {
              this.updateSystemMetrics();
            }
          });
        });

        // Change Password Form
        const passForm = document.getElementById('admin-change-password-form');
        if (passForm) {
          passForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentPass = document.getElementById('pass-current').value;
            const newPass = document.getElementById('pass-new').value;
            const confirmPass = document.getElementById('pass-confirm').value;

            if (currentPass !== this.getAdminPassword()) {
              alert('Current password is incorrect.');
              return;
            }

            if (newPass !== confirmPass) {
              alert('New passwords do not match.');
              return;
            }

            this.setAdminPassword(newPass);
            passForm.reset();
            this.showToast('Master Password Updated Successfully!');
          });
        }

        // Lock / Logout Buttons
        const logoutBtn = document.getElementById('admin-logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.lockSession());

        const lockBtn = document.getElementById('btn-lock-session');
        if (lockBtn) lockBtn.addEventListener('click', () => this.lockSession());

        // System Panel Action Buttons
        const sysAddSample = document.getElementById('btn-add-sample-sys');
        if (sysAddSample) {
          sysAddSample.addEventListener('click', () => {
            this.saveMessage({
              name: 'Demo Visitor ' + Math.floor(Math.random() * 100),
              email: `visitor${Math.floor(Math.random() * 900 + 100)}@example.com`,
              subject: 'Portfolio Inquiry & Security Audit',
              message: 'This is a test message generated via the Admin System Panel tools.'
            });
            this.renderMessagesList();
            this.updateSystemMetrics();
            this.showToast('Demo Message Generated');
          });
        }

        const sysBackupJson = document.getElementById('btn-backup-json');
        if (sysBackupJson) sysBackupJson.addEventListener('click', () => this.exportJSON());

        const sysClearDb = document.getElementById('btn-clear-db-sys');
        if (sysClearDb) sysClearDb.addEventListener('click', () => this.clearAllMessages());

        // Close buttons for modals
        const pinClose = document.getElementById('pin-modal-close');
        if (pinClose) pinClose.addEventListener('click', () => this.closeModals());

        const dbClose = document.getElementById('db-modal-close');
        if (dbClose) dbClose.addEventListener('click', () => this.closeModals());

        const pinModal = document.getElementById('db-pin-modal');
        if (pinModal) {
          pinModal.addEventListener('click', (e) => {
            if (e.target === pinModal) this.closeModals();
          });
        }

        const adminModal = document.getElementById('db-admin-modal');
        if (adminModal) {
          adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) this.closeModals();
          });
        }

        // Search Input
        const searchInput = document.getElementById('db-search-input');
        const clearSearchBtn = document.getElementById('db-search-clear');
        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase().trim();
            if (clearSearchBtn) {
              clearSearchBtn.style.display = this.searchQuery ? 'block' : 'none';
            }
            this.renderMessagesList();
          });
        }

        if (clearSearchBtn) {
          clearSearchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            this.searchQuery = '';
            clearSearchBtn.style.display = 'none';
            this.renderMessagesList();
          });
        }

        // Filter Tabs
        const tabBtns = document.querySelectorAll('.db-tab-btn');
        tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.currentFilter = btn.getAttribute('data-tab');
            this.renderMessagesList();
          });
        });

        // Export CSV
        const exportCsvBtn = document.getElementById('btn-export-csv');
        if (exportCsvBtn) exportCsvBtn.addEventListener('click', () => this.exportCSV());

        // Export JSON
        const exportJsonBtn = document.getElementById('btn-export-json');
        if (exportJsonBtn) exportJsonBtn.addEventListener('click', () => this.exportJSON());
      },

      renderMessagesList() {
        const container = document.getElementById('db-messages-list');
        if (!container) return;

        let messages = this.getMessages();
        this.updateBadges();

        // Apply Tab Filter
        if (this.currentFilter === 'unread') {
          messages = messages.filter(m => m.status === 'unread');
        } else if (this.currentFilter === 'starred') {
          messages = messages.filter(m => m.starred);
        }

        // Apply Search Query
        if (this.searchQuery) {
          const q = this.searchQuery;
          messages = messages.filter(m => 
            (m.name && m.name.toLowerCase().includes(q)) ||
            (m.email && m.email.toLowerCase().includes(q)) ||
            (m.subject && m.subject.toLowerCase().includes(q)) ||
            (m.message && m.message.toLowerCase().includes(q))
          );
        }

        if (messages.length === 0) {
          container.innerHTML = `
            <div class="db-empty-state">
              <div class="db-empty-icon"><i class="fa-solid fa-inbox"></i></div>
              <h3>No Messages Found</h3>
              <p>${this.searchQuery ? 'No results matching your search terms.' : 'Your contact database is currently empty.'}</p>
            </div>
          `;
          return;
        }

        container.innerHTML = messages.map(msg => {
          const initials = msg.name ? msg.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'CU';
          const isUnread = msg.status === 'unread';
          const isStarred = msg.starred;

          // Prefilled mailto link
          const replySubject = encodeURIComponent(`Re: ${msg.subject || 'Portfolio Inquiry'}`);
          const replyBody = encodeURIComponent(`Hi ${msg.name},\n\nThank you for reaching out through my portfolio.\n\nBest regards,\nNikhil Kumar\n\n--- Original Message ---\nFrom: ${msg.name} <${msg.email}>\nDate: ${msg.formattedDate}\nSubject: ${msg.subject}\n\n${msg.message}`);
          const mailtoUrl = `mailto:${msg.email}?subject=${replySubject}&body=${replyBody}`;

          return `
            <div class="msg-card ${isUnread ? 'unread' : ''}" data-id="${msg.id}">
              <div class="msg-card-header">
                <div class="msg-sender-info">
                  <div class="msg-avatar">${initials}</div>
                  <div>
                    <div class="msg-sender-name">
                      ${this.escapeHTML(msg.name)} 
                      ${isUnread ? '<span class="unread-dot" title="Unread Message"></span>' : ''}
                    </div>
                    <a href="${mailtoUrl}" class="msg-sender-email" title="Click to send email">
                      <i class="fa-regular fa-envelope"></i> ${this.escapeHTML(msg.email)}
                    </a>
                  </div>
                </div>
                <div class="msg-meta-right">
                  <span class="msg-date">${msg.formattedDate}</span>
                  <button class="msg-star-btn ${isStarred ? 'starred' : ''}" onclick="MessageDB.toggleStar('${msg.id}')" title="${isStarred ? 'Unstar' : 'Star message'}">
                    <i class="fa-${isStarred ? 'solid' : 'regular'} fa-star"></i>
                  </button>
                </div>
              </div>

              <div>
                <div class="msg-subject">${this.escapeHTML(msg.subject || 'No Subject')}</div>
                <div class="msg-content">${this.escapeHTML(msg.message)}</div>
              </div>

              <div class="msg-actions">
                <div class="msg-actions-left">
                  <a href="${mailtoUrl}" class="msg-reply-btn" title="Open mail client to send direct response">
                    <i class="fa-solid fa-reply"></i> Reply / Contact
                  </a>
                  <button class="msg-mini-btn" onclick="MessageDB.copyEmail('${this.escapeHTML(msg.email)}')" title="Copy email address">
                    <i class="fa-regular fa-copy"></i> Copy Email
                  </button>
                  <button class="msg-mini-btn" onclick="MessageDB.toggleReadStatus('${msg.id}')" title="Toggle read/unread">
                    <i class="fa-regular ${isUnread ? 'fa-envelope-open' : 'fa-envelope'}"></i> Mark ${isUnread ? 'Read' : 'Unread'}
                  </button>
                </div>
                <button class="msg-mini-btn delete-btn" onclick="MessageDB.deleteMessage('${msg.id}')" title="Delete message">
                  <i class="fa-solid fa-trash-can"></i> Delete
                </button>
              </div>
            </div>
          `;
        }).join('');
      },

      copyEmail(email) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            this.showToast(`Copied ${email} to clipboard!`);
          }).catch(() => {
            this.showToast(`Email: ${email}`);
          });
        } else {
          this.showToast(`Email: ${email}`);
        }
      },

      escapeHTML(str) {
        if (!str) return '';
        return str.replace(/[&<>'"]/g, 
          tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
      },

      exportCSV() {
        const messages = this.getMessages();
        if (messages.length === 0) {
          alert('No messages available to export.');
          return;
        }

        const headers = ['ID', 'Name', 'Email', 'Subject', 'Message', 'Date', 'Status', 'Starred'];
        const csvRows = [headers.join(',')];

        messages.forEach(m => {
          const row = [
            `"${m.id}"`,
            `"${(m.name || '').replace(/"/g, '""')}"`,
            `"${(m.email || '').replace(/"/g, '""')}"`,
            `"${(m.subject || '').replace(/"/g, '""')}"`,
            `"${(m.message || '').replace(/"/g, '""')}"`,
            `"${m.formattedDate || ''}"`,
            `"${m.status}"`,
            `"${m.starred}"`
          ];
          csvRows.push(row.join(','));
        });

        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contact_messages_database_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Database exported as CSV');
      },

      exportJSON() {
        const messages = this.getMessages();
        if (messages.length === 0) {
          alert('No messages available to export.');
          return;
        }

        const blob = new Blob([JSON.stringify(messages, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contact_messages_database_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Database exported as JSON');
      },

      showToast(message) {
        const existing = document.querySelector('.db-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'db-toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--cyber-green);"></i> ${message}`;
        document.body.appendChild(toast);

        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateY(20px)';
          toast.style.transition = 'all 0.3s ease';
          setTimeout(() => toast.remove(), 300);
        }, 2800);
      }
    };

