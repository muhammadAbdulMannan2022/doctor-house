import { HiClock, HiLocationMarker, HiPhone } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <div className="flex px-2 pb-10 justify-center flex-wrap gap-1">
      <Card
        icon={<HiClock className="w-10 h-10" />}
        title={"Opening Hours"}
        content={
          <p>
            Open 9.00 am to 5.00 pm <br /> Everyday
          </p>
        }
        bg={"#07332F"}
      />
      <Card
        icon={<HiLocationMarker className="w-10 h-10" />}
        title={"Our Locations"}
        content={
          <p>
            Dhanmondi 17, Dhaka <br /> -1200, Bangladesh
          </p>
        }
        bg={"#F7A582"}
      />
      <Card
        icon={<HiPhone className="w-10 h-10" />}
        title={"Contact Us"}
        content={
          <p>
            +88 02441 13 9 <br />
            +88 02441 13 9
          </p>
        }
        bg={"#07332F"}
      />
    </div>
  );
};
const Card = ({ icon, title, content, bg }) => {
  return (
    <div className={`bg-[${bg}] flex py-10 px-6 text-white rounded-md w-80`}>
      <div className="me-2">{icon}</div>
      <div>
        <h1 className="text-3xl mb-3">{title}</h1>
        <div>{content}</div>
      </div>
    </div>
  );
};
export default ContactInfo;
