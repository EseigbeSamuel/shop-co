import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div>
      <section class="px-20 relative top-[70px]">
        <div class="bg-black rounded-xl flex justify-between items-center p-10">
          <h1 class="font-bold text-3xl uppercase text-white">
            stay up to date about <br />
            our latest offers
          </h1>
          <div class="flex flex-col gap-3">
            <input
              type="text"
              placeholder="enter your email address"
              class="bg-white text-gray-300 rounded-full w-[300px] p-2 text-center "
            />
            <button class="bg-white rounded-full w-[300px] p-2">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <section class=" bg-[#f2f0f1] flex gap-5 justify-between px-20 py-10">
        <div class="flex flex-col gap-3">
          <h1 class="font-bold text-4xl uppercase">shop.co</h1>
          <p class="text-gray-600">
            We have the clothes that suit your style and <br />
            which your're proud to wear. From women to men
          </p>
          <div>icon icon icon icon</div>
        </div>
        <div>
          <h2 class="font-semibold text-xl uppercase">company</h2>
          <ul class="capitalize gap-2 flex flex-col text-gray-600 ">
            <li>about</li>
            <li>features</li>
            <li>works</li>
            <li>careers</li>
          </ul>
        </div>
        <div>
          <h2 class="font-semibold text-xl uppercase">help</h2>
          <ul class="capitalize gap-2 flex flex-col text-gray-600 ">
            <li>customer service</li>
            <li>delivery details</li>
            <li>terms & condition</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div>
          <h2 class="font-semibold text-xl uppercase">faq</h2>
          <ul class="capitalize gap-2 flex flex-col text-gray-600 ">
            <li>account</li>
            <li>manage deliveries</li>
            <li>orders</li>
            <li>payment</li>
          </ul>
        </div>
        <div>
          <h2 class="font-semibold text-xl uppercase">resources</h2>
          <ul class="capitalize gap-2 flex flex-col text-gray-600 ">
            <li>free ebook</li>
            <li>developmental tutorial</li>
            <li>how to - blog</li>
            <li>youtube playlist</li>
          </ul>
        </div>
      </section>
      <hr />
      <section class=" bg-gray-100 flex gap-5 justify-between px-20 py-5">
        <p>shop.co &#64; 2000-2025,all rights reserved</p>
      </section>
    </div>
  `,
  styles: ``,
})
export class FooterComponent {}
