import { useState } from 'react'
import reactLogo from './assets/react.svg'
import about from './assets/b13-decor.jpg'
import decor from './assets/henry-co-3coKbdfnAFg-unsplash.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Companies from './components/Companies'
import roof from './assets/roof.svg'
import wall from './assets/wall.svg'
import home from './assets/home.svg'
import expret from './assets/portrait-man-having-great-time.jpg'
import paint from "./assets/man-painting-wall-with-paint-roll.jpg"
import repair from "./assets/home-repair-svgrepo-com.svg"
import course from "./assets/online-education-elearning-training-video-course-laptop-svgrepo-com.svg"
import person from "./assets/business-person-to-guide-right-hand-svgrepo-com.svg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='relative h-[200vh]'>

      <Header/>
      <section className="landing z-0 relative grid justify-center items-center h-[100vh] w-[98%] mt-[2vh] rounded-[2rem]">
        <div className="landing-content text-center *:mx-auto">
        <h1 className='font-[750]  text-[4.5rem]  text-blue-950 max-w-[1100px]'>جدد منزلك بأناقة:خدمات الديكور, التصميم والطلاء باحتلاافية</h1> 
        <p className='max-w-[800px] mt-6 text-xl text-gray-900 font-medium '>في شركتنا، نجعل منازل أحلامكم حقيقة. نقدم خدمات الديكور والطلاء بأعلى معايير الجودة والاحترافية، لنضفي لمسة جمالية وفنية على كل زاوية من زوايا منزلكم. دعوا فريقنا من الخبراء يحول مساحتكم إلى واحة من الأناقة والراحة."</p>
        <span className='absolute bg-white/55 rounded-full backdrop-blur-3xl px-3 py-2 right-10 bottom-10 font-bold text-lg'>+2130656385441</span>

        <button className='bg-blue-700 block mt-8 w-fit mx-auto text-white px-8 py-3 rounded-full'>اطلب الان</button>
        </div>
      </section>
      <Companies/>
      <section className="about-us w-[98%] rounded-3xl text-black py-16 bg-white-citrine">
        <div className="container text-center">
          <h2 className='text-6xl mt-4 text-black mb-10 heading font-bold'>من نحن؟</h2>
          <p className='font-semibold text-black text-lg'>نحن شركة رائدة في مجال خدمات الديكور وطلاء المنازل، نسعى لتحويل رؤى عملائنا إلى واقع ملموس من خلال تصاميم مبتكرة وحلول طلاء احترافية. بفضل فريقنا المتخصص وشغفنا بالتفاصيل، نقدم تجربة متميزة تضمن لكم مساحات معيشية تعكس ذوقكم الخاص وأسلوب حياتكم. نلتزم بأعلى معايير الجودة والتميز لضمان رضاكم الكامل</p>
          <img className='w-full mt-20 rounded-2xl' src={decor} alt="" />
          <h3 className='text-right  text-5xl py-10 pb-6 font-bold'> هدفنا</h3>
          <p className='text-black font-medium text-xl text-right'>هدفنا هو تقديم خدمات ديكور وطلاء عالية الجودة تساهم في تحسين جودة الحياة وإضفاء الجمال والأناقة على المنازل. نسعى لتحقيق ذلك من خلال الالتزام بالابتكار والجودة والتفاني في العمل، لنمنح عملاءنا مساحات تعكس شخصياتهم وأحلامهم. نؤمن بأن كل تفصيل مهم، ونسعى لجعل كل مشروع تجربة فريدة ومميزة تلبي توقعات عملائنا وتفوقها.</p>
        </div>
      </section>
      <section className="services mt-5 w-[98%] rounded-3xl text-black py-24  ">
        <div className="container text-center">
          <h2 className='text-6xl mt-4 text-black mb-10 heading font-bold rw'>خدماتنا</h2>
          <div className="grid grid-cols-3 gap-8 justify-between items-center">
            <div className="service shadow-xl p-5 rounded-[2rem]">
              <img className='w-14 h-14  mx-auto' src={roof} alt="" />
              <h3 className='font-bold text-2xl my-3'>جيبس اسقف</h3>
              <p className='text-lg'>نقدم خدمات تركيب وتشكيل جيبس الأسقف بأعلى معايير الجودة والدقة، لنضفي على أسقف منازلكم لمسة من الفخامة والأناقة. يستخدم فريقنا مواد متينة وتقنيات حديثة لضمان تشطيب مثالي يدوم طويلاً.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] bg-[#0B409C]/80 text-white shadow-[#0B409C]/40">
              <img className='w-14 h-14  mx-auto' src={wall} alt="" />
              <h3 className='font-bold text-2xl my-3'>ديكور الجدران</h3>
              <p className='text-lg'>نحن متخصصون في تصميم وتنفيذ ديكور  الجدران الذي يحول المساحات العادية إلى قطع فنية مميزة. سواء كنت تفضل التصاميم الكلاسيكية أو العصرية، نضمن لك نتائج تلبي ذوقك وتضفي على منزلك لمسة جمالية فريدة.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] ">
              <img className='w-14 h-14  mx-auto' src={home} alt="" />
              <h3 className='font-bold text-2xl my-3'>تصميم منازل</h3>
              <p className='text-lg'>
