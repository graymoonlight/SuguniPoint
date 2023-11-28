import React from 'react';
import Swipers from './Scripts/Swipers';
import Search from './Scripts/Search';
import Catalog from './Scripts/Catalog';

function Main() {
  return (
    <main className='main'>
      <Swipers />
      <section className='search-row'>
        <Search />
        <h3 className='searchTitle'>~WE HAVE <span><em>ALL</em></span> WHAT YOU WANT~</h3>
      </section>
      <Catalog />
    </main>
  );
}

export default Main;
