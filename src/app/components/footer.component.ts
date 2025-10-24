import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Builder App</h3>
            <p class="footer-description">
              Build amazing experiences with our powerful content management platform.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Product</h4>
            <ul class="footer-links">
              <li><a routerLink="/features" class="footer-link">Features</a></li>
              <li><a routerLink="/pricing" class="footer-link">Pricing</a></li>
              <li><a routerLink="/integrations" class="footer-link">Integrations</a></li>
              <li><a routerLink="/api" class="footer-link">API</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-links">
              <li><a routerLink="/about" class="footer-link">About</a></li>
              <li><a routerLink="/careers" class="footer-link">Careers</a></li>
              <li><a routerLink="/blog" class="footer-link">Blog</a></li>
              <li><a routerLink="/press" class="footer-link">Press</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-heading">Support</h4>
            <ul class="footer-links">
              <li><a routerLink="/help" class="footer-link">Help Center</a></li>
              <li><a routerLink="/contact" class="footer-link">Contact</a></li>
              <li><a routerLink="/status" class="footer-link">Status</a></li>
              <li><a routerLink="/security" class="footer-link">Security</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              © {{ currentYear }} Builder App. All rights reserved.
            </p>
            <div class="footer-bottom-links">
              <a routerLink="/privacy" class="footer-bottom-link">Privacy Policy</a>
              <a routerLink="/terms" class="footer-bottom-link">Terms of Service</a>
              <a routerLink="/cookies" class="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1a1a1a;
      color: #fff;
      padding: 3rem 0 1rem;
      margin-top: auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section:first-child {
      max-width: 300px;
    }

    .footer-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1976d2;
      margin: 0 0 1rem 0;
    }

    .footer-description {
      color: #ccc;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #333;
      border-radius: 50%;
      color: #fff;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .social-link:hover {
      background: #1976d2;
      transform: translateY(-2px);
    }

    .footer-heading {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: #fff;
    }

    .footer-links {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-link {
      color: #ccc;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-link:hover {
      color: #1976d2;
    }

    .footer-bottom {
      border-top: 1px solid #333;
      padding-top: 1.5rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright {
      color: #999;
      margin: 0;
    }

    .footer-bottom-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-bottom-link {
      color: #999;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s ease;
    }

    .footer-bottom-link:hover {
      color: #1976d2;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .footer-section:first-child {
        max-width: none;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .footer-bottom-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
