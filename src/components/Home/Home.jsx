import React from 'react';
import Title from '../Title';

const Home = () => {
  return (
    <main className="grid-container">
        <header>
            <h1>Architecture in the Modern Age</h1>
  
        </header>
      <article className="featured">
        <img src="src/assets/imgs/modern-arch.jpeg" alt="featured img" />
        <div>
          <h2>Pedro Pegenaute</h2>
          <p>
            The exterior experiments with a variety of approaches to concrete, including faceted, visually homogeneous
            modules and flat panels with exposed aggregate. Apertures either break the system with protruding bronze
            frames or hide behind modified, open-backed units. “While maintaining the overall opaque building volume,
            the objective of the façade was to still take advantage of the potential for interactions with the environs,
            the seasonality, and various qualities of light,”
          </p>
          <p>
            Hu says. “Viewed from a distance as a whole, the façade is read as a textural treatment, while closer
            encounters from various angles reveal the faceting and play on light and shadow.”
          </p>
        </div>
      </article>

      <article>
        <img src="src/assets/imgs/moder-arch2.webp" alt="article img" />
        <div>
          <h3>METAMORPHIC ARCHITECTURE</h3>
          <p>
            In September 2008 during the exhibition of Abitare il Tempo in Verona, Xaveer Claerhout and Barbara Van
            Biervliet introduced for the very first time the term : 'Metamorphic Architecture'. They also unveiled the
            ‘Kinetower’ and the first prototypes of metamorphic luminaires such as the ’New York lamp'. The ‘Kinetower’
            is the visual manifesto of their principle called ‘Metamorphism : towards a new kinetic architecture’.
          </p>
        </div>
      </article>

      <article>
        <img src="src/assets/imgs/modern-arch3.jpeg" alt="article img" />
        <div>
          <h3>CREATING A METAMORPHIC REALITY</h3>
          <p>
            The groundbreaking works embodying the principles of metamorphic art, architecture and design have earned
            Metamorphic Art Studio a distinguished place in the permanent collection of the prestigious Centre Pompidou
            in Paris. Currently a portion of their metamorphic work is on display in the fascinating exhibition 'un
            tiempo propio' at the Centre Pompidou of Malaga Spain still on view until October 15, 2023.
          </p>
        </div>
      </article>

      <article>
        <img src="src/assets/imgs/modern-arch4.jpeg" alt="article img" />
        <div>
          <h3>The Clear Blue</h3>
          <p>
            At the heart of the fascination of Metamorphic Art Studio lies the creation of an innovative, state-of-the-art
            building that intertwines sustainability, metamorphosis and a reverence for the rich spatial traditions found
            in Roman and Palladian villas. Periscope architecture goes beyond mere reflection—it empowers to shift reality
            itself. By seamlessly merging metamorphic architecture with multifunctional mirrors that double as screens,
            integrated as periscopes, the boundaries between virtual and physical realms dissolve harmoniously.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Home;
