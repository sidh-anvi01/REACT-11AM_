// import React, { Component } from 'react'

// export class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default App





// import React from 'react'

// export default function App() {
//   return (
//     <div>

//     </div>
//   )
// }



// import React from 'react'

// function App() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {
  console.log("hello react ")
  return (
    <div>
      <h1 style={{ color: 'red' }}>hello react </h1>
      <h1>hello react </h1>
      <h1>hello react </h1>
      <h1>hello react </h1>
      <h1>hello react </h1>
      <h1>hello react </h1>
      <h1>hello react </h1>
      <h1>hello react </h1>

      <div style={{
        height: 100, width: 100,

        backgroundColor: "red"
      }}></div>
<section className="card" style={{ maxWidth: 320 }}>
  <img src="https://plus.unsplash.com/premium_photo-1795662378586-b7d16dc69810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <a href="#" className="btn-solid theme-primary">
      Go somewhere
    </a>
  </div>
</section>





{/* carousel */}


<div id="carouselExampleFade" className="carousel carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://plus.unsplash.com/premium_photo-1795662378586-b7d16dc69810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="d-block w-100 rounded-5" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1795662378586-b7d16dc69810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="d-block w-100 rounded-5" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1795662378586-b7d16dc69810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="d-block w-100 rounded-5" alt="..." />
    </div>
  </div>
  <div>
    <button
      className="btn-icon btn-sm"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span className="carousel-icon-prev" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="btn-icon btn-sm"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span className="carousel-icon-next" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>



    </div>
  )
}

export default App

