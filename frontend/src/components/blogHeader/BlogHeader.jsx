

const BlogHeader = () => {
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px]">
      <div className="bg-blue-100/50 pt-[70px] rounded-lg text-center pt-40 pb-20">
        <div>
          <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold mb-5 text-blue-900 animate-in fade-in zoom-in duration-300">Welcome to my blog</h1>
          <p className="text-xl mb-6 animate-in fade-in zoom-in duration-300">Join me on my journey as I share my insights and experiences on <br /> web development, business, and content creation.</p>
          <form className="animate-in fade-in zoom-in duration-300">
            <input type="text" placeholder="Enter your email" className="input input-bordered  w-full max-w-xs" />
            <button className="btn btn-neutral ms-1 mt-2 md:mt-0">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BlogHeader
