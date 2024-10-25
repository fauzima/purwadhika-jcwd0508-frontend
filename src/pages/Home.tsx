import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="absolute inset-0 place-content-center items-center max-w-screen-lg mx-auto px-5">
      <div className="flex flex-col justify-between text-center md:h-[60vh] h-[80vh]">
        <Link
          to={"/"}
          className="text-9xl text-gray-200 font-[Helvetica] font-bold tracking-tighter"
        >
          LOREM IPSUM
        </Link>
        <div className="text-gray-200 font-[Helvetica] font-bold tracking-tighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae
          praesentium sunt porro autem, esse nemo magni soluta nobis. Eveniet ex
          sapiente nulla animi! Aspernatur doloribus omnis adipisci sunt
          molestiae, culpa quisquam, ipsum aperiam optio natus, laudantium at
          possimus recusandae sequi inventore suscipit quas aliquam corporis
          quibusdam ipsam. Veritatis molestiae illo nam! Aut facere eius
          molestiae dolores ipsa suscipit quae tenetur, eum unde, amet iste
          aperiam, commodi ea? Ipsum eum illo vel iure animi dicta excepturi.
          Illo nemo iste perspiciatis officiis blanditiis possimus consectetur
          esse minus. Enim sed quod reiciendis voluptatem nesciunt, ea sunt modi
          repellat magnam non quidem nam.
        </div>
        <div className="flex justify-evenly items-center text-center">
          <Link
            to={"/about"}
            className="text-gray-200 font-[Helvetica] font-bold tracking-tighter"
          >
            ABOUT
          </Link>
          <Link
            to={"/contact"}
            className="text-gray-200 font-[Helvetica] font-bold tracking-tighter"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
