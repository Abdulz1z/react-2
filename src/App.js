/** @format */

import "./App.css";
import "./germany_flag";

function App() {
   return (
      <div className="">
         <div class="conatainer">
            <header id="header">
               <nav class="nav">
                  <div class="nav_card">
                     <div class="logo">
                        <h1 class="text">
                           Where in the world?
                        </h1>
                     </div>
                     <div class="dark">
                        <button class="btn">
                           Dark mode
                        </button>
                     </div>
                  </div>
                  <hr />
                  <div class="navbar">
                     <div class="input">
                        <form
                           autocomplete="off"
                           class="form"
                        >
                           <input
                              type="search"
                              placeholder="Search for a country…"
                              id="search"
                           />
                        </form>
                     </div>
                     <div class="filter">
                        <select name="filter" id="filter">
                           <option value="Region">
                              Filter by Region
                           </option>
                           <option value="Afrika">
                              Afrika
                           </option>
                           <option value="Amerca">
                              Amerca
                           </option>
                           <option value="Asia">
                              Asia
                           </option>
                           <option value="Europe">
                              Europe
                           </option>
                           <option value="Oceania">
                              Oceania
                           </option>
                        </select>
                     </div>
                  </div>
               </nav>
            </header>
            <main>
               <section>
                  <img src="./germany_flag" alt="" />
                  <h3 className="title">Germany</h3>
                  <p className="text">
                     Population: 81,770,900
                  </p>
                  <p>Region: Europe</p>
                  <p>Capital: Berlin</p>git
               </section>
            </main>
         </div>
      </div>
   );
}

export default App;
