import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <div
      class="px-20 py-4 border-2 rounded-lg shadow-xl flex items-center justify-between"
    >
      <h1 class="text-2xl font-bold">SHOP.CO</h1>
      <ul class="flex capitalize gap-5 cursor-pointer ">
        <li>shop</li>
        <li>on sale</li>
        <li>new arrivals</li>
        <li>brands</li>
      </ul>
      <div class="w-[40%]">
        <input
          type="search"
          class="rounded-full bg-gray-300 p-2 w-full"
          placeholder="search for products..."
        />
      </div>
      <div>icons icons</div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {}
