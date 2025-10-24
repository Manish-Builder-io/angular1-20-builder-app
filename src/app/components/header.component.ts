import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a routerLink="/" class="logo-link">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#1976d2"/>
                <path d="M20 8L26 14H22V20H18V14H14L20 8Z" fill="white"/>
                <path d="M20 32L14 26H18V20H22V26H26L20 32Z" fill="white"/>
              </svg>
              <span class="logo-text">Builder App</span>
            </a>
          </div>
          
          <nav class="nav">
            <ul class="nav-list">
              <li class="nav-item">
                <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a routerLink="/products" routerLinkActive="active" class="nav-link">Products</a>
              </li>
              <li class="nav-item">
                <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          <div class="header-actions">
            <button class="btn btn-outline">Sign In</button>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }

    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #1976d2;
      font-weight: 600;
      font-size: 1.25rem;
    }

    .logo-text {
      margin-left: 0.5rem;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-item {
      margin: 0;
    }

    .nav-link {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem 0;
      transition: color 0.2s ease;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #1976d2;
    }

    .header-actions {
      display: flex;
      gap: 1rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-weight: 500;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-outline {
      background: transparent;
      color: #1976d2;
      border: 1px solid #1976d2;
    }

    .btn-outline:hover {
      background: #1976d2;
      color: white;
    }

    .btn-primary {
      background: #1976d2;
      color: white;
    }

    .btn-primary:hover {
      background: #1565c0;
    }

    @media (max-width: 768px) {
      .nav {
        display: none;
      }
      
      .header-actions {
        gap: 0.5rem;
      }
      
      .btn {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
      }
    }
  `]
})
export class HeaderComponent {}
