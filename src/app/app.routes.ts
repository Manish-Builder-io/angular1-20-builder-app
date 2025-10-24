import { Routes } from '@angular/router';

import { BuilderPage } from "./components/builder-page.component";

export const routes: Routes = [{
  path: "**",
  component: BuilderPage,
  data: {
    products: [
      { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', inStock: true, image: 'https://cdn.builder.io/api/v1/image/assets%2Fdb60bf3db7fa4db7be81ef05b72bd720%2F672ab2f40e7a45b68d65a5c42ed8971f' },
      { id: 2, name: 'Smart Watch', price: 199.99, category: 'Electronics', inStock: true, image: 'https://cdn.builder.io/api/v1/image/assets%2Fdb60bf3db7fa4db7be81ef05b72bd720%2Fe2f029aae05144f0ad4fa03dae13f81c' },
      { id: 3, name: 'Coffee Maker', price: 79.99, category: 'Home', inStock: false, image: 'https://cdn.builder.io/api/v1/image/assets%2Fdb60bf3db7fa4db7be81ef05b72bd720%2Fb094eb737bdd487c8a5159fea7500ecc' },
      { id: 4, name: 'Running Shoes', price: 129.99, category: 'Sports', inStock: true, image: 'https://cdn.builder.io/api/v1/image/assets%2Fdb60bf3db7fa4db7be81ef05b72bd720%2F0f3319a7a1c443198fbf4814a4d3caca' }
    ],
    user: { 
      name: 'John Doe', 
      email: 'john@example.com',
      isLoggedIn: true,
      preferences: { currency: 'USD', theme: 'light' }
    },
    cart: { 
      itemCount: 2, 
      total: 299.98,
      items: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 1 }
      ]
    },
    siteSettings: {
      currency: 'USD',
      language: 'en',
      theme: 'light'
    }
  }
}];