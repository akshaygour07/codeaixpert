import Header from "./components/Header";
import Front from "./components/Front";
import MostPopularCourse from "./components/Courses";
import Student from "./components/SuccessfulStudent";
import Feedback from "./components/Feedback";
import Faq from "./components/Faq";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Front />
      <MostPopularCourse />
      <Student />
      <Feedback />
      <Faq />
      <Community />
      <Footer />
    </>
  );
}
