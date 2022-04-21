import React from "react";

const ReviewSection = () => {
  return (
    <div className="md:px-20 px-5 mx-auto pt-20 ">
      <h1 className="text-center text-5xl pb-8 text-[#26ABA3]">What Our Clients Says</h1>
      <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full overflow-hidden ">
          <div class="carousel-item active relative float-left w-full h-[40rem]">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="block w-[30rem] rounded-[50%] p-5 mx-auto "
              alt="Wild Landscape"
            />
            <div class="carousel-caption md:block  text-center">
              <p className="text-3xl font-semibold text-slate-500">
                “I have a lot more confidence going forward that I have the right doctors and the right
                treatment plan.”
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full h-[40rem]">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="block w-[30rem] rounded-[50%] p-5 mx-auto "
              alt="Camera"
            />
            <div class="carousel-caption block text-center">
              <p className="text-3xl font-semibold text-slate-500">
                “Their goal was my best care. I feel like Talkings Minds Specialist helped save my life.”
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full h-[40rem]">
            <img
              src="https://www.teahub.io/photos/full/236-2365981_happy-couple.jpg"
              class="block w-[30rem] rounded-[50%] p-5 mx-auto "
              alt="Exotic Fruits"
            />
            <div class="carousel-caption block  text-center">
              <p className="text-3xl font-semibold text-slate-500">
                “Talking Minds made all the difference in my decision on what to do for course of treatment.”.
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full h-[40rem]">
            <img
              src="https://devotedguardians.com/wp-content/uploads/2021/04/at-what-point-is-a-person-considered-elderly-980x400.jpg"
              class="block w-[30rem] rounded-[50%] p-5 mx-auto "
              alt="Exotic Fruits"
            />
            <div class="carousel-caption block text-center">
              <p className="text-3xl font-semibold text-slate-500">
                “If I hadn't gone to Best Doctors, I could still be waiting for a diagnosis right now.... Now
                I know what's going on and I have a name for it. Best Doctors really saved me.”
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat " aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
