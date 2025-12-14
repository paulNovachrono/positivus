import { ArrowUpRight } from "lucide-react";
import StudyText from "./StudyText";

const CaseStudies = () => {
  return (
    <section className="w-full flex flex-col px-10 md:px-40 md:my-30 mt-10 ">
      <StudyText />
      <div className="w-full bg-[#191A23] md:px-12 md:py-15 p-10 mt-17 rounded-4xl md:flex md:flex-row md:items-center md:justify-between flex flex-col items-center gap-5 text-white">
        <div className="flex flex-col gap-4 max-w-[400px]" id="studyInfo">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center gap-4 text-(--accGreen) ">
            <p className="text-lg">Case Info</p>
            <button>
              <ArrowUpRight size="20" />
            </button>
          </div>
        </div>
        <hr class="border-t border-white md:rotate-90 rotate-0 w-full md:w-35 mx-auto" />
        <div className="flex flex-col gap-4 max-w-[400px]" id="studyInfo">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex items-center gap-4 text-(--accGreen) ">
            <p className="text-lg">Case Info</p>
            <button>
              <ArrowUpRight size="20" />
            </button>
          </div>
        </div>
        <hr class="border-t border-white md:rotate-90 rotate-0 w-full md:w-35 mx-auto" />
        <div className="flex flex-col gap-4 max-w-[400px]" id="studyInfo">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex items-center gap-4 text-(--accGreen) ">
            <p className="text-lg">Case Info</p>
            <button>
              <ArrowUpRight size="20" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
