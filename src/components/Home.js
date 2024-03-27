// import React, { useContext } from 'react'
// import Context from '../context/Context'
// import SingleProduct from './SingleProduct'
// import './styles.css'

// const Home = () => {
//     const data = useContext(Context)
//     return (
//         <div className='home'>
//             <div>
//                 {

//                     data.state.products.map((prod) => {
//                         //return <li>{p.productName}{'  '}{p.price}</li>
//                         return <SingleProduct prod={prod} />
//                     })}
//             </div>


//         </div>
//     )
// }
// export default Home


import React, { useContext } from 'react'
import Context from '../context/Context'
import SingleProduct from './SingleProduct'
import './styles.css'
import Filter from './Filter'

const Home = () => {
    const data = useContext(Context)
    return (
        <div className='home'>
            <Filter/>
            <div className='productContainer'>
                {

                    data.state.products.map((prod) => {
                        return <SingleProduct prod={prod} />
                    })
                }


            </div>
        </div>
    )
}

export default Home

