import Image from "next/image";

const testimonials = [
  {
    opening: "Vijay really exceeded our expectations, especially with his enthusiasm and the amount of work he put into his designs. ",
    continuation: "He also added many of his own feature improvements within time & development constraints, which we couldn't have thought of ourselves.",
    closing: "We are very happy with the final result and will be working with Vijay for the rest of our project!",
    author: "Dan Pugsley",
    role: "Cofounder & CEO Whoflex",
    initials: "DP",
  },
  {
    opening: "I love Vijay's work and have enjoyed working with him. ",
    continuation: "He was very responsive to suggestions and made timely adjustments. His style was a great fit for me and my business. I highly recommend working with him.",
    author: "Vivek Mishra",
    role: "Co-Founder and Managing Director",
    initials: "VM",
    avatar: "/assets/testimonials/vivek-mishra.png",
  },
  {
    opening: "Great collaboration with Vijay! ",
    continuation: "Great experience with reliable communication, fast iteration, and implementing feedback quickly. Thank you for the hard work dedicated to our project!",
    author: "Kavya Menon",
    role: "Freelance Developer",
    initials: "KM",
  },
] as const;

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <figure className="m-0 flex min-w-0 flex-col overflow-hidden rounded-xl bg-[#19191b]">
      <blockquote className="m-0 rounded-xl border border-[#e9e9e9]/10 bg-[#fafafa]/5 p-6 text-[16px] leading-6 tracking-[-0.3px]">
        <p className="m-0">
          <span className="text-white">“{testimonial.opening}</span>
          <span className="text-[#a6a6a6]">{testimonial.continuation}{!('closing' in testimonial) && '”'}</span>
        </p>
        {'closing' in testimonial && <p className="mt-4 mb-0 text-[#a6a6a6]">{testimonial.closing}”</p>}
      </blockquote>
      <figcaption className="flex items-center gap-4 px-4 py-3">
        {"avatar" in testimonial ? (
          <Image
            alt=""
            className="size-10 shrink-0 rounded-lg object-cover"
            height={40}
            src={testimonial.avatar}
            width={40}
          />
        ) : (
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#2a2a2c] text-[13px] font-medium text-[#ededed]" aria-hidden="true">{testimonial.initials}</span>
        )}
        <span className="flex flex-col">
          <span className="text-[16px] leading-6 tracking-[-0.27px] text-white">{testimonial.author}</span>
          <span className="text-[14px] leading-5 tracking-[-0.08px] text-[#545454]">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function HomeTestimonials() {
  return (
    <section
      className="relative mx-auto w-full max-w-[1128px] py-[100px] max-[760px]:py-20"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute inset-x-0 top-10 flex h-9 items-center max-[760px]:top-6">
        <span className="h-px w-12 shrink-0 bg-[#272729] max-[600px]:w-6" aria-hidden="true" />
        <span className="flex h-9 shrink-0 items-center gap-2 rounded-full border border-[#272729] bg-white/5 px-[15px] text-[13px] leading-[19px] font-medium text-[#ededed]">
          <span className="flex size-5 shrink-0 items-center justify-center" aria-hidden="true">
            <Image src="/assets/figma-home/testimonial-label.svg" alt="" width={14.5834} height={17.9169} unoptimized />
          </span>
          Testimonials
        </span>
        <span className="h-px flex-1 bg-[#272729]" aria-hidden="true" />
      </div>

      <div className="mx-auto w-full max-w-[1000px] max-[1048px]:px-6">
        <h2
          className="m-0 text-[32px] leading-10 font-medium tracking-[-1.3px] text-white max-[600px]:text-[28px] max-[600px]:leading-9"
          id="testimonials-title"
        >
          Words from people, I've worked with.
        </h2>

        <div className="mt-12 grid grid-cols-2 items-start gap-4 max-[900px]:grid-cols-1">
          <TestimonialCard testimonial={testimonials[0]} />
          <div className="flex min-w-0 flex-col gap-4">
            {testimonials.slice(1).map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.author} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
