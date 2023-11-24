import Title from "../../Shared/Title";
import { CgGym } from "react-icons/cg";
import { SiOpenaigym } from "react-icons/si";
import { MdSportsGymnastics } from "react-icons/md";

const Features = () => {
    return (
        <div>
            <section className="my-32 text-center">
    <Title heading={"Our's fabulous features"}></Title>

    <div className="grid lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-[#f2f2df]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-[#193e51] shadow-md text-3xl">
            
              <CgGym></CgGym>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Muscle Sculptor</h5>
            <p>
            Unleash your inner strength with Muscle Sculptor, a specialized bodybuilding workout series. Access targeted exercises designed to build and define muscle mass. Whether you are a beginner or advanced lifter, sculpt your physique with guided routines focused on strength and hypertrophy.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-[#f2f2df]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-[#193e51] shadow-md text-3xl">
             <SiOpenaigym></SiOpenaigym>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold"> Serenity Asanas</h5>
            <p>
            Immerse yourself in the art of classic yoga with Serenity Asanas. Our series of timeless yoga practices emphasizes balance, flexibility, and mindfulness. From calming meditation sessions to empowering poses, discover the transformative power of traditional yoga tailored for all skill levels.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="block h-full rounded-lg bg-[#f2f2df]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-[#193e51] shadow-md text-3xl">
             <MdSportsGymnastics></MdSportsGymnastics>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">PowerLift Pro</h5>
            <p>
            Take your strength to new heights with PowerLift Pro. This feature offers powerlifting-focused programs, incorporating squats, deadlifts, and bench presses. Elevate your powerlifting game with personalized routines crafted for optimal strength gains.
            </p>
          </div>
        </div>
      </div>
    </div>
            </section>
            <section className="mb-32 text-center">
    

    <div className="grid lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-[#f2f2df]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-[#193e51] shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Yoga for Flexibility</h5>
            <p>
            Find balance and enhance flexibility with ZenFlex Bliss, our yoga feature dedicated to improving mobility and flexibility. Experience a harmonious blend of poses and stretches designed to promote relaxation, reduce tension, and increase overall flexibility.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg bg-[#f2f2df]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-[#193e51] shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Bodybuilders Nutrition Guide</h5>
            <p>
            Fuel your bodybuilding journey with NutriFlex Pro, a comprehensive nutrition guide tailored for bodybuilders. Access expert advice on macronutrient ratios, meal planning, and supplementation to optimize your nutrition and support muscle growth.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="block h-full rounded-lg bg-[#f2f2df]">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-[#193e51] shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Yoga for Recovery</h5>
            <p>
            Enhance recovery and promote overall well-being with Rejuvenate Yoga Flow. This feature incorporates yoga sequences specifically crafted to aid muscle recovery, reduce soreness, and improve flexibility. Immerse yourself in soothing practices that complement your bodybuilding journey.
            </p>
          </div>
        </div>
      </div>
    </div>
            </section>
        </div>
    );
};

export default Features;