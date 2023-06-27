import React from 'react'
import Footer from './Footer'
import Header from '../Header'
import T1 from '../Images for about page/T1.jpeg'
import T2 from '../Images for about page/T2.jpeg'

function AboutPage() {
  return (
    <>
      <Header />
      <main class="container mx-auto px-4 py-4 bg-white mb-3">
        <div class="flex flex-wrap -mx-4">

          <div class="w-full md:w-2/3 px-4">
            <h2 class="text-xl font-semibold mb-4">About Any Blogs</h2>
            <p class="text-gray-700 leading-loose">
              In the vast digital landscape of the internet, blogging has emerged as a popular medium
              for individuals and businesses to share their thoughts, expertise, and experiences with
              the world. Among the many blogging platforms available, one stands out as a vibrant hub
              for creative expression: Any Blogs.
            </p>
            <br />
            <p class="text-gray-700 leading-loose">
              Any Blogs is a dynamic and user-friendly website designed to empower bloggers of all levels,
              whether they are seasoned professionals or enthusiastic beginners. The platform provides a
              space where individuals can write, publish, and share their ideas, stories, and passions with
              a wide audience, fostering a sense of community and interaction.
            </p>
            <br />
            <p class="text-gray-700 leading-loose">
              Any Blogs boasts an intuitive and user-friendly interface, ensuring that anyone can navigate
              and utilize the platform with ease. From the moment you sign up, you'll be greeted by a clean
              and organized dashboard, offering a range of tools and options to enhance your blogging
              experience. With its simple yet powerful features, Any Blogs makes it easy to create.
            </p>
          </div>
          <div class="w-full md:w-1/3 px-4 py-4">
            <h2 class="text-xl font-semibold mb-3">Our Team</h2>
            <div class="mb-8">
              <img class="w-16 h-16 rounded-full  mx-36" src={T1} alt="Team Member" />
              <h3 class="text-lg font-medium -mt-14">Naveed Shaikh</h3>
              <p class="text-gray-700">Team Member-1</p>
            </div>
            <div>
              <img class="w-16 h-16 rounded-full mx-36" src={T2} alt="Team Member" />
              <h3 class="text-lg font-medium -mt-14">Ashray V B</h3>
              <p class="text-gray-700">Team Member-2</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
