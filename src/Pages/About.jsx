import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          PixelMart is a digital marketplace dedicated to providing high-quality, ready-to-use website templates for developers, designers, and businesses. Our mission is to simplify web development by offering beautifully designed, responsive, and easily customizable templates. Whether you're creating a portfolio, an online store, or a business website, PixelMart helps you launch faster with professional-grade designs.
          </p>
          <p>
          We believe in making web design accessible to everyone, from beginners to experienced developers. With instant downloads, seamless integration, and a growing collection of templates, PixelMart is your go-to destination for building stunning websites effortlessly. 
          </p>
          {/* <b className="text-gray-800">Our Mission</b>
          <p>
            {' '}
            Our Mission Our mission of Forever is to empower customers with
            choice, convenience, and confidence. We`\re dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p> */}
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in offering only the highest quality products that
            meet our stringent standards for performance, and value.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Our user-friendly website make it easy to browse,
            compare, and purchase products on the go.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">
            Our dedicated team of customer service representatives is available
            around the clock to assist you with any queries or concerns you may
            have.{' '}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
