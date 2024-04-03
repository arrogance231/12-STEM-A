import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return( <main className= " bg-gradient-to-r from-sexy-violet to-accent animate-text">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
    <PopularProducts/>
    </section> <section className="padding">
    <SuperQuality/>
    </section> <section className="padding-x py-10">
    <Services/>
    </section> <section className="padding">
    <SpecialOffers/>
    </section> <section className=" padding">
    <CustomerReviews/>
    </section> <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
    </section> <section className=" padding-x padding-t pb-8">
    <Footer/>
    </section> 
  </main>)
};

export default App