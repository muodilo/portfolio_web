import React from 'react'
import { Link } from 'react-router-dom';

const SinglePost = () => {
  return (
    <div className='px-0 md:px-[60px] lg:px-[100px]'>
      <div className='pt-[70px] grid lg:grid-cols-4 grid-cols-1'>
        <div className='col-span-3 p-5 h-svh overflow-auto'>
          <Link to='/blog' className='btn btn-default '>Back</Link>
          <hr />
          <p className='text-center '>Category</p>
          <h1 className='text-center pt-5 md:text-[50px] text-[25px] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, animi.</h1>
          
          <div className='pt-5 shadow-2xl rounded-2xl'>
            <img src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className='rounded-2xl '/>
          </div>
          <div className='pt-5'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore consectetur voluptas hic minus vitae quam cumque, sed natus odio. Iusto quam voluptates qui. Non ad quis esse a natus eaque incidunt excepturi, aliquam inventore placeat ipsam illo et totam eveniet molestias, reiciendis, autem animi error officiis veniam aliquid suscipit odio tempora? A ad corporis voluptatum doloremque iste delectus iusto optio veniam consequuntur voluptas, ut qui dolorum nulla, debitis fugit? Alias facilis iusto blanditiis reiciendis voluptatum esse ratione nisi in, iure totam odit quo itaque, vitae accusamus saepe. Fugiat enim ut fugit aut nobis nemo qui aperiam quam quod, ipsa, magnam vel. Quae aliquid, tempora assumenda quas esse animi doloribus, quam vitae, maxime optio soluta deserunt nostrum laborum deleniti architecto ipsa est eum laudantium eos reiciendis eaque quis quibusdam delectus ab. Dicta, mollitia nulla laborum assumenda recusandae, voluptatibus neque ipsum modi praesentium nobis hic qui, temporibus repellat sed incidunt fugit cupiditate aut culpa beatae explicabo doloremque soluta maiores eaque. Possimus explicabo natus numquam unde adipisci quas suscipit in, architecto, laborum dolore quis sapiente, consequuntur quisquam sed error quasi. Veritatis corporis maxime dignissimos animi quas quis quibusdam, vitae sed velit minus deleniti, exercitationem adipisci dolor eius omnis hic minima recusandae nisi voluptatem? A laboriosam repellendus odio aut pariatur quo, quaerat saepe totam provident, mollitia necessitatibus voluptates obcaecati officia minus. Reiciendis consequatur eaque cumque aspernatur nam atque ad ullam ab animi commodi consequuntur quas repellat tempore, eveniet vitae non maxime natus? Quasi earum repudiandae inventore, alias, atque mollitia nam, laborum similique praesentium vero tempore labore cumque. Natus, eaque consequatur vel blanditiis nesciunt laudantium nisi, nostrum voluptas earum iste molestias et, incidunt officia adipisci nihil? Quasi est deserunt iure doloribus aperiam maiores quis cupiditate laudantium ducimus tenetur ipsa quas similique dolorem, distinctio quos aut odio rem error iste sed labore necessitatibus nemo unde! Ut.</p>
          </div>
        </div>

        <div className='px-5 pt-12'>
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mb-5">RELATED POSTS</span>

            <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50 mb-2">
          
                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                <p className="leading-relaxed">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>

            </div>
            <hr />
          
            
            <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50">
          
                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                <p className="leading-relaxed">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>

            </div>
            <hr />
          
            

        </div>



      </div>
    </div>
  )
}

export default SinglePost
