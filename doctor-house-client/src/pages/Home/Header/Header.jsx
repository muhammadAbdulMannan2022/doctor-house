import Navbar from "../../shared/Navbar";

const Header = () => {
  return (
    <div
      className={`bg-[url("https://i.ibb.co/th7cVtB/doctor-Header-Bg.jpg")] bg-center bg-cover bg-no-repeat`}
    >
      <Navbar />
      <div className="flex py-16 text-white px-10 items-center gap-4 flex-col-reverse md:flex-row">
        <div className="left w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold">
            Your Best Medical <br /> Help Center
          </h1>
          <p className="text-sm my-5">
            Delivering Excellence in Medical Care: Your Trusted Center for{" "}
            <br />
            Comprehensive Healthcare Solutions.
          </p>
          <button className="py-2 px-4 text-white font-bold rounded-md bg-[#F7A582]">
            All Service
          </button>
        </div>
        <div className="right w-full md:w-1/2">
          <img
            className="w-full"
            src="https://i.ibb.co/nkw1ks9/header-Img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