نوفر حلول تصميم متكاملة للمنازل تجمع بين الجمال والوظيفية. يعمل فريقنا معكم لتحويل رؤيتكم إلى واقع ملموس، مع التركيز على التفاصيل الدقيقة التي تجعل كل مساحة تعبر عن شخصيتكم واحتياجاتكم.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] ">
              <img className='w-14 h-14  mx-auto' src={repair} alt="" />
              <h3 className='font-bold text-2xl my-3'>طلاء فني</h3>
              <p className='text-lg'>
              نقدم خدمات طلاء متخصصة تتضمن رسم رسومات فنية وإبداعية على الجدران، لنضفي على منزلكم طابعاً فريداً وجذاباً يعكس ذوقكم وشخصيتكم.
              </p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] ">
              <img className='w-14 h-14  mx-auto' src={course} alt="" />
              <h3 className='font-bold text-2xl my-3'> كورسات تدريبية</h3>
              <p className='text-lg'>
              نوفر كورسات تدريبية متخصصة في مجالات الديكور والطلاء، مصممة لتزويدكم بالمعرفة والمهارات اللازمة لتحقيق أفضل النتائج في مشاريعكم الخاصة.</p>
            </div>
            <div className="service shadow-xl p-5 rounded-[2rem] ">
              <img className='w-14 h-14  mx-auto' src={person} alt="" />
              <h3 className='font-bold text-2xl my-3'>نصح وإرشاد </h3>
              <p className='text-lg'>
              نقدم خدمات نصح وإرشاد احترافية حيث يمكنكم الاستفادة من آراء خبرائنا وتوجيهاتهم بدون الحاجة إلى تنفيذ العمل، مما يساعدكم على اتخاذ قرارات مستنيرة لتحسين مساحاتكم.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Team mt-5 w-[98%] rounded-3xl text-white py-16 bg-blue-zodiac ">
        <div className="container text-center">
          <h2 className='text-6xl mt-4  mb-10 heading font-bold rw'>فريقنا</h2>
          <p className='text-lg'>
            يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وتصميم المنازل، مستندين إلى خبرة تمتد لما يقارب 
            <b> 8 إلى 10 سنوات</b>. يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم
          </p>

          {/* <p >يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وطلاء المنازل، مستندين إلى خبرة تمتد  لما يقارب 8 إلى 10 سنوات . يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم.</p> */}
          <div className="grid mt-16 grid-cols-4 gap-6 justify-between items-center">
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
            <div className="expert">
              <img className='aspect-square rounded-3xl' src={expret} alt="ppf expert profile" />
              <h3 className='font-semibold text-2xl mt-4'>محمد حسان</h3>
              <p>مصمم منازل</p>
              <p> <span className='font-semibold'>خبرة : </span>8 سنوات</p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio mt-5 w-[98%] rounded-3xl text-black py-16 bg-blue-light">
        <div className="container text-center">
          <h2 className='text-6xl mt-4  mb-10 heading font-bold rw'>اعمالنا</h2>
          <p className='text-lg'>
            نفخر بعرض مجموعة من أعمالنا المتميزة في مجال الديكور وطلاء المنازل، والتي تعكس التزامنا بالجودة والابتكار.
          </p>

          {/* <p >يفخر فريقنا بتقديم خدمات متميزة في مجال الديكور وطلاء المنازل، مستندين إلى خبرة تمتد  لما يقارب 8 إلى 10 سنوات . يتكون فريقنا من خبراء متخصصين وشغوفين بمجالهم، يعملون بجد واجتهاد لضمان تحقيق أعلى مستويات الجودة والرضا لعملائنا. بفضل معرفتهم العميقة وتقنياتهم المتطورة، يمكنكم الوثوق بأن كل مشروع سيتم إنجازه بدقة واحترافية، ليلبي تطلعاتكم ويضفي جمالًا ووظائفية على منازلكم.</p> */}
          <div className="grid mt-16 grid-cols-3 gap-6 justify-between items-center">
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={paint} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>محمد حسان</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={paint} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>محمد حسان</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={paint} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>محمد حسان</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={paint} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>محمد حسان</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={paint} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>محمد حسان</h3>
            </div>
            <div className="work relative">
              <img className='aspect-square rounded-3xl' src={paint} alt="ppf expert profile" />
              <h3 className='font-bold text-2xl bottom-10 text-white absolute right-4'>محمد حسان</h3>
            </div>
            
          </div>
        </div>
      </section>
      </main>
    </>
  )
}

export default App
