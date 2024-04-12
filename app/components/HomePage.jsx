// "use client";
import Columns from "./Columns/Columns";
import ContentImage from "./ContentImage/ContentImage";
import Content from "./Content/Content";
import Accordion from "./Accordion/Accordion";
import MotionBTTContainer from "./Motion/MotionBTTContainer";
import BadgeMessage from "./Badge/BadgeMessage";
import BadgeGroup from "./Badge/BadgeGroup";
import BadgeIcon from "./Badge/BadgeIcon";
import SectionContainer from "./Section/SectionContainer";
import PageTitle from "./Title/PageTitle";
import CardBody from "./Card/CardBody";
import CardGroup from "./Card/CardGroup";
import CardHeader from "./Card/CardHeader";
import CardImage from "./Card/CardImage";
import Card from "./Card/Card";
import PriceTable2 from "./Pricing/DynamicPricingTable";
// import PriceTable3 from "./Pricing/PriceTable";
import CallToAction from "./CTA/CTA";
import feature3 from "./../public/features3.png";
import feature4 from "./../public/features4.png";
import Footer from "./Footer/Footer";
import HomeBanner from "./Banner/HomeBanner";

export default function HomePage() {
  return (
    <>
      <div className="main-wrapper bg-[#181818] relative z-10 pb-20 pt-20 ">
        {/* Page Banner  */}
        <HomeBanner />
        {/* Components Container */}
        <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
          {/* Features */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="features" className="features pt-10">
              <BadgeGroup alignment="center">
                <BadgeMessage>Features</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto  text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                Simplify Your Nutrition Journey with NutriTrack
              </PageTitle>
              <Content
                className="text-center mt-6 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                alignment="center"
              >
                <p>
                  Hey there! Welcome to NutriTrack, the ultimate nutrition meal
                  planner powered by Notion. We&apos;ve got some awesome
                  features lined up to make your nutrition journey a piece of
                  cake (pun intended). Check them out:
                </p>
              </Content>
              <ContentImage />
            </SectionContainer>
          </MotionBTTContainer>
          {/* Card Container Tabs */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer className="feature-tabs pt-20 ">
              <BadgeGroup alignment="center">
                <BadgeMessage>More Features</BadgeMessage>
                <BadgeIcon icon="twemoji:waving-hand" />
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto py-1 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                Master Your Meal Planning and Nutrition Journey
              </PageTitle>
              <Content
                className="text-center mt-6 font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                alignment="center"
              >
                <p>
                  Our comprehensive Notion template designed to empower you on
                  your meal planning and nutrition journey. With our
                  user-friendly features, customizable layouts, and seamless
                  recipe integration, taking control of your meals has never
                  been easier.
                </p>
              </Content>
              <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                <Card className="col-span-1 text-primary-900">
                  <CardBody className="w-full bg-white-900/20 p-12">
                    <CardImage
                      src={feature4}
                      alt="Customizable Layouts image used."
                    />
                    <CardHeader className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 !text-2xl !font-bold">
                      Customizable Layouts
                    </CardHeader>
                    <p>
                      Personalize your meal planning experience with our
                      flexible layouts. Tailor your sections, categories, and
                      tabs to suit your unique style and organization
                      preferences. Our template adapts to your needs, providing
                      a seamless and personalized planning experience.
                    </p>
                  </CardBody>
                </Card>
                <Card className="col-span-1 text-primary-900">
                  <CardBody className="w-full bg-white-900/20 p-12">
                    <CardImage
                      src={feature3}
                      alt="Progress Tracking image used."
                    />
                    <CardHeader className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 !text-2xl !font-bold">
                      Progress Tracking
                    </CardHeader>
                    <p>
                      Celebrate your wins and stay motivated on your nutrition
                      journey. NutriTrack allows you to monitor your progress
                      with weight, measurements, and other key metrics. Track
                      your improvements over time and see the positive impact of
                      your healthy choices.
                    </p>
                  </CardBody>
                </Card>
              </CardGroup>
            </SectionContainer>
          </MotionBTTContainer>
          {/* Pricing Table */}
          <PriceTable2 />
          {/* <PriceTable3 /> */}
          {/* Testimonials */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="testimonials" className="benefits">
              <BadgeGroup alignment="left">
                <BadgeMessage>Testimonials</BadgeMessage>
                <BadgeIcon icon="twemoji:waving-hand" />
              </BadgeGroup>
              <PageTitle
                className=" text-transparent py-1 bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                This is what our customers have to say about this template
              </PageTitle>
              <Columns />
            </SectionContainer>
          </MotionBTTContainer>
          {/* CTA */}
          <CallToAction />
          {/* Accordions */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="faq" className="faq">
              <BadgeGroup alignment="center">
                <BadgeMessage>FAQ</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto py-1 text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500"
                type="default"
              >
                Got some burning questions about NutriTrack? <br></br>
                <br></br>No worries! We&apos;ve got the answers you need:
              </PageTitle>
              <Accordion />
            </SectionContainer>
          </MotionBTTContainer>
        </SectionContainer>
      </div>
      <Footer />
    </>
  );
}