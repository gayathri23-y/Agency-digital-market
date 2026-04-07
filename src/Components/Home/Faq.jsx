import React from 'react'

const Faq = () => {
    const faqdata=[
        {
            question:"How long does it take to see results?",
            answer:"Typically, you'll start seeing improvements within 30-60 days, with significant results after 3-6 months depending on your goals and strategy.",
        },
        {
            question:"What's included in your reporting?",
            answer:"We provide comprehensive monthly reports including traffic analytics, conversion tracking, campaign performance, and actionable insights.",
        },
        {
            question:"Do you work with small businesses?",
            answer:"Absolutely! We work with businesses of all sizes, from startups to enterprise companies, tailoring our strategies to fit your budget and goals."
        },
        {
            question:"Can you work with our existing tools?",
            answer:"Yes, we integrate with most popular marketing tools and platforms, or we can recommend the best solutions for your specific needs.",
        },
    ]

  return (
    <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20'>
        <div className='flex flex-col gap-6'>
            
            <h1 className='font-normal text-[20px] sm:text-[22px] md:text-[24px] 
            leading-[28px] md:leading-[32px] text-[#0A0A0A] text-center'>
                Frequently Asked Questions
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
                {faqdata.map((item,index)=>(
                    <div key={index} className='w-full'>
                        
                        <h3 className='text-[16px] sm:text-[17px] md:text-[18px] 
                        leading-[24px] md:leading-[28px] text-[#0A0A0A] font-normal'>
                            {item.question}
                        </h3>

                        <p className='text-[13px] sm:text-[14px] 
                        leading-[20px] text-[#717182] mt-2'>
                            {item.answer}
                        </p>

                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Faq