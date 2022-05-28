import React from 'react';

const OurNewProduct = () => {
    return (
      <section className='mt-28'>
         <div className='text-center  text-4xl text-black font-bold'>
         <h2 className='uppercase'>Our New Collection</h2>
         </div>
            <div class="hero mt-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="h-96 carousel carousel-vertical rounded-box">
        <div class="carousel-item h-full">
    <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='' />
  </div> 
        <div class="carousel-item h-full">

    <img src="https://images.unsplash.com/photo-1631553126875-88a6f19b90c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"alt='' />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://images.unsplash.com/photo-1494083306499-e22e4a457632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt='' />
  </div> 
 
  
  <div class="carousel-item h-full">
    <img src="https://images.unsplash.com/photo-1588382472578-8d8b337b277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='' />
  </div> 
  
  
 
</div>
          <div>
            <h1 class="text-5xl font-bold">Our New Expansive Product!</h1>
         
           <h4 className='text-red-500 mt-5'>Scroll Down The Picture For More !</h4>
          </div>
        </div>
      </div>
      </section>
    );
};

export default OurNewProduct;