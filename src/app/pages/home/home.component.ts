import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  template: `
    <div>
      <section class="flex p-20 bg-[#f2f0f1]  ">
        <div class="w-[50%] flex flex-col gap-10">
          <h1 class="font-bold text-6xl uppercase">
            find clothes <br />
            that matches <br />
            your stlyle
          </h1>
          <p class="font-light ">
            browes through our diverse range of crafted garments,designed to
            bring out your individuality and cater to your sense of style
          </p>
          <!-- <app-button
            type="button"
            label="shop now"
            variant="secondary"
            size="small"
          /> -->

          <app-button type="button" variant="primary" size="medium"
            >shop now
          </app-button>

          <div class="flex gap-10">
            <div>
              <h1 class="font-bold text-4xl">200+</h1>
              <p class="font-light capitalize">international brands</p>
            </div>
            <div>
              <h1 class="font-bold text-4xl">2,000+</h1>
              <p class="font-light capitalize">high-quality products</p>
            </div>
            <div>
              <h1 class="font-bold text-4xl">30,000+</h1>
              <p class="font-light capitalize">happy customers</p>
            </div>
          </div>
        </div>

        <div>
          <img src="./" alt="" />
        </div>
      </section>

      <!--  -->
      <section>
        <ul
          class="flex justify-between uppercase text-2xl font-bold bg-black text-white p-5"
        >
          <li>versace</li>
          <li>gucci</li>
          <li>zara</li>
          <li>prada</li>
          <li>calvin klein</li>
        </ul>
      </section>

      <!--  -->
      <section class="p-10 flex flex-col items-center">
        <h1 class="font-bold text-3xl uppercase">new arrivals</h1>
        <div></div>
        <app-button type="button" variant="secondary" size="medium"
          >view all
        </app-button>
      </section>
      <hr />
      <section class="p-10 flex flex-col items-center">
        <h1 class="font-bold text-3xl uppercase">top sellers</h1>
        <div></div>
        <app-button type="button" variant="secondary" size="medium"
          >view all
        </app-button>
      </section>

      <!--  -->
      <section class="px-20 flex flex-col">
        <div class="bg-[#f2f0f1] flex flex-col rounded-xl gap-5 p-10 w-full">
          <h1 class="font-bold text-3xl uppercase flex justify-center">
            browse by dress style
          </h1>
          <section class=" grid gap-5 w-full ">
            <div class="flex w-full gap-5">
              <div class="rounded-xl bg-white h-[250px] p-5 w-[30%]">
                <h1 class="font-bold text-3xl ">Casual</h1>
                <img src="" alt="" />
              </div>
              <div class="rounded-xl bg-white h-[250px] p-5 w-[70%] ">
                <h1 class="font-bold text-3xl ">Formal</h1>
                <img src="" alt="" />
              </div>
            </div>
            <div class="flex w-full gap-5">
              <div class="rounded-xl bg-white h-[250px] p-5 w-[70%] ">
                <h1 class="font-bold text-3xl ">Party</h1>
                <img src="" alt="" />
              </div>
              <div class="rounded-xl bg-white h-[250px] p-5 w-[30%] ">
                <h1 class="font-bold text-3xl ">Gym</h1>
                <img src="" alt="" />
              </div>
            </div>
          </section>
        </div>
      </section>

      <!--  -->
      <section class="px-20 py-10">
        <div class="flex justify-between">
          <h1 class="font-bold text-3xl uppercase">our happy customers</h1>
          <div class="font-bold text-2xl"><- -></div>
        </div>
        <div></div>
      </section>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
